// const fs = require('fs');

const logText = '%c Material '
const logCss = 'background: #256ab8; color: #ffffff'

console.debug(logText, logCss, `matugen.js is running in ${window.location.href}.`);

const PRIMARY_URL = "https://millennium.host/v1/themes/Material-Theme/css/main/colors/matugen.css";
const FALLBACK_URL = "https://steamloopback.host/skins/Material-Theme/css/main/colors/matugen.css";

let fetch_url = PRIMARY_URL;

const cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
document.head.appendChild(cssLink);

const applyUrl = (url) => {
  if (cssLink.href !== url) {
    cssLink.href = url;
  }
};

const switchUrl = (reason) => {
  console.debug(logText, logCss, `${fetch_url} ${reason}, switching...`);
  fetch_url = fetch_url === PRIMARY_URL ? FALLBACK_URL : PRIMARY_URL;
};

const checkAndApply = () => {
  fetch(fetch_url, { method: 'HEAD', cache: 'no-store' })
    .then(res => {
      if (!res.ok) switchUrl(`returned ${res.status}`);
    })
    .catch(() => switchUrl('unreachable'))
    .finally(() => applyUrl(fetch_url));
};

checkAndApply();
setInterval(checkAndApply, 500); // Check every 5 seconds