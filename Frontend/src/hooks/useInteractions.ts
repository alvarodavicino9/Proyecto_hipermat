import { useEffect, useRef, type MouseEvent as ReactMouseEvent } from 'react';

/**
 * Magnetic button effect: the element follows the cursor slightly while
 * hovered, and springs back on mouse leave. Attach the returned ref to any
 * clickable element (button/a).
 */
export function useMagnetic<T extends HTMLElement = HTMLAnchorElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (ev: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ev.clientX - r.left - r.width / 2;
      const y = ev.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    };
    const onLeave = () => { el.style.transform = ''; };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return ref;
}

/**
 * Ripple-on-click effect. Spread the returned onClick handler onto a button
 * or link with `data-ripple-host` + position:relative/overflow:hidden (already
 * provided by the `[data-ripple-host]` global class).
 */
export function useRipple() {
  return (ev: ReactMouseEvent<HTMLElement>) => {
    const btn = ev.currentTarget;
    const rect = btn.getBoundingClientRect();
    const d = Math.max(rect.width, rect.height);
    const circle = document.createElement('span');
    circle.className = 'ripple-circle';
    circle.style.width = `${d}px`;
    circle.style.height = `${d}px`;
    circle.style.left = `${ev.clientX - rect.left - d / 2}px`;
    circle.style.top = `${ev.clientY - rect.top - d / 2}px`;
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 650);
  };
}

/**
 * macOS-dock-style magnification for a row of nav icons. Attach `dockRef` to
 * the container and `data-dock-item` to each child button/link.
 */
export function useDockMagnify<T extends HTMLElement = HTMLDivElement>() {
  const dockRef = useRef<T>(null);

  useEffect(() => {
    const dock = dockRef.current;
    if (!dock) return;
    const items = Array.from(dock.querySelectorAll<HTMLElement>('[data-dock-item]'));

    const onMove = (ev: MouseEvent) => {
      items.forEach((item) => {
        const r = item.getBoundingClientRect();
        const centerX = r.left + r.width / 2;
        const dist = Math.abs(ev.clientX - centerX);
        const maxDist = 110;
        const proximity = Math.max(0, 1 - dist / maxDist);
        const scale = 1 + proximity * 0.55;
        const lift = proximity * 12;
        item.style.transform = `scale(${scale}) translateY(${-lift}px)`;
        item.style.zIndex = proximity > 0.4 ? '2' : '1';
        const label = item.querySelector<HTMLElement>('[data-dock-label]');
        if (label) label.style.opacity = proximity > 0.55 ? '1' : '0';
      });
    };
    const onLeave = () => {
      items.forEach((item) => {
        item.style.transform = '';
        item.style.zIndex = '';
        const label = item.querySelector<HTMLElement>('[data-dock-label]');
        if (label) label.style.opacity = '0';
      });
    };

    dock.addEventListener('mousemove', onMove);
    dock.addEventListener('mouseleave', onLeave);
    return () => {
      dock.removeEventListener('mousemove', onMove);
      dock.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return dockRef;
}

/**
 * Cursor-follow 3D tilt for a section containing one or more `[data-tilt]`
 * cards. Each card tilts proportionally to cursor position relative to the
 * whole section, with per-card depth for a layered parallax feel.
 */
export function useTiltSection<T extends HTMLElement = HTMLElement>() {
  const sectionRef = useRef<T>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cards = Array.from(section.querySelectorAll<HTMLElement>('[data-tilt]'));
    if (!cards.length) return;

    const onMove = (ev: MouseEvent) => {
      const r = section.getBoundingClientRect();
      const px = (ev.clientX - r.left) / r.width - 0.5;
      const py = (ev.clientY - r.top) / r.height - 0.5;
      cards.forEach((card, i) => {
        const depth = 6 + i * 2;
        card.style.transform = `perspective(1000px) rotateY(${-4 + px * depth * 2}deg) rotateX(${2 - py * depth * 2}deg)`;
      });
    };
    const onLeave = () => {
      cards.forEach((card) => { card.style.transform = ''; });
    };

    section.addEventListener('mousemove', onMove);
    section.addEventListener('mouseleave', onLeave);
    return () => {
      section.removeEventListener('mousemove', onMove);
      section.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return sectionRef;
}
