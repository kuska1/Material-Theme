const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');
const { image, fixtures } = require('./color-fixtures.cjs');

async function loadExtractor() {
    let sampledImage;
    const canvases = [];
    const context = vm.createContext({
        console: { debug() {}, info() {}, warn() {}, error() {} },
        window: { location: { href: 'fixture' }, addEventListener() {} },
        document: {
            documentElement: { classList: { contains: () => false } },
            querySelector: () => null,
            getElementById: () => null,
            createElement() {
                const canvas = {
                    getContext: () => ({
                        drawImage: img => { sampledImage = img; },
                        getImageData: () => ({ data: sampledImage.pixels }),
                    }),
                };
                canvases.push(canvas);
                return canvas;
            },
        },
        getComputedStyle: () => ({ getPropertyValue: () => '' }),
        localStorage: { getItem: () => null },
        clearTimeout() {},
    });
    const dir = path.resolve(__dirname, '../js/main/colors');
    const utils = new vm.SourceTextModule(fs.readFileSync(path.join(dir, 'material-color-utils.js'), 'utf8'), { context });
    const script = new vm.SourceTextModule(fs.readFileSync(path.join(dir, 'dynamic.js'), 'utf8')
        + '\nexport { getAccentColorFromImage };', { context });
    await script.link(() => utils);
    await script.evaluate();
    return {
        utils: utils.namespace,
        canvases,
        extract: fixture => script.namespace.getAccentColorFromImage({
            ...fixture, complete: true, naturalWidth: fixture.width, naturalHeight: fixture.height,
        }),
    };
}

test('groups the dominant green gradient instead of choosing its small flat red patch', async () => {
    const { extract, utils } = await loadExtractor();
    const color = utils.Hct.fromInt(await extract(fixtures[0]));
    assert.ok(color.hue > 120 && color.hue < 180, `hue ${color.hue}`);
});

test('retains a muted source instead of rejecting all low-saturation artwork', async () => {
    const { extract, utils } = await loadExtractor();
    const color = utils.Hct.fromInt(await extract(fixtures[1]));
    assert.ok(color.chroma >= 5 && color.chroma < 30, `chroma ${color.chroma}`);
});

test('ignores translucent pixels rather than letting their hidden RGB dominate', async () => {
    const { extract, utils } = await loadExtractor();
    const color = utils.Hct.fromInt(await extract(fixtures[7]));
    assert.ok(color.hue > 120 && color.hue < 180, `hue ${color.hue}`);
});

test('preserves meaningful accents on white and black backgrounds', async () => {
    const { extract, utils } = await loadExtractor();
    const red = utils.Hct.fromInt(await extract(fixtures[2]));
    const cyan = utils.Hct.fromInt(await extract(fixtures[3]));
    assert.ok(red.hue < 40 || red.hue > 350);
    assert.ok(cyan.hue > 180 && cyan.hue < 220);
});

test('neutral and fully transparent artwork still use the existing failure fallback', async () => {
    const { extract } = await loadExtractor();
    await assert.rejects(extract(fixtures[4]));
    await assert.rejects(extract(fixtures[10]));
});

test('small noise patches do not outweigh a broad blue color family', async () => {
    const { extract, utils } = await loadExtractor();
    const color = utils.Hct.fromInt(await extract(fixtures[12]));
    assert.ok(color.hue > 240 && color.hue < 300, `hue ${color.hue}`);
});

test('selection is deterministic across repeated runs of every non-neutral fixture', async () => {
    const { extract } = await loadExtractor();
    for (const fixture of fixtures.filter((_, index) => index !== 4 && index !== 10)) {
        const expected = await extract(fixture);
        for (let i = 0; i < 5; i++) assert.equal(await extract(fixture), expected, fixture.name);
    }
});

test('minor RGB changes preserve the dominant hue family', async () => {
    const { extract, utils } = await loadExtractor();
    const original = fixtures[0];
    const changed = { ...original, pixels: Uint8ClampedArray.from(original.pixels, (value, index) => index % 4 === 3 ? value : value + 1) };
    const first = utils.Hct.fromInt(await extract(original));
    const second = utils.Hct.fromInt(await extract(changed));
    assert.ok(utils.differenceDegrees(first.hue, second.hue) < 10);
});

test('equivalent flat colors stay consistent across resolutions', async () => {
    const { extract } = await loadExtractor();
    const low = fixtures[11];
    const high = image('same green', () => [30, 155, 60, 255]);
    assert.equal(await extract(low), await extract(high));
});

test('sampling is bounded on both axes and does not enlarge tiny images', async () => {
    const { extract, canvases } = await loadExtractor();
    await extract(image('portrait', () => [30, 155, 60, 255], 1, 1000));
    assert.ok(canvases[0].width >= 1 && canvases[0].width <= 100);
    assert.ok(canvases[0].height >= 1 && canvases[0].height <= 100);
    await extract(fixtures[11]);
    assert.equal(canvases[1].width, 2);
    assert.equal(canvases[1].height, 2);
});

test('broken image dimensions reject before allocating a canvas', async () => {
    const { extract, canvases } = await loadExtractor();
    await assert.rejects(extract({ width: 0, height: 0, pixels: new Uint8ClampedArray() }));
    assert.equal(canvases.length, 0);
});

test('isolated accents at or below the Material scoring population threshold use fallback', async () => {
    const { extract } = await loadExtractor();
    for (const redPixels of [99, 100]) {
        await assert.rejects(extract(image('tiny red patch', (x, y) => y * 100 + x < redPixels
            ? [220, 35, 45, 255] : [128, 128, 128, 255], 100, 100)));
    }
    assert.ok(await extract(image('red above the threshold', (x, y) => y * 100 + x < 101
        ? [220, 35, 45, 255] : [128, 128, 128, 255], 100, 100)));
});

test('a dark seed keeps readable generated role pairs in every supported scheme', async () => {
    const { extract, utils } = await loadExtractor();
    const source = utils.Hct.fromInt(await extract(fixtures[6]));
    assert.ok(source.tone < 15, 'exercise a genuinely dark seed');
    const luminance = color => {
        const channels = [utils.redFromArgb(color), utils.greenFromArgb(color), utils.blueFromArgb(color)]
            .map(value => utils.linearized(value) / 100);
        return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
    };
    const pairs = [['onPrimary', 'primary'], ['onPrimaryContainer', 'primaryContainer'],
        ['onSecondary', 'secondary'], ['onSecondaryContainer', 'secondaryContainer'],
        ['onSurface', 'surface'], ['onError', 'error']];
    for (const name of ['SchemeFidelity', 'SchemeTonalSpot', 'SchemeVibrant', 'SchemeExpressive', 'SchemeNeutral', 'SchemeMonochrome']) {
        for (const dark of [false, true]) {
            const scheme = new utils[name](source, dark, 0);
            for (const [on, background] of pairs) {
                const first = luminance(scheme[on]), second = luminance(scheme[background]);
                const ratio = (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
                assert.ok(ratio >= 4.5, `${name} dark=${dark} ${on}/${background}: ${ratio}`);
            }
        }
    }
});
