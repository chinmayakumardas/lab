"use client";

import { useEffect, useRef, useState } from "react";

export default function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    /* — We drive the whole sequence with CSS class additions timed via JS — */
    const loader = loaderRef.current;
    const bar = barRef.current;
    const text = textRef.current;
    const logo = logoRef.current;
    if (!loader || !bar || !text || !logo) return;

    // Step 1 — logo + text entrance (0ms)
    logo.classList.add("logo-enter");

    // Step 2 — progress bar fills (300ms)
    const t1 = setTimeout(() => bar.classList.add("bar-fill"), 300);

    // Step 3 — text cycles (400ms)
    const t2 = setTimeout(() => text.classList.add("text-cycle"), 400);

    // Step 4 — loader slides up & out (2100ms)
    const t3 = setTimeout(() => {
      loader.classList.add("loader-exit");
    }, 2100);

    // Step 5 — unmount (2800ms, after slide is done)
    const t4 = setTimeout(() => setDone(true), 2750);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (done) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&family=DM+Sans:wght@300;400;600&display=swap');

        /* ── Loader shell ── */
        .bym-loader {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #1b2618;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          /* grain overlay */
        }
        .bym-loader::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.5;
        }

        /* ── Slide-up exit ── */
        .loader-exit {
          animation: loaderSlideUp 0.65s cubic-bezier(0.77, 0, 0.18, 1) forwards;
        }
        @keyframes loaderSlideUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }

        /* ── Centre content wrapper ── */
        .loader-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          position: relative;
          z-index: 1;
        }

        /* ── Logo ── */
        .loader-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0s, transform 0s;
        }
        .loader-logo.logo-enter {
          animation: logoIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes logoIn {
          0%   { opacity: 0; transform: translateY(22px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0)   scale(1); }
        }
        .loader-dot {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #c8d87a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #1b2618;
          box-shadow: 0 0 0 0 rgba(200,216,122,0.5);
          animation: pulse 2s ease infinite 0.7s;
        }
        @keyframes pulse {
          0%  { box-shadow: 0 0 0 0   rgba(200,216,122,0.45); }
          60% { box-shadow: 0 0 0 14px rgba(200,216,122,0);    }
          100%{ box-shadow: 0 0 0 0   rgba(200,216,122,0);     }
        }
        .loader-wordmark {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: clamp(42px, 8vw, 80px);
          color: #e8e0d0;
          line-height: 1;
          letter-spacing: -0.01em;
        }
        .loader-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          color: #c8d87a;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-top: -6px;
        }

        /* ── Cycling tagline ── */
        .loader-text {
          height: 18px;
          overflow: hidden;
          position: relative;
        }
        .loader-text-inner {
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: none;
        }
        .loader-text.text-cycle .loader-text-inner {
          animation: textScroll 1.4s cubic-bezier(0.4,0,0.2,1) forwards 0.05s;
        }
        @keyframes textScroll {
          0%   { transform: translateY(0); }
          33%  { transform: translateY(-18px); }
          66%  { transform: translateY(-36px); }
          100% { transform: translateY(-54px); }
        }
        .loader-phrase {
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: rgba(232,224,208,0.45);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* ── Progress bar ── */
        .loader-bar-track {
          width: clamp(160px, 28vw, 260px);
          height: 2px;
          background: rgba(255,255,255,0.08);
          border-radius: 999px;
          overflow: hidden;
        }
        .loader-bar-fill {
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, #c8d87a, #7ac8d8);
          border-radius: 999px;
          transition: none;
        }
        .loader-bar-fill.bar-fill {
          animation: barProgress 1.7s cubic-bezier(0.4, 0, 0.15, 1) forwards;
        }
        @keyframes barProgress {
          0%   { width: 0%; }
          30%  { width: 35%; }
          60%  { width: 68%; }
          85%  { width: 88%; }
          100% { width: 100%; }
        }

        /* ── Corner decorations ── */
        .loader-corner {
          position: absolute;
          width: 40px;
          height: 40px;
          opacity: 0.18;
        }
        .loader-corner.tl { top: 24px; left: 24px; border-top: 1.5px solid #c8d87a; border-left: 1.5px solid #c8d87a; }
        .loader-corner.tr { top: 24px; right: 24px; border-top: 1.5px solid #c8d87a; border-right: 1.5px solid #c8d87a; }
        .loader-corner.bl { bottom: 24px; left: 24px; border-bottom: 1.5px solid #c8d87a; border-left: 1.5px solid #c8d87a; }
        .loader-corner.br { bottom: 24px; right: 24px; border-bottom: 1.5px solid #c8d87a; border-right: 1.5px solid #c8d87a; }
      `}</style>

      <div className="bym-loader" ref={loaderRef}>
        {/* Corner brackets */}
        <div className="loader-corner tl" />
        <div className="loader-corner tr" />
        <div className="loader-corner bl" />
        <div className="loader-corner br" />

        <div className="loader-inner">
          {/* Logo */}
          <div className="loader-logo" ref={logoRef}>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm80-120h400L544-400H416L280-240Zm-80 40h560L520-492v-268h-80v268L200-200Zm280-280Z"/></svg>            <div className="loader-wordmark">BYM Lab</div>
            <div className="loader-sub">Blow Your Mind</div>
          </div>

          {/* Cycling phrases */}
          <div className="loader-text" ref={textRef}>
            <div className="loader-text-inner">
              <div className="loader-phrase">Building creative tools</div>
              <div className="loader-phrase">Crafting experiences</div>
              <div className="loader-phrase">Shipping bold ideas</div>
              <div className="loader-phrase">Welcome to the lab ↗</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="loader-bar-track">
            <div className="loader-bar-fill" ref={barRef} />
          </div>
        </div>
      </div>
    </>
  );
}