// Run with: node --experimental-vm-modules --test tests/*.test.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const colorDir = path.resolve(__dirname, '../js/main/colors');

async function loadTheme({ library = true, mode = 'dark', style = 'fidelity', animations = true } = {}) {
    const elements = new Map();
    const storage = new Map();
    const timers = new Map();
    const observers = [];
    const windowListeners = new Map();
    let artworks = [];
    let nextTimer = 0;
    const rootColors = {};
    const context = vm.createContext({
        console: { debug() {}, info() {}, warn() {}, error() {} },
        window: {
            location: { href: 'https://steamloopback.host/library' },
            addEventListener: (name, listener) => windowListeners.set(name, listener),
        },
        document: {
            documentElement: { classList: { contains: () => library } },
            body: {},
            head: { appendChild: element => elements.set(element.id, element) },
            getElementById: id => id === 'RootColors' ? rootColors : elements.get(id),
            querySelector: selector => artworks.find(image => image.matches(selector)) || null,
            createElement(tag) {
                if (tag === 'canvas') {
                    let image;
                    return {
                        getContext: () => ({
                            drawImage: img => { image = img; },
                            getImageData: () => ({ data: [...image.rgb, 255] }),
                        }),
                    };
                }
                return { remove() { elements.delete(this.id); } };
            },
        },
        getComputedStyle: () => ({
            getPropertyValue: name => ({
                '--scheme': mode,
                '--md-color-generation-style': style,
                '--custom-accent-color': '#4cb4ff',
                '--dynamic-color-transition-enabled': String(animations),
            })[name] || '',
        }),
        localStorage: {
            getItem: key => storage.get(key) || null,
            setItem: (key, value) => storage.set(key, value),
        },
        setTimeout: (callback, delay) => {
            const id = ++nextTimer;
            timers.set(id, { callback, delay });
            return id;
        },
        clearTimeout: id => timers.delete(id),
        MutationObserver: class {
            constructor(callback) { this.callback = callback; observers.push(this); }
            observe(target, options) { this.target = target; this.options = options; }
        },
    });
    const utils = new vm.SourceTextModule(fs.readFileSync(path.join(colorDir, 'material-color-utils.js'), 'utf8'), { context });
    const script = new vm.SourceTextModule(fs.readFileSync(path.join(colorDir, 'dynamic.js'), 'utf8')
        + '\nexport { updateTheme, debounceUpdateTheme };', { context });
    await script.link(() => utils);
    await script.evaluate();
    return {
        storage, elements, observers,
        setArtwork: image => { artworks = Array.isArray(image) ? image : [image].filter(Boolean); },
        update: () => script.namespace.updateTheme(),
        debounce: () => script.namespace.debounceUpdateTheme(),
        storageEvent: event => windowListeners.get('storage')(event),
        expireTransitions() {
            for (const [id, timer] of timers) {
                if (timer.delay === 450) {
                    timers.delete(id);
                    timer.callback();
                }
            }
        },
        async flushUpdate() {
            for (const [id, timer] of timers) {
                if (timer.delay === 200) {
                    timers.delete(id);
                    await timer.callback();
                    return true;
                }
            }
            return false;
        },
        notify(mutation) {
            const observer = observers[0];
            if (mutation.type !== 'attributes' || (observer.options.attributes
                && observer.options.attributeFilter.includes(mutation.attributeName))) {
                observer.callback([mutation]);
            }
        },
    };
}

function image(src, rgb, complete = true, variant = 'blurred') {
    const target = new EventTarget();
    const selector = variant === 'blurred'
        ? 'img.HNbe3eZf6H7dtJ042x1vM.HSQWw9HUAP6jtA2OZjS-u'
        : '.QlR9EFwTdUNm_J5vx54_Z img.HNbe3eZf6H7dtJ042x1vM';
    const listeners = new Map();
    target.addEventListener = (type, listener) => {
        if (!listeners.has(type)) listeners.set(type, new Set());
        listeners.get(type).add(listener);
        EventTarget.prototype.addEventListener.call(target, type, listener);
    };
    target.removeEventListener = (type, listener) => {
        listeners.get(type)?.delete(listener);
        EventTarget.prototype.removeEventListener.call(target, type, listener);
    };
    target.listenerCount = type => listeners.get(type)?.size || 0;
    Object.assign(target, {
        src, rgb, complete, naturalWidth: 100, naturalHeight: 50, nodeType: 1,
        matches: query => query.split(', ').includes(selector),
        querySelector: () => null,
    });
    target.finish = (type = 'load') => {
        target.complete = true;
        target.dispatchEvent(new Event(type));
        target[`on${type}`]?.(new Event(type));
    };
    return target;
}

