const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const skin = JSON.parse(fs.readFileSync(path.join(root, 'skin.json'), 'utf8'));
const trackedFiles = new Set(execFileSync('git', ['ls-files', '-z'], { cwd: root })
    .toString().split('\0'));

function assertAsset(file, label = file) {
    assert.ok(trackedFiles.has(file), `${label}: exact tracked path`);
    assert.ok(fs.statSync(path.join(root, file)).isFile(), `${label}: file exists`);
}

test('every condition default names an existing value', () => {
    for (const [name, condition] of Object.entries(skin.Conditions)) {
        if (condition.values) {
            assert.ok(Object.hasOwn(condition.values, condition.default), name);
        }
    }
});

test('condition assets exist with exact filename casing', () => {
    // These two files are intentionally supplied by the user.
    const userFiles = new Set(['customFont.css', 'mods.css']);
    for (const [name, condition] of Object.entries(skin.Conditions)) {
        for (const [value, targets] of Object.entries(condition.values || {})) {
            for (const kind of ['TargetCss', 'TargetJs']) {
                const target = targets[kind];
                if (target && !userFiles.has(target.src)) {
                    assertAsset(target.src, `${name}: ${value}: ${target.src}`);
                }
            }
        }
    }
});

test('configured entrypoints and explicit patches exist', () => {
    assertAsset(skin['Steam-WebKit']);
    assertAsset(skin.RootColors);
    for (const patch of skin.Patches) {
        for (const kind of ['TargetCss', 'TargetJs']) {
            if (patch[kind]) assertAsset(patch[kind]);
        }
    }
});
