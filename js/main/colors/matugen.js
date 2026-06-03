// const fs = require('fs');

const cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
cssLink.href = "https://millennium.host/v1/themes/Material-Theme/css/main/colors/matugen.css";
document.head.appendChild(cssLink);

setInterval(() => {
  cssLink.href = "https://millennium.host/v1/themes/Material-Theme/css/main/colors/matugen.css";
}, 500); // Check every 5 seconds