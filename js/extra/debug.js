(function() {
    const corners = [
        { bottom: '5px', right: '5px', top: 'auto', left: 'auto' },
        { bottom: '5px', left: '5px', top: 'auto', right: 'auto' },
        { top: '5px', left: '5px', bottom: 'auto', right: 'auto' },
        { top: '5px', right: '5px', bottom: 'auto', left: 'auto' }
    ];
    
    const fallbackPositions = [
        { top: '5px', right: '5px', bottom: 'auto', left: 'auto' },
        { bottom: '5px', right: '5px', top: 'auto', left: 'auto' }
    ];

    let currentIdx = 0;
    let mouseX = 0;
    let mouseY = 0;

    const debug = document.createElement('div');
    Object.assign(debug.style, {
        position: 'fixed',
        padding: '10px',
        backgroundColor: 'color-mix(in srgb, var(--md-sys-color-surface), transparent var(--layer-action-hover))',
        color: 'var(--md-sys-color-primary)',
        borderRadius: 'var(--corner-radius-small)',
        boxShadow: 'var(--elevated-shadow)',
        fontFamily: 'monospace',
        fontSize: '10px',
        zIndex: '10000000',
        maxWidth: '300px',
        maxHeight: '200px',
        overflowY: 'auto',
        transition: 'all 0.15s ease',
        cursor: 'pointer',
        userSelect: 'none',
        pointerEvents: 'auto',
        lineHeight: '1.4'
    });

    const updatePos = (increment = false) => {
        const isMenuOpen = !!document.querySelector('.ContextMenuPopupBody');
        const set = isMenuOpen ? fallbackPositions : corners;

        if (increment) {
            currentIdx++;
        }

        const activeIdx = currentIdx % set.length;
        const newPos = set[activeIdx];

        debug.style.setProperty('top', 'auto', 'important');
        debug.style.setProperty('bottom', 'auto', 'important');
        debug.style.setProperty('left', 'auto', 'important');
        debug.style.setProperty('right', 'auto', 'important');

        Object.keys(newPos).forEach(key => {
            debug.style[key] = newPos[key];
        });

        info.style.display = isMenuOpen ? 'none' : 'block';
        footer.style.display = isMenuOpen ? 'none' : 'block';
        footerinfo.style.display = isMenuOpen ? 'none' : 'block';
        title.innerHTML = isMenuOpen 
            ? '<b style="color:var(--md-sys-color-tertiary">DEBUG</b> <span style="color:var(--md-sys-color-outline)">[ALT to Copy / Hover to move]</span>' 
            : '<b style="color:var(--md-sys-color-on-surface)">DEBUG</b> <span style="color:var(--md-sys-color-outline)">[ALT to Copy / Click to move]</span>';
        title.style.borderWidth = isMenuOpen ? '0px' : '1px';
    };

    const title = document.createElement('div');
    title.style.borderBottom = '1px solid var(--md-sys-color-outline-variant)';
    title.style.marginBottom = '5px';
    title.style.paddingBottom = '3px';

    const info = document.createElement('div');
    info.textContent = 'Move mouse...';
    info.style.wordBreak = 'break-all';

    const footer = document.createElement('div');
    footer.style.borderBottom = '1px solid var(--md-sys-color-outline-variant)';
    footer.style.marginBottom = '5px';
    footer.style.paddingBottom = '3px';

    const footerinfo = document.createElement('div');
    footerinfo.textContent = 'To disable: Theme Settings -> Extra -> Show Debug Info';
    footerinfo.style.color = 'var(--md-sys-color-outline)';
    footerinfo.style.wordBreak = 'break-all';

    debug.append(title, info, footer, footerinfo);
    document.body.appendChild(debug);
    updatePos();

    const getSmartPath = (el) => {
        if (!el || el === document || el === document.body) return 'body';
        const path = [];
        let curr = el;
        while (curr && curr.nodeType === Node.ELEMENT_NODE && curr.tagName !== 'HTML') {
            let segment = curr.tagName.toLowerCase();
            if (curr.id) { segment += `#${curr.id}`; path.unshift(segment); break; }
            const classes = Array.from(curr.classList).filter(c => c !== 'debug-active').join('.');
            if (classes) { segment += `.${classes}`; } 
            else if (curr.parentElement) {
                const index = Array.from(curr.parentElement.children).indexOf(curr) + 1;
                segment += `:nth-child(${index})`;
            }
            path.unshift(segment);
            curr = curr.parentElement;
        }
        return path.join(' ');
    };

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (e.target.closest('.ContextMenuPopupBody') || document.querySelector('.ContextMenuPopupBody')) {
            updatePos();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Alt') {
            e.preventDefault();
            debug.style.pointerEvents = 'none';
            const target = document.elementFromPoint(mouseX, mouseY);
            debug.style.pointerEvents = 'auto';

            if (target) {
                const fullPath = getSmartPath(target);
                navigator.clipboard.writeText(fullPath).then(() => {
                    const originalContent = info.innerHTML;
                    const originalDisplay = info.style.display;
                    info.style.display = 'block';
                    info.style.color = 'var(--md-sys-color-on-surface)';
                    info.innerHTML = '<b>COPIED:</b><br>' + fullPath;
                    setTimeout(() => {
                        info.style.color = 'var(--md-sys-color-primary)';
                        info.innerHTML = originalContent;
                        info.style.display = originalDisplay;
                        updatePos();
                    }, 1500);
                });
            }
        }
    });

    debug.addEventListener('click', () => {
        currentIdx++;
        updatePos();
    });

    debug.addEventListener('mouseenter', () => {
        updatePos();
        if (document.querySelector('.ContextMenuPopupBody')) {
            currentIdx++;
            updatePos();
        }
    });

    document.addEventListener('mouseover', (e) => {
        if (debug.contains(e.target)) return;
        
        if (document.querySelector('.ContextMenuPopupBody')) return;
        
        const classes = e.target.classList.value 
            ? e.target.tagName.toLowerCase() + '.' + e.target.classList.value.split(/\s+/).join('.') 
            : e.target.tagName.toLowerCase();
            
        info.textContent = `Hover: ${classes}`;
    });

})();