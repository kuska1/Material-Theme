/**
 * Material Design 3 — Ripple Effect
 * Targets: button, div[role="button"], div[role="combobox"]
 *
 * Не изменяет position/overflow хоста.
 * Ripple рендерится в отдельном fixed-контейнере поверх хоста,
 * границы клипируются через border-radius хоста.
 */

(function () {
    "use strict";

    /* ── CSS-переменные из main.css ──────────────────────────────────── */
    const DURATION_EXPAND = "var(--animation-duration-medium3)"; /* 350ms */
    const DURATION_FADE   = "var(--animation-duration-medium4)"; /* 400ms */
    const EASING_EXPAND   = "var(--animation-easing-emphasized-decelerate)"; /* cubic-bezier(0.05,0.7,0.1,1) */
    const EASING_FADE     = "var(--animation-easing-standart-decelerate)";   /* cubic-bezier(0,0,0,1) */
    const RIPPLE_OPACITY  = 0.12; /* MD3 pressed state-layer opacity */

    /* ── Инжектируем базовые стили один раз ─────────────────────────── */
    (function injectStyles() {
        if (document.getElementById("md3-ripple-style")) return;
        const style = document.createElement("style");
        style.id = "md3-ripple-style";
        document.head.appendChild(style);
    })();

    /* ── Вычислить радиус, покрывающий весь элемент от точки клика ──── */
    function getRippleRadius(rect, x, y) {
        const dx = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
        const dy = Math.max(Math.abs(y - rect.top),  Math.abs(y - rect.bottom));
        return Math.ceil(Math.sqrt(dx * dx + dy * dy));
    }

    /* ── Основная функция создания ripple ───────────────────────────── */
    function triggerRipple(host, event) {
        const rect = host.getBoundingClientRect();

        /* Точка клика в viewport-координатах */
        const cx = event ? event.clientX : rect.left + rect.width  / 2;
        const cy = event ? event.clientY : rect.top  + rect.height / 2;

        const radius = getRippleRadius(rect, cx, cy);
        const size   = radius * 2;

        /* Читаем border-radius хоста для корректного клипирования */
        const hostStyle    = window.getComputedStyle(host);
        const borderRadius = hostStyle.borderRadius || "0px";

        /* ── Контейнер: накрывает хост как fixed-слой ── */
        const container = document.createElement("div");
        container.className = "md3-ripple-container";

        /* Цвет наследуется от хоста */
        const color = hostStyle.color;

        Object.assign(container.style, {
            left:         rect.left   + "px",
            top:          rect.top    + "px",
            width:        rect.width  + "px",
            height:       rect.height + "px",
            borderRadius: borderRadius,
            color:        color,
        });

        /* ── Ripple: позиция относительно контейнера ── */
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

        /* Принудительный reflow */
        void ripple.offsetWidth;

        /* Фаза 1 — расширение */
        ripple.classList.add("ripple-enter");

        /* Фаза 2 — затухание + очистка */
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

    /* ── Обработчик ─────────────────────────────────────────────────── */
    function onPointerDown(event) {
        if (event.button !== undefined && event.button !== 0) return;
        triggerRipple(event.currentTarget, event);
    }

    /* ── Подписать один элемент ─────────────────────────────────────── */
    function attachRipple(el) {
        if (el.dataset.md3RippleAttached) return;
        el.dataset.md3RippleAttached = "1";
        el.addEventListener("pointerdown", onPointerDown);
    }

    /* ── Селектор целевых элементов ─────────────────────────────────── */
    const SELECTOR = 'button, a[role="button"], div[role="button"], div[role="combobox"], div[role="tab"]';

    /* ── Первоначальная привязка ─────────────────────────────────────── */
    function attachAll() {
        document.querySelectorAll(SELECTOR).forEach(attachRipple);
    }

    /* ── MutationObserver для динамически добавляемых узлов ────────── */
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

    /* ── Точка входа ─────────────────────────────────────────────────── */
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
