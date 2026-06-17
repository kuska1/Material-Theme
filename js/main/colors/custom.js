import {
  Hct,
  SchemeFidelity,
  SchemeTonalSpot,
  SchemeVibrant,
  SchemeExpressive,
  SchemeNeutral,
  SchemeMonochrome,
  argbFromHex
} from './material-color-utils.js';

const logText = '%c Material '
const logCss = 'background: #256ab8; color: #ffffff'

console.debug(logText, logCss, `custom.js is running in ${window.location.href}.`);

const prefix = '--md-sys-color-';

/**
  * Independent ARGB to HEX conversion.
  * The standard hexFromArgb function is broken in the Steam Community, so we're using our own.
  */
const argbToHexCustom = (argb) => {
  const hex = (argb >>> 0).toString(16).padStart(8, '0');
  return '#' + hex.substring(2).toLowerCase();
};

/**
 * Converts camelCase strings to kebab-case.
 * Example: primaryContainer -> primary-container
 */
const toKebabCase = (str) => str.replace(/[A-Z]/g, m => '-' + m.toLowerCase());

/**
 * Maps the --md-color-generation-style CSS variable to the corresponding Scheme class.
 * Falls back to SchemeFidelity if the value is unknown or not set.
 */
function createScheme(sourceHct, isDark) {
  const style = getComputedStyle(document.documentElement)
    .getPropertyValue('--md-color-generation-style').trim().toLowerCase();

  switch (style) {
    case 'tonal-spot':   return new SchemeTonalSpot(sourceHct, isDark, 0.0);
    case 'vibrant':      return new SchemeVibrant(sourceHct, isDark, 0.0);
    case 'expressive':   return new SchemeExpressive(sourceHct, isDark, 0.0);
    case 'neutral':      return new SchemeNeutral(sourceHct, isDark, 0.0);
    case 'monochrome':   return new SchemeMonochrome(sourceHct, isDark, 0.0);
    case 'fidelity':
    default:             return new SchemeFidelity(sourceHct, isDark, 0.0);
  }
}

function generateAndApplyScheme() {
  const computedStyle = getComputedStyle(document.documentElement);
  
  // Retrieve the system accent color and the current theme mode (light/dark) from CSS variables
  const sourceHex = computedStyle.getPropertyValue('--custom-accent-color').trim();
  const schemeMode = computedStyle.getPropertyValue('--scheme').trim();

  if (!sourceHex || !schemeMode) {
    console.error(logText, logCss, `sourceHex (${sourceHex ?? null}) or scheme (${schemeMode ?? null}) is not defined in CSS.`);
    return;
  }

  // 1. Create an HCT (Hue, Chroma, Tone) color object for high-precision color matching
  const sourceHct = Hct.fromInt(argbFromHex(sourceHex));

  const isDark = schemeMode === 'dark';
  const m3Scheme = createScheme(sourceHct, isDark);
  const styleName = getComputedStyle(document.documentElement)
    .getPropertyValue('--md-color-generation-style').trim() || 'fidelity';

  // 2. Define the list of Material 3 color roles to be generated
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

  // 3. Build CSS variable declarations and inject into <style id="material-colors"> in <head>
  const lines = [];
  colorRoles.forEach(role => {
    try {
      let argb = m3Scheme[role];
      if (argb !== undefined && argb !== null) {
        lines.push(`  ${prefix}${toKebabCase(role)}: ${argbToHexCustom(argb)};`);
      }
    } catch (err) {
      console.error(logText, logCss, `Error: ${err}`);
    }
  });

  let styleEl = document.getElementById('material-colors');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'material-colors';
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = `:root {${lines.join('\n')}}`;

  console.info(logText, logCss, `${styleName} Scheme applied successfully using ${sourceHex}.`);
}

// Initial execution
generateAndApplyScheme();

/**
 * Setup MutationObserver to watch for dynamic changes in the Steam accent color.
 * SteamBrew/Millenium injects the color into a specific style node.
 */
const styleNode = document.getElementById('RootColors');
if (styleNode) {
  const observer = new MutationObserver(() => generateAndApplyScheme());
  
  observer.observe(styleNode, { 
    childList: true, 
    characterData: true, 
    subtree: true 
  });
} else {
  console.warn(logText, logCss, '#RootColors not found. Dynamic updates disabled.');
}