import {
  themeFromSourceColor,
  argbFromHex,
  hexFromArgb,
  argbFromRgb
} from 'https://cdn.skypack.dev/@material/material-color-utilities';

const prefix = '--md-sys-color-';

async function getAccentColorFromImage(img) {
  return new Promise((resolve, reject) => {
    if (!img.complete) {
      img.onload = () => resolve(getAccentColorFromImage(img));
      return;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    if (canvas.width === 0 || canvas.height === 0) return reject('Image not ready');

    try {
      ctx.drawImage(img, 0, 0);
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      const colorCount = {};
      let max = 0, dominant = '';

      for (let i = 0; i < data.length; i += 4) {
        const color = `${data[i]},${data[i+1]},${data[i+2]}`;
        colorCount[color] = (colorCount[color] || 0) + 1;
        if (colorCount[color] > max) {
          max = colorCount[color];
          dominant = color;
        }
      }

      if (dominant) {
        const [r, g, b] = dominant.split(',').map(Number);
        resolve(argbFromRgb(r, g, b));
      } else {
        reject('No dominant color found');
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
    if (img) {
      const color = await getAccentColorFromImage(img);
      return await generateAndApplyTheme(color);
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
updateTheme();