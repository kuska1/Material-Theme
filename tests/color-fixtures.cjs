// Original procedural fixtures; no external artwork is required by the tests.
function image(name, pixel, width = 100, height = 60) {
    const pixels = new Uint8ClampedArray(width * height * 4);
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            pixels.set(pixel(x, y, width, height), (y * width + x) * 4);
        }
    }
    return { name, width, height, pixels };
}

const fixtures = [
    image('green gradient with a small red patch', (x, y, w, h) => x < w * 0.03
        ? [220, 35, 45, 255]
        : [20 + Math.round(50 * x / w), 100 + Math.round(100 * y / h), 30 + Math.round(60 * (x + y) / (w + h)), 255]),
    image('muted illustration', (x, y) => [90 + x % 24, 105 + y % 18, 96 + (x + y) % 20, 255]),
    image('white background with red illustration', (x, y, w) => x < w * 0.85 ? [255, 255, 255, 255] : [210, 35, 40, 255]),
    image('black background with small cyan accent', (x, y, w) => x < w * 0.95 ? [0, 0, 0, 255] : [20, 190, 200, 255]),
    image('grayscale', (x, y) => {
        const value = (x * 3 + y * 5) % 256;
        return [value, value, value, 255];
    }),
    image('two competing colors', (x, y, w) => x < w * 0.5 ? [40, 170, 70, 255] : [45, 65, 190, 255]),
    image('dark textured blue', (x, y) => [5 + x % 15, 8 + y % 20, 25 + (x + y) % 35, 255]),
    image('translucent red with opaque green', (x, y, w) => x < w * 0.8 ? [220, 20, 20, 128] : [30, 155, 60, 255]),
    image('saturated gradient', (x, y) => [180 + x % 60, 30 + y % 25, 80 + (x + y) % 80, 255]),
    image('bright yellow', () => [230, 205, 30, 255]),
    image('fully transparent', () => [0, 0, 0, 0]),
    image('low resolution green', () => [30, 155, 60, 255], 2, 2),
    image('sparse noise over a blue gradient', (x, y, w, h) => y === 0 && x < 3
        ? [230, 25, 20, 255]
        : [30 + Math.round(25 * x / w), 55 + Math.round(45 * y / h), 135 + Math.round(80 * (x + y) / (w + h)), 255]),
];

module.exports = { image, fixtures };
