import { useEffect, useRef } from "react";
import styles from "./Particles.module.css";

import Brocoil_1 from "../assets/brookyli.svg";
import Brocoil_2 from "../assets/mały_pindol.svg";
import Brocoil_3 from "../assets/big_s.svg";

const SVG_SHAPES = [Brocoil_1, Brocoil_2, Brocoil_3];

function rand(min, max) { return Math.random() * (max - min) + min; }

export default function Particles({ count = 100}) {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const mouse = useRef({ x: null, y: null, active: false });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = () => container.getBoundingClientRect();

    const isMobile = window.innerWidth < 700;
    const effectiveCount = isMobile ? Math.max(6, Math.round(count * 0.5)) : count;

    // Inicjalizacja cząstek
    particlesRef.current = new Array(effectiveCount).fill().map(() => {
      const r = Math.floor(rand(40, 70));
      const el = document.createElement("div");
      el.className = styles.particle;
      el.style.width = `${r}px`;
      el.style.height = `${r}px`;

      // tworzymy <img> z URL-em SVG (bez innerHTML)
      const img = document.createElement("img");
      img.src = SVG_SHAPES[Math.floor(rand(0, SVG_SHAPES.length))];
      img.alt = "";
      img.draggable = false;
      img.width = r;
      img.height = r;
      img.style.display = "block";
      img.style.width = "100%";
      img.style.height = "100%";
      el.appendChild(img);

      container.appendChild(el);

      const bounds = rect();
      const x = rand(0, bounds.width);
      const y = rand(0, bounds.height);
      el.style.transform = `translate(${x}px, ${y}px)`;

      return {
        el,
        x,
        y,
        vx: rand(-0.25, 0.25),
        vy: rand(-0.25, 0.25),
        mass: r * 0.02 + 0.5,
        size: r,
      };
    });

    // Obsługa kursora
    const onMove = (e) => {
      const b = rect();
      mouse.current.x = e.clientX - b.left;
      mouse.current.y = e.clientY - b.top;
      mouse.current.active = true;
    };
    const onLeave = () => { mouse.current.active = false; mouse.current.x = null; mouse.current.y = null; };

    container.addEventListener("pointermove", onMove);
    container.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onLeave);

    // Parametry fizyki
    const drag = 0.999;
    const cursorRepelRadius = 120;
    const cursorStrength = 1800;
    let rafId = null;

    function step() {
      const b = rect();
      for (const p of particlesRef.current) {
        p.vx += rand(-0.001, 0.001);
        p.vy += rand(-0.001, 0.001);

        if (mouse.current.active && mouse.current.x != null) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < cursorRepelRadius * cursorRepelRadius && dist2 > 0.0001) {
            const dist = Math.sqrt(dist2);
            const force = (cursorStrength * (1 - dist / cursorRepelRadius)) / (dist2);
            p.vx += (dx / dist) * force / p.mass;
            p.vy += (dy / dist) * force / p.mass;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        const bounce = 0.85;
        if (p.x < -p.size) { p.x = -p.size; p.vx = -p.vx * bounce; }
        if (p.y < -p.size) { p.y = -p.size; p.vy = -p.vy * bounce; }
        if (p.x > b.width + p.size) { p.x = b.width + p.size; p.vx = -p.vx * bounce; }
        if (p.y > b.height + p.size) { p.y = b.height + p.size; p.vy = -p.vy * bounce; }

        p.vx *= drag;
        p.vy *= drag;

        p.el.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${(p.vx + p.vy) * 40}deg)`;
        p.el.style.opacity = `${0.75 + Math.min(0.25, p.size / 40)}`;
      }
      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);

    // cleanup
    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener("pointermove", onMove);
      container.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onLeave);
      particlesRef.current.forEach((p) => { if (p.el && container.contains(p.el)) container.removeChild(p.el); });
      particlesRef.current = [];
    };
  }, [count]);

  return <div ref={containerRef} className={styles.particlesContainer} aria-hidden="true" />;
}