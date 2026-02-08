import {
  Hct,
  SchemeFidelity,
  argbFromHex,
  hexFromArgb
} from './material-color-utils.js';

const prefix = '--md-sys-color-';

/**
 * Converts camelCase strings to kebab-case.
 * Example: primaryContainer -> primary-container
 */
const toKebabCase = (str) => str.replace(/[A-Z]/g, m => '-' + m.toLowerCase());

function generateAndApplyScheme() {
  const computedStyle = getComputedStyle(document.documentElement);
  
  // Retrieve the system accent color and the current theme mode (light/dark) from CSS variables
  const sourceHex = computedStyle.getPropertyValue('--SystemAccentColor').trim();
  const schemeMode = computedStyle.getPropertyValue('--scheme').trim();

  if (!sourceHex || !schemeMode) {
    console.warn('Material Utils: sourceHex or scheme is not defined in CSS.');
    return;
  }

  // 1. Create an HCT (Hue, Chroma, Tone) color object for high-precision color matching
  const sourceHct = Hct.fromInt(argbFromHex(sourceHex));

  // 2. Initialize SchemeFidelity (the "Color Match" algorithm)
  // This scheme prioritizes staying true to the input color's hue and colorfulness.
  const isDark = schemeMode === 'dark';
  const m3Scheme = new SchemeFidelity(sourceHct, isDark, 0.0);

  // 3. Define the list of Material 3 color roles to be generated
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

  // 4. Map the generated colors to CSS variables on the :root element
  colorRoles.forEach(role => {
    const argb = m3Scheme[role];
    if (argb !== undefined) {
      const hex = hexFromArgb(argb);
      const cssVarName = prefix + toKebabCase(role);
      document.documentElement.style.setProperty(cssVarName, hex);
    }
  });

  console.info(`Material Utils: Fidelity Scheme applied successfully using ${sourceHex}`);
}

// Initial execution
generateAndApplyScheme();

/**
 * Setup MutationObserver to watch for dynamic changes in the Steam accent color.
 * SteamBrew/Millenium injects the color into a specific style node.
 */
const styleNode = document.getElementById('SystemAccentColorInject');
if (styleNode) {
  const observer = new MutationObserver(() => generateAndApplyScheme());
  
  observer.observe(styleNode, { 
    childList: true, 
    characterData: true, 
    subtree: true 
  });
} else {
  console.warn('Material Utils: #SystemAccentColorInject not found. Dynamic updates disabled.');
}