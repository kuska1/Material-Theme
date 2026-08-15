const logText = '%c Material '
const logCss = 'background: #256ab8; color: #ffffff'

console.debug(logText, logCss, `matugen.js is running in ${window.location.href}.`);

const PRIMARY_URL = "https://steamloopback.host/skins/Material-Theme/css/main/colors/matugen.css";
const FALLBACK_URL = "https://millennium.host/v1/themes/Material-Theme/css/main/colors/matugen.css";

let link_url = PRIMARY_URL;

const styleTag = document.createElement('style');
document.head.appendChild(styleTag);

async function refresh() {
  try {
    const res = await fetch(link_url);
    const text = await res.text();

    if (!res.ok || text.trim().toLowerCase().startsWith('<html') || text.includes('File Not Found')) {
      const newUrl = link_url === PRIMARY_URL ? FALLBACK_URL : PRIMARY_URL;
      console.debug(logText, logCss, `${link_url} returned "File Not Found", switching to ${newUrl}`);
      link_url = newUrl;
      return;
    }

    styleTag.textContent = text;
  } catch (e) {
    console.debug(logText, logCss, `Failed to fetch ${link_url}, switching to another URL...`);
    link_url = link_url === PRIMARY_URL ? FALLBACK_URL : PRIMARY_URL;
  }
}

refresh();
setInterval(refresh, 1500);