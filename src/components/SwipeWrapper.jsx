import React, { useRef, useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./SwipeWrapper.module.css";

export default function SwipeWrapper({ paths = [], initialIndex = 0, children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const trackRef = useRef(null);
  const pointerIdRef = useRef(null);
  const startXRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const draggingRef = useRef(false);
  const startIndexRef = useRef(0);

  const pagesCount = React.Children.count(children);
  const [index, setIndex] = useState(() => {
    const idx = paths.indexOf(location.pathname);
    return idx >= 0 ? idx : initialIndex;
  });
  const [vw, setVw] = useState(() => window.innerWidth);

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

 useEffect(() => {
  if (paths[index] && location.pathname !== paths[index]) {
    navigate(paths[index], { replace: true });
  }
}, [index, paths, location.pathname, navigate]);


  const setTransformPx = useCallback((px, withTransition = true) => {
    const el = trackRef.current;
    if (!el) return;
    el.style.transition = withTransition ? "transform 280ms cubic-bezier(.2,.8,.2,1)" : "none";
    el.style.transform = `translate3d(${px}px,0,0)`;
  }, []);

  useEffect(() => {
    setTransformPx(-index * vw, true);
    if (paths[index] && location.pathname !== paths[index]) {
      navigate(paths[index], { replace: true });
    }
  }, [index, vw, paths, location.pathname, navigate, setTransformPx]);

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onPointerDown = (e) => {
      if (e.button && e.button !== 0) return;
      if (pointerIdRef.current != null) return;
      pointerIdRef.current = e.pointerId;
      try { el.setPointerCapture(pointerIdRef.current); } catch {}
      draggingRef.current = true;
      startIndexRef.current = index;
      startXRef.current = e.clientX;
      lastXRef.current = e.clientX;
      lastTimeRef.current = e.timeStamp;
      setTransformPx(-index * vw, false);
      el.style.touchAction = "none";
      document.addEventListener("pointermove", onPointerMove, { passive: false });
      document.addEventListener("pointerup", onPointerUp);
      document.addEventListener("pointercancel", onPointerUp);
    };

    const onPointerMove = (e) => {
      if (!draggingRef.current || e.pointerId !== pointerIdRef.current) return;
      e.preventDefault();
      const dx = e.clientX - startXRef.current;
      let tx = -startIndexRef.current * vw + dx;
      const maxRight = 0;
      const maxLeft = - (pagesCount - 1) * vw;
      if (tx > maxRight) tx = maxRight + (tx - maxRight) / 3;
      if (tx < maxLeft) tx = maxLeft + (tx - maxLeft) / 3;
      setTransformPx(tx, false);
      lastXRef.current = e.clientX;
      lastTimeRef.current = e.timeStamp;
    };

    const onPointerUp = (e) => {
      if (!draggingRef.current || e.pointerId !== pointerIdRef.current) return;
      const dt = Math.max(1, e.timeStamp - lastTimeRef.current);
      const velocity = (e.clientX - lastXRef.current) / dt;
      try { el.releasePointerCapture(pointerIdRef.current); } catch {}
      pointerIdRef.current = null;
      draggingRef.current = false;
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointercancel", onPointerUp);
      el.style.touchAction = "";

      const computed = window.getComputedStyle(el).transform;
      let txPx = -index * vw;
      if (computed && computed !== "none") {
        const m = computed.match(/matrix3d?\((.+)\)/);
        if (m) {
          const parts = m[1].split(",").map(p => parseFloat(p.trim()));
          txPx = parts.length === 16 ? parts[12] : parts[4];
        }
      }
      const floatIndex = -txPx / vw;
      const dxTotal = e.clientX - startXRef.current;
      const relative = Math.abs(dxTotal) / vw;
      let target = Math.round(floatIndex);
      const speedThreshold = 0.25;
      if (Math.abs(velocity) > speedThreshold) {
        target = velocity < 0 ? Math.ceil(floatIndex) : Math.floor(floatIndex);
      } else {
        if (relative > 0.25) target = dxTotal < 0 ? Math.ceil(floatIndex) : Math.floor(floatIndex);
        else target = Math.round(floatIndex);
      }
      target = clamp(target, 0, pagesCount - 1);
      setIndex(target);
      setTransformPx(-target * vw, true);
    };

    el.addEventListener("pointerdown", onPointerDown);
    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointercancel", onPointerUp);
    };
  }, [index, vw, pagesCount, setTransformPx]);

  return (
    <div className={styles.viewport}>
      <div
        ref={trackRef}
        className={styles.track}
        style={{ width: `${pagesCount * vw}px` }}
      >
        {React.Children.map(children, (child, i) => (
          <div className={styles.page} key={i} style={{ width: `${vw}px` }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}