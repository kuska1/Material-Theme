import {
  Hct,
  SchemeTonalSpot,
  argbFromHex
} from './material-color-utils.js';

const logText = '%c Material '
const logCss = 'background: #256ab8; color: #ffffff'

const PRIMARY_URL = "https://steamloopback.host/skins/Material-Theme/css/main/colors/matugen.css";
const FALLBACK_URL = "https://millennium.host/v1/themes/Material-Theme/css/main/colors/matugen.css";
const SOURCES = [PRIMARY_URL, FALLBACK_URL];
const REFRESH_MS = 1500;
const PREFIX = '--md-sys-color-';

/**
 * Matugen setups differ: some write `rgb(r, g, b)`, some only `r, g, b`,
 * and some desktop shells write a GTK-style file with no Material roles at all.
 * A file is only used when it actually carries Material colors,
 * otherwise the next source (or the accent color inside it) is tried.
 */
export function hasMaterialColors(text) {
  return new RegExp(`${PREFIX}primary\\s*:`).test(text);
}

/**
 * Wraps bare `r, g, b` values in rgb(), so they work as colors.
 */
export function normalizeMaterialCss(text) {
  return text.replace(
    new RegExp(`(${PREFIX}[\\w-]+\\s*:\\s*)(\\d{1,3}\\s*,\\s*\\d{1,3}\\s*,\\s*\\d{1,3})(\\s*[;}])`, 'g'),
    '$1rgb($2)$3'
  );
}

/**
 * Finds an accent color in a GTK/libadwaita-style matugen output.
 * Returns a hex string or null.
 */
export function accentFromGtkCss(text) {
  const rgb = text.match(/--adw-accent(?:-bg)?-rgb\s*:\s*(\d{1,3})[\s,]+(\d{1,3})[\s,]+(\d{1,3})/);
  if (rgb) {
    return '#' + rgb.slice(1, 4).map(n => Math.min(255, Number(n)).toString(16).padStart(2, '0')).join('');
  }
  const hex = text.match(/(?:--accent-(?:bg-)?color|@define-color\s+accent_(?:bg_)?color)\s*:?\s*(#[0-9a-fA-F]{6})\b/);
  return hex ? hex[1].toLowerCase() : null;
}

/**
 * Independent ARGB to HEX conversion.
 * The standard hexFromArgb function is broken in the Steam Community, so we're using our own.
 */
const argbToHex = (argb) => '#' + (argb >>> 0).toString(16).padStart(8, '0').substring(2).toLowerCase();

const toKebabCase = (str) => str.replace(/[A-Z]/g, m => '-' + m.toLowerCase());

const COLOR_ROLES = [
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

/**
 * Builds a full Material color set from one accent color,
 * using the same scheme matugen uses by default (Tonal Spot).
 */
export function schemeCssFromAccent(hex, isDark) {
  const scheme = new SchemeTonalSpot(Hct.fromInt(argbFromHex(hex)), isDark, 0.0);
  const lines = COLOR_ROLES
    .map(role => [role, scheme[role]])
    .filter(([, argb]) => argb !== undefined && argb !== null)
    .map(([role, argb]) => `  ${PREFIX}${toKebabCase(role)}: ${argbToHex(argb)};`);
  return `:root {\n  --theme-color: "Matugen";\n  --hue-rotate: 220deg;\n${lines.join('\n')}\n}`;
}

/**
 * Turns one matugen output into usable CSS, or null if it has no usable colors.
 */
export function cssFromMatugenOutput(text, isDark) {
  if (hasMaterialColors(text)) {
    return normalizeMaterialCss(text);
  }
  const accent = accentFromGtkCss(text);
  return accent ? schemeCssFromAccent(accent, isDark) : null;
}

async function fetchText(url) {
  try {
    const res = await fetch(url, { cache: 'no-store' });
    const text = await res.text();
    if (!res.ok || text.trim().toLowerCase().startsWith('<html') || text.includes('File Not Found')) {
      return null;
    }
    return text;
  } catch (e) {
    return null;
  }
}

const isDarkMode = () =>
  getComputedStyle(document.documentElement).getPropertyValue('--scheme').trim() !== 'light';

let lastSource = null;
let lastCss = null;

async function refresh(styleTag) {
  const isDark = isDarkMode();
  for (const url of SOURCES) {
    const text = await fetchText(url);
    const css = text === null ? null : cssFromMatugenOutput(text, isDark);
    if (css === null) {
      continue;
    }
    if (url !== lastSource) {
      console.debug(logText, logCss, `matugen colors loaded from ${url}.`);
      lastSource = url;
    }
    if (css !== lastCss) {
      styleTag.textContent = css;
      lastCss = css;
    }
    return;
  }
  if (lastSource !== 'none') {
    console.warn(logText, logCss, `No usable matugen colors found in ${SOURCES.join(' or ')}.`);
    lastSource = 'none';
  }
}

if (typeof document !== 'undefined') {
  console.debug(logText, logCss, `matugen.js is running in ${window.location.href}.`);

  const styleTag = document.createElement('style');
  document.head.appendChild(styleTag);

  refresh(styleTag);
  setInterval(() => refresh(styleTag), REFRESH_MS);
}
