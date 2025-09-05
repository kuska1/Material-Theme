import {
  themeFromSourceColor,
  argbFromHex,
  hexFromArgb,
  argbFromRgb
} from 'https://cdn.skypack.dev/@material/material-color-utilities';

// Apply dynamic-only color transitions, only if animations are globally enabled
const styleId = 'material-dynamic-transitions';
if (!document.getElementById(styleId)) {
    const animationsEnabled = getComputedStyle(document.documentElement).getPropertyValue('--dynamic-color-transition-enabled').trim();
    if (animationsEnabled === 'true') {
        const css = `*:not(img) {
            transition: background-color 0.4s cubic-bezier(0.4, 0.0, 0.2, 1), color 0.4s cubic-bezier(0.4, 0.0, 0.2, 1), fill 0.4s cubic-bezier(0.4, 0.0, 0.2, 1), border-color 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
        }`;
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = css;
        document.head.appendChild(style);
    }
}

const prefix = '--md-sys-color-';

function rgbToHsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}

async function getAccentColorFromImage(img) {
  return new Promise((resolve, reject) => {
    if (!img.complete) {
      img.onload = () => resolve(getAccentColorFromImage(img));
      img.onerror = reject;
      return;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', {
      willReadFrequently: true
    });
    
    // Optimization: Downscale the image to a smaller canvas to reduce pixel count
    const newWidth = 100;
    const newHeight = (img.naturalHeight / img.naturalWidth) * newWidth;
    canvas.width = newWidth;
    canvas.height = newHeight;

    if (canvas.width === 0 || canvas.height === 0) {
      return reject('Image not ready or has no dimensions');
    }

    try {
      ctx.drawImage(img, 0, 0, newWidth, newHeight);
      const data = ctx.getImageData(0, 0, newWidth, newHeight).data;
      const colorCount = {};
      let max = 0,
        dominant = '';

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        const [h, s, l] = rgbToHsl(r, g, b);

        if (s > 0.25 && l > 0.05 && l < 0.95) {
          const color = `${r},${g},${b}`;
          colorCount[color] = (colorCount[color] || 0) + 1;
          if (colorCount[color] > max) {
            max = colorCount[color];
            dominant = color;
          }
        }
      }

      if (dominant) {
        const [r, g, b] = dominant.split(',').map(Number);
        resolve(argbFromRgb(r, g, b));
      } else {
        reject('No dominant vibrant color found');
      }
    } catch (e) {
      reject(e);
    }
  });
}

async function generateAndApplyTheme(sourceArgb) {
  const scheme = getComputedStyle(document.documentElement)
    .getPropertyValue('--scheme').trim() || 'light';

  const theme = themeFromSourceColor(sourceArgb);

  const props = theme.schemes[scheme]?.props || {};
  for (const [key, val] of Object.entries(props)) {
    const varName = prefix + key.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
    document.documentElement.style.setProperty(varName, hexFromArgb(val));
  }

  const containerTones = {
    'lowest': [100, 4],
    'low': [96, 10],
    '': [94, 12],
    'high': [92, 17],
    'highest': [90, 22]
  };

  for (const [suffix, [lightTone, darkTone]] of Object.entries(containerTones)) {
    const tone = scheme === 'light' ? lightTone : darkTone;
    const varName = `--md-sys-color-surface-container${suffix ? '-' + suffix : ''}`;
    document.documentElement.style.setProperty(varName, hexFromArgb(theme.palettes.neutral.tone(tone)));
  }

  const primaryFixed = {
    'primary-fixed': 90,
    'on-primary-fixed': 10,
    'primary-fixed-dim': 80,
    'on-primary-fixed-variant': 30
  };

  const tertiaryFixed = {
    'tertiary-fixed': 90,
    'on-tertiary-fixed': 10,
    'tertiary-fixed-dim': 80,
    'on-tertiary-fixed-variant': 30
  };

  for (const [name, tone] of Object.entries(primaryFixed)) {
    document.documentElement.style.setProperty(`--md-sys-color-${name}`, hexFromArgb(theme.palettes.primary.tone(tone)));
  }
  for (const [name, tone] of Object.entries(tertiaryFixed)) {
    document.documentElement.style.setProperty(`--md-sys-color-${name}`, hexFromArgb(theme.palettes.tertiary.tone(tone)));
  }
}

async function updateTheme() {
  const img = document.querySelector('img.HNbe3eZf6H7dtJ042x1vM');
  try {
    if (img && img.src) {
      const color = await getAccentColorFromImage(img);
      await generateAndApplyTheme(color);
      return;
    }
  } catch (e) {
    console.warn('Image-based accent color failed, fallback to system:', e);
  }

  const systemColor = getComputedStyle(document.documentElement).getPropertyValue('--SystemAccentColor').trim();
  if (systemColor) {
    await generateAndApplyTheme(argbFromHex(systemColor));
  } else {
    console.warn('No --SystemAccentColor available');
  }
}

// Debounce
let updateTimeout;
function debounceUpdateTheme() {
  clearTimeout(updateTimeout);
  updateTimeout = setTimeout(updateTheme, 200);
}

// Observe for relevant <img> elements
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

// Optional: observe changes to #SystemAccentColorInject
const styleNode = document.getElementById('SystemAccentColorInject');
if (styleNode) {
  const styleObserver = new MutationObserver(debounceUpdateTheme);
  styleObserver.observe(styleNode, {
    childList: true,
    characterData: true,
    subtree: true
  });
}

// Initial run
debounceUpdateTheme();