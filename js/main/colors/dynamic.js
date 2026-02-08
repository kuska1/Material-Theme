import {
  Hct,
  SchemeFidelity,
  argbFromHex,
  hexFromArgb,
  argbFromRgb
} from './material-color-utils.js';

/**
 * Apply dynamic-only color transitions if animations are globally enabled.
 * This makes theme changes smooth when switching between games.
 */
const styleId = 'material-dynamic-transitions';
if (!document.getElementById(styleId)) {
    const animationsEnabled = getComputedStyle(document.documentElement)
        .getPropertyValue('--dynamic-color-transition-enabled').trim();
    
    if (animationsEnabled === 'true') {
        const css = `*:not(img) {
            transition: background-color 0.4s cubic-bezier(0.4, 0.0, 0.2, 1), 
                        color 0.4s cubic-bezier(0.4, 0.0, 0.2, 1), 
                        fill 0.4s cubic-bezier(0.4, 0.0, 0.2, 1), 
                        border-color 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
        }`;
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = css;
        document.head.appendChild(style);
    }
}

const prefix = '--md-sys-color-';

/**
 * Helper to convert camelCase to kebab-case for CSS variables.
 */
const toKebabCase = (str) => str.replace(/[A-Z]/g, m => '-' + m.toLowerCase());

/**
 * Converts RGB to HSL for vibrancy filtering during image color extraction.
 */
function rgbToHsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) { h = s = 0; } 
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h, s, l];
}

/**
 * Extracts a dominant vibrant color from a game cover image.
 */
async function getAccentColorFromImage(img) {
  return new Promise((resolve, reject) => {
    if (!img.complete) {
      img.onload = () => resolve(getAccentColorFromImage(img));
      img.onerror = reject;
      return;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    // Downscale for performance
    const newWidth = 100;
    const newHeight = (img.naturalHeight / img.naturalWidth) * newWidth;
    canvas.width = newWidth;
    canvas.height = newHeight;

    if (canvas.width === 0 || canvas.height === 0) return reject('Image dimensions error');

    try {
      ctx.drawImage(img, 0, 0, newWidth, newHeight);
      const data = ctx.getImageData(0, 0, newWidth, newHeight).data;
      const colorCount = {};
      let max = 0, dominant = '';

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i+1], b = data[i+2];
        const [h, s, l] = rgbToHsl(r, g, b);

        // Filter for vibrant, non-extreme colors (not too dark or too white)
        if (s > 0.25 && l > 0.1 && l < 0.9) {
          const color = `${r},${g},${b}`;
          colorCount[color] = (colorCount[color] || 0) + 1;
          if (colorCount[color] > max) { max = colorCount[color]; dominant = color; }
        }
      }

      if (dominant) {
        const [r, g, b] = dominant.split(',').map(Number);
        resolve(argbFromRgb(r, g, b));
      } else {
        reject('No vibrant color found in image');
      }
    } catch (e) { reject(e); }
  });
}

/**
 * Generates and applies a Material 3 Fidelity Scheme to the document.
 */
async function generateAndApplyTheme(sourceArgb) {
  const computedStyle = getComputedStyle(document.documentElement);
  const schemeMode = computedStyle.getPropertyValue('--scheme').trim() || 'light';
  const isDark = schemeMode === 'dark';

  // Create HCT and Fidelity Scheme (Color Match enabled)
  const sourceHct = Hct.fromInt(sourceArgb);
  const m3Scheme = new SchemeFidelity(sourceHct, isDark, 0.0);

  // Comprehensive list of all Material 3 color roles
  const colorRoles = [
    'primary', 'onPrimary', 'primaryContainer', 'onPrimaryContainer',
    'secondary', 'onSecondary', 'secondaryContainer', 'onSecondaryContainer',
    'tertiary', 'onTertiary', 'tertiaryContainer', 'onTertiaryContainer',
    'error', 'onError', 'errorContainer', 'onErrorContainer',
    'background', 'onBackground', 
    'surface', 'onSurface', 'surfaceVariant', 'onSurfaceVariant',
    'surfaceDim', 'surfaceBright',
    'surfaceContainerLowest', 'surfaceContainerLow', 'surfaceContainer', 'surfaceContainerHigh', 'surfaceContainerHighest',
    'outline', 'outlineVariant', 'shadow', 'scrim', 'surfaceTint',
    'inverseSurface', 'inverseOnSurface', 'inversePrimary',
    'primaryFixed', 'primaryFixedDim', 'onPrimaryFixed', 'onPrimaryFixedVariant',
    'secondaryFixed', 'secondaryFixedDim', 'onSecondaryFixed', 'onSecondaryFixedVariant',
    'tertiaryFixed', 'tertiaryFixedDim', 'onTertiaryFixed', 'onTertiaryFixedVariant'
  ];

  // Apply colors as CSS variables
  colorRoles.forEach(role => {
    const argb = m3Scheme[role];
    if (argb !== undefined) {
      document.documentElement.style.setProperty(prefix + toKebabCase(role), hexFromArgb(argb));
    }
  });
}

/**
 * Main update logic: checks for a game cover image first, then falls back to system color.
 */
async function updateTheme() {
  const img = document.querySelector('img.HNbe3eZf6H7dtJ042x1vM'); // Selector for game artwork
  try {
    if (img && img.src && !img.src.includes('clear.png')) {
      const color = await getAccentColorFromImage(img);
      await generateAndApplyTheme(color);
      return;
    }
  } catch (e) {
    console.warn('Material Utils: Image-based color failed, falling back:', e);
  }

  const systemColor = getComputedStyle(document.documentElement).getPropertyValue('--SystemAccentColor').trim();
  if (systemColor) {
    await generateAndApplyTheme(argbFromHex(systemColor));
  }
}

// Debounce helper to prevent excessive calculations during UI updates
let updateTimeout;
function debounceUpdateTheme() {
  clearTimeout(updateTimeout);
  updateTimeout = setTimeout(updateTheme, 200);
}

// Watch for game artwork (cover images) being added to the DOM
const observer = new MutationObserver((mutations) => {
  for (const m of mutations) {
    for (const node of m.addedNodes) {
      if (node.nodeType === 1) {
        if (node.matches?.('img.HNbe3eZf6H7dtJ042x1vM') || node.querySelector?.('img.HNbe3eZf6H7dtJ042x1vM')) {
          debounceUpdateTheme();
          return;
        }
      }
    }
  }
});
observer.observe(document.body, { childList: true, subtree: true });

// Watch for changes in the system accent color style node
const styleNode = document.getElementById('SystemAccentColorInject');
if (styleNode) {
  const styleObserver = new MutationObserver(debounceUpdateTheme);
  styleObserver.observe(styleNode, { childList: true, characterData: true, subtree: true });
}

// Run immediately on script load
debounceUpdateTheme();