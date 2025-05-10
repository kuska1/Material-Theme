import {
  themeFromSourceColor,
  argbFromHex,
  hexFromArgb
} from 'https://cdn.skypack.dev/@material/material-color-utilities';

const prefix = '--md-sys-color-';

function generateAndApplyScheme() {
  const computedStyle = getComputedStyle(document.documentElement);
  let sourceHex = computedStyle.getPropertyValue('--SystemAccentColor').trim();
  let scheme = computedStyle.getPropertyValue('--scheme').trim();

  if (!sourceHex || !scheme) {
    console.warn('sourceHex or scheme is not defined');
    return;
  }

  const m3ThemeColorsJSON = themeFromSourceColor(argbFromHex(sourceHex), []);

  if (m3ThemeColorsJSON.schemes[scheme]?.props) {
    for (const [key, value] of Object.entries(m3ThemeColorsJSON.schemes[scheme].props)) {
      const cssVar = prefix + key.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
      const hex = hexFromArgb(value);
      document.documentElement.style.setProperty(cssVar, hex);
    }

    const containerTones = {
      'lowest': [100, 4],
      'low': [96, 10],
      '': [94, 12],
      'high': [92, 17],
      'highest': [90, 22]
    };

    for (const [suffix, [toneLight, toneDark]] of Object.entries(containerTones)) {
      const varName = `surface-container${suffix ? '-' + suffix : ''}`;
      const tone = scheme === 'light' ? toneLight : toneDark;
      const hex = hexFromArgb(m3ThemeColorsJSON.palettes.neutral.tone(tone));

      document.documentElement.style.setProperty(`--md-sys-color-${varName}`, hex);
    }
  } else {
    console.error(`Scheme "${scheme}" not found`);
  }
}

generateAndApplyScheme();

const styleNode = document.getElementById('SystemAccentColorInject');
if (styleNode) {
  const observer = new MutationObserver(() => {
    generateAndApplyScheme();
  });

  observer.observe(styleNode, {
    childList: true,
    characterData: true,
    subtree: true
  });
} else {
  console.warn('style#SystemAccentColorInject not found');
}