const colorKey = 'material-dynamic-color';

test('a slow previous game cannot overwrite the current game color', async () => {
    const theme = await loadTheme();
    const previous = image('previous.jpg', [255, 0, 0], false);
    theme.setArtwork(previous);
    const pending = theme.update();
    theme.setArtwork(image('current.jpg', [0, 255, 0]));
    await theme.update();
    const currentCss = theme.elements.get('material-colors').textContent;
    previous.finish();
    await pending;
    assert.equal(theme.storage.get(colorKey), String(0xff00ff00));
    assert.equal(theme.elements.get('material-colors').textContent, currentCss);
});

test('concurrent updates preserve Steam handlers and both settle after loading', async () => {
    const theme = await loadTheme();
    const artwork = image('game.jpg', [255, 0, 0], false);
    let steamLoads = 0;
    const onload = () => steamLoads++;
    artwork.onload = onload;
    theme.setArtwork(artwork);
    const first = theme.update();
    const second = theme.update();
    assert.equal(artwork.onload, onload);
    artwork.finish();
    await Promise.all([first, second]);
    assert.equal(steamLoads, 1);
    assert.equal(artwork.listenerCount('load'), 0);
    assert.equal(artwork.listenerCount('error'), 0);
});

test('failed loading preserves Steam error handlers and removes both listeners', async () => {
    const theme = await loadTheme();
    const artwork = image('failed.jpg', [255, 0, 0], false);
    let steamErrors = 0;
    const onerror = () => steamErrors++;
    artwork.onerror = onerror;
    theme.setArtwork(artwork);
    const pending = theme.update();
    assert.equal(artwork.onerror, onerror);
    artwork.finish('error');
    await pending;
    assert.equal(steamErrors, 1);
    assert.equal(artwork.listenerCount('load'), 0);
    assert.equal(artwork.listenerCount('error'), 0);
    assert.equal(theme.storage.has(colorKey), false);
    assert.match(theme.elements.get('material-colors').textContent, /--md-sys-color-primary: #[0-9a-f]{6};/);
});

test('a stale failed load cannot replace the current palette with a fallback', async () => {
    const theme = await loadTheme();
    const previous = image('failed.jpg', [255, 0, 0], false);
    theme.setArtwork(previous);
    const pending = theme.update();
    theme.setArtwork(image('current.jpg', [0, 255, 0]));
    await theme.update();
    const css = theme.elements.get('material-colors').textContent;
    theme.storage.delete(colorKey);
    previous.finish('error');
    await pending;
    assert.equal(theme.elements.get('material-colors').textContent, css);
    assert.equal(previous.listenerCount('load'), 0);
    assert.equal(previous.listenerCount('error'), 0);
});

test('a source changed during loading is not committed by the old request', async () => {
    const theme = await loadTheme();
    const artwork = image('old.jpg', [255, 0, 0], false);
    theme.setArtwork(artwork);
    const pending = theme.update();
    artwork.src = 'new.jpg';
    artwork.rgb = [0, 255, 0];
    artwork.finish();
    await pending;
    assert.equal(theme.storage.has(colorKey), false);
    await theme.update();
    assert.equal(theme.storage.get(colorKey), String(0xff00ff00));
});

test('a src change on existing artwork schedules a new theme', async () => {
    const theme = await loadTheme();
    const artwork = image('first.jpg', [255, 0, 0]);
    theme.setArtwork(artwork);
    await theme.flushUpdate();
    artwork.src = 'second.jpg';
    artwork.rgb = [0, 255, 0];
    theme.notify({ type: 'attributes', target: artwork, attributeName: 'src' });
    assert.equal(await theme.flushUpdate(), true);
    assert.equal(theme.storage.get(colorKey), String(0xff00ff00));
});

test('adding the original (non-blurred) artwork schedules a new theme', async () => {
    const theme = await loadTheme();
    await theme.flushUpdate();
    const artwork = image('original.jpg', [255, 0, 0], true, 'original');
    theme.setArtwork(artwork);
    theme.notify({ type: 'childList', addedNodes: [artwork] });
    assert.equal(await theme.flushUpdate(), true);
    assert.equal(theme.storage.get(colorKey), String(0xffff0000));
});

test('blurred artwork retains priority over the original artwork', async () => {
    const theme = await loadTheme();
    theme.setArtwork([
        image('original.jpg', [255, 0, 0], true, 'original'),
        image('blurred.jpg', [0, 255, 0]),
    ]);
    await theme.update();
    assert.equal(theme.storage.get(colorKey), String(0xff00ff00));
});

test('unrelated image src mutations do not schedule an update', async () => {
    const theme = await loadTheme();
    await theme.flushUpdate();
    const unrelated = { matches: () => false };
    theme.notify({ type: 'attributes', target: unrelated, attributeName: 'src', addedNodes: [] });
    assert.equal(await theme.flushUpdate(), false);
});

test('artwork nested in an added wrapper schedules an update', async () => {
    const theme = await loadTheme();
    await theme.flushUpdate();
    const artwork = image('nested.jpg', [0, 255, 0], true, 'original');
    theme.setArtwork(artwork);
    const wrapper = { nodeType: 1, matches: () => false, querySelector: selector => artwork.matches(selector) ? artwork : null };
    theme.notify({ type: 'childList', addedNodes: [wrapper] });
    assert.equal(await theme.flushUpdate(), true);
    assert.equal(theme.storage.get(colorKey), String(0xff00ff00));
});

test('cross-window storage updates apply the generated color outside the library', async () => {
    const source = await loadTheme();
    source.setArtwork(image('green.jpg', [0, 255, 0]));
    await source.update();
    const popup = await loadTheme({ library: false });
    popup.storageEvent({ key: colorKey, newValue: source.storage.get(colorKey) });
    assert.equal(popup.elements.get('material-colors').textContent, source.elements.get('material-colors').textContent);
    assert.equal(popup.observers.length, 0);
});

test('animation-disabled mode injects no transitions; enabled transitions expire', async () => {
    const disabled = await loadTheme({ library: false, animations: false });
    assert.equal(disabled.elements.has('material-dynamic-transitions'), false);
    assert.ok(disabled.elements.has('material-colors'));
    const enabled = await loadTheme({ library: false });
    assert.equal(enabled.elements.has('material-dynamic-transitions'), true);
    enabled.expireTransitions();
    assert.equal(enabled.elements.has('material-dynamic-transitions'), false);
});

test('navigation invalidates an image load before the debounce timer fires', async () => {
    const theme = await loadTheme();
    const artwork = image('old.jpg', [255, 0, 0], false);
    theme.setArtwork(artwork);
    const pending = theme.update();
    theme.debounce();
    artwork.finish();
    await pending;
    assert.equal(theme.storage.has(colorKey), false);
    theme.setArtwork(image('new.jpg', [0, 255, 0]));
    await theme.flushUpdate();
    assert.equal(theme.storage.get(colorKey), String(0xff00ff00));
});

test('failed color extraction uses the custom accent without a cache and retains a cached color', async () => {
    const theme = await loadTheme();
    await theme.flushUpdate();
    const accentCss = theme.elements.get('material-colors').textContent;
    theme.setArtwork(image('gray.jpg', [100, 100, 100]));
    await theme.update();
    assert.equal(theme.elements.get('material-colors').textContent, accentCss);
    theme.setArtwork(image('color.jpg', [0, 255, 0]));
    await theme.update();
    const css = theme.elements.get('material-colors').textContent;
    theme.setArtwork(image('gray.jpg', [100, 100, 100]));
    await theme.update();
    assert.equal(theme.elements.get('material-colors').textContent, css);
});

test('all six generation styles produce complete light and dark palettes', async () => {
    for (const mode of ['light', 'dark']) {
        for (const style of ['fidelity', 'tonal-spot', 'vibrant', 'expressive', 'neutral', 'monochrome']) {
            const theme = await loadTheme({ library: false, mode, style });
            const css = theme.elements.get('material-colors').textContent;
            assert.equal((css.match(/--md-sys-color-/g) || []).length, 49, `${mode}/${style}`);
            assert.ok(!css.includes('undefined') && !css.includes('NaN'));
            assert.equal(theme.observers.length, 0);
        }
    }
});
