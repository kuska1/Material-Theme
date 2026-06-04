const logText = '%c Material '
const logCss = 'background: #256ab8; color: #ffffff'

console.debug(logText, logCss, `matugen.js is running in ${window.location.href}.`);

const PRIMARY_URL = "https://steamloopback.host/skins/Material-Theme/css/main/colors/matugen.css";
const FALLBACK_URL = "https://millennium.host/v1/themes/Material-Theme/css/main/colors/matugen.css";

let link_url = PRIMARY_URL;

const cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';

cssLink.onerror = () => {
  console.debug(logText, logCss, `Failed to load ${link_url}, switching to another URL...`);
  link_url === PRIMARY_URL ? link_url = FALLBACK_URL : link_url = PRIMARY_URL;
  cssLink.href = link_url;
  cssLink.onerror = null;
};

cssLink.href = link_url;
document.head.appendChild(cssLink);

setInterval(() => {
  cssLink.href = link_url;
}, 1500);