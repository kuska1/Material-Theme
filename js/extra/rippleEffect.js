// by Claude Sonnet 4.6

(function () {
    "use strict";

    const DURATION_EXPAND = "var(--animation-duration-medium3)";
    const DURATION_FADE   = "var(--animation-duration-medium4)";
    const EASING_EXPAND   = "var(--animation-easing-emphasized-decelerate)";
    const EASING_FADE     = "var(--animation-easing-standart-decelerate)";
    const RIPPLE_OPACITY  = 0.12;

    (function injectStyles() {
        if (document.getElementById("md3-ripple-style")) return;
        const style = document.createElement("style");
        style.id = "md3-ripple-style";
        document.head.appendChild(style);
    })();

    function getRippleRadius(rect, x, y) {
        const dx = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
        const dy = Math.max(Math.abs(y - rect.top),  Math.abs(y - rect.bottom));
        return Math.ceil(Math.sqrt(dx * dx + dy * dy));
    }

    function triggerRipple(host, event) {
        const rect = host.getBoundingClientRect();

        const cx = event ? event.clientX : rect.left + rect.width  / 2;
        const cy = event ? event.clientY : rect.top  + rect.height / 2;

        const radius = getRippleRadius(rect, cx, cy);
        const size   = radius * 2;

        const hostStyle    = window.getComputedStyle(host);
        const borderRadius = hostStyle.borderRadius || "0px";

        const container = document.createElement("div");
        container.className = "md3-ripple-container";

        const color = hostStyle.color;

        Object.assign(container.style, {
            left:         rect.left   + "px",
            top:          rect.top    + "px",
            width:        rect.width  + "px",
            height:       rect.height + "px",
            borderRadius: borderRadius,
            color:        color,
        });

        const ripple = document.createElement("span");
        ripple.className = "md3-ripple";

        const offsetX = cx - rect.left - radius;
        const offsetY = cy - rect.top  - radius;

        Object.assign(ripple.style, {
            width:      size + "px",
            height:     size + "px",
            left:       offsetX + "px",
            top:        offsetY + "px",
            transition: `transform ${DURATION_EXPAND} ${EASING_EXPAND},
                         opacity   ${DURATION_FADE}   ${EASING_FADE}`,
        });

        container.appendChild(ripple);
        document.body.appendChild(container);

        void ripple.offsetWidth;

        ripple.classList.add("ripple-enter");

        ripple.addEventListener("transitionend", function onExpanded(e) {
            if (e.propertyName !== "transform") return;
            ripple.removeEventListener("transitionend", onExpanded);

            ripple.classList.add("ripple-fade");

            ripple.addEventListener("transitionend", function onFaded(e2) {
                if (e2.propertyName !== "opacity") return;
                ripple.removeEventListener("transitionend", onFaded);
                container.remove();
            });
        });
    }

    function onPointerDown(event) {
        if (event.button !== undefined && event.button !== 0) return;
        triggerRipple(event.currentTarget, event);
    }

    function attachRipple(el) {
        if (el.dataset.md3RippleAttached) return;
        el.dataset.md3RippleAttached = "1";
        el.addEventListener("pointerdown", onPointerDown);
    }

    const SELECTOR = 'button, a[role="button"], div[role="button"], div[role="combobox"], div[role="tab"]';

    function attachAll() {
        document.querySelectorAll(SELECTOR).forEach(attachRipple);
    }

    function observeDOM() {
        const observer = new MutationObserver(function (mutations) {
            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    if (node.nodeType !== Node.ELEMENT_NODE) continue;
                    if (node.matches && node.matches(SELECTOR)) attachRipple(node);
                    if (node.querySelectorAll) node.querySelectorAll(SELECTOR).forEach(attachRipple);
                }
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function () {
            attachAll();
            observeDOM();
        });
    } else {
        attachAll();
        observeDOM();
    }
})();
