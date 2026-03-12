// "use client";

// import { useEffect, useRef } from "react";

// // Floating element data matching the screenshot
// const floatingElements = [
//   {
//     id: 1,
//     type: "image-circle",
//     src: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=200&h=200&fit=crop",
//     alt: "Food bowl",
//     size: 160,
//     top: "8%",
//     left: "15%",
//     rotate: -8,
//     label: "Banza",
//   },
//   {
//     id: 2,
//     type: "lamp-icon",
//     top: "18%",
//     left: "2%",
//     rotate: 0,
//   },
//   {
//     id: 3,
//     type: "color-palette",
//     colors: ["#34534d", "#80979a", "#d3b79c"],
//     top: "35%",
//     left: "2%",
//     rotate: -3,
//   },
//   {
//     id: 4,
//     type: "image-circle",
//     src: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=200&h=200&fit=crop",
//     alt: "Person with skincare",
//     size: 120,
//     top: "58%",
//     left: "4%",
//     rotate: 0,
//   },
//   {
//     id: 5,
//     type: "soap-circle",
//     top: "68%",
//     left: "11%",
//     rotate: 0,
//   },
//   {
//     id: 6,
//     type: "tags",
//     tags: ["Confident", "Inspiring", "Authentic", "Can-forward"],
//     top: "78%",
//     left: "3%",
//     rotate: -10,
//   },
//   {
//     id: 7,
//     type: "snacks-card",
//     top: "22%",
//     right: "8%",
//     rotate: 6,
//   },
//   {
//     id: 8,
//     type: "lipstick-circle",
//     top: "42%",
//     right: "0%",
//     rotate: 0,
//     size: 160,
//   },
//   {
//     id: 9,
//     type: "image-circle",
//     src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
//     alt: "Brand drink can",
//     size: 180,
//     top: "62%",
//     right: "6%",
//     rotate: 0,
//   },
// ];

// export default function PomellPage() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const elements = document.querySelectorAll<HTMLElement>(".float-el");
//     elements.forEach((el, i) => {
//       const duration = 3000 + i * 400;
//       const amplitude = 8 + (i % 3) * 4;
//       let start: number | null = null;
//       const offset = i * 600;

//       const animate = (timestamp: number) => {
//         if (!start) start = timestamp;
//         const elapsed = timestamp - start + offset;
//         const y = Math.sin((elapsed / duration) * Math.PI * 2) * amplitude;
//         el.style.transform = `${el.dataset.baseTransform || ""} translateY(${y}px)`;
//         requestAnimationFrame(animate);
//       };
//       requestAnimationFrame(animate);
//     });
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

//         *, *::before, *::after {
//           box-sizing: border-box;
//           margin: 0;
//           padding: 0;
//         }

//         html, body {
//           height: 100%;
//           background: #1e2a1e;
//         }

//         .pomelli-root {
//           min-height: 100vh;
//           background-color: #1e2a1e;
//           position: relative;
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           font-family: 'DM Sans', sans-serif;
//         }

//         /* ---------- Navbar ---------- */
//         .nav {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           z-index: 50;
//           padding: 20px 32px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }

//         .nav-logo-icon {
//           width: 22px;
//           height: 22px;
//           opacity: 0.85;
//         }

//         .nav-label {
//           color: rgba(255,255,255,0.75);
//           font-size: 13px;
//           font-weight: 400;
//           letter-spacing: 0.01em;
//           font-family: 'DM Sans', sans-serif;
//         }

//         /* ---------- Center Hero ---------- */
//         .hero {
//           text-align: center;
//           z-index: 10;
//           position: relative;
//           padding: 0 20px;
//           pointer-events: none;
//         }

//         .hero-title {
//           font-family: 'Playfair Display', serif;
//           font-style: italic;
//           font-weight: 400;
//           font-size: clamp(72px, 10vw, 148px);
//           line-height: 0.92;
//           color: #e8e0d0;
//           letter-spacing: -0.01em;
//           margin-bottom: 20px;
//         }

//         .hero-sub {
//           font-family: 'DM Sans', sans-serif;
//           font-size: clamp(13px, 1.4vw, 16px);
//           font-weight: 400;
//           color: rgba(232,224,208,0.75);
//           letter-spacing: 0.01em;
//           margin-bottom: 36px;
//         }

//         /* ---------- CTA Button ---------- */
//         .cta-btn {
//           display: inline-block;
//           background: #c8d87a;
//           color: #1e2a1e;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 15px;
//           font-weight: 500;
//           padding: 14px 36px;
//           border-radius: 999px;
//           border: none;
//           cursor: pointer;
//           pointer-events: all;
//           transition: background 0.2s, transform 0.15s;
//           letter-spacing: 0.01em;
//         }
//         .cta-btn:hover {
//           background: #d4e485;
//           transform: translateY(-2px);
//         }

//         /* ---------- Floating Elements ---------- */
//         .float-el {
//           position: absolute;
//           z-index: 5;
//         }

//         /* Lamp icon top-left */
//         .lamp-el {
//           top: 18%;
//           left: 2%;
//           width: 60px;
//           height: 60px;
//           background: white;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 28px;
//           box-shadow: 0 4px 20px rgba(0,0,0,0.25);
//         }

//         /* Food bowl circle */
//         .food-circle {
//           width: 160px;
//           height: 160px;
//           border-radius: 50%;
//           overflow: hidden;
//           box-shadow: 0 8px 32px rgba(0,0,0,0.35);
//           position: relative;
//         }
//         .food-circle img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }
//         .food-label {
//           position: absolute;
//           bottom: 10px;
//           left: 50%;
//           transform: translateX(-50%);
//           background: #e8523a;
//           color: white;
//           font-size: 9px;
//           font-weight: 700;
//           padding: 2px 8px;
//           border-radius: 999px;
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           white-space: nowrap;
//         }

//         /* Color palette card */
//         .palette-card {
//           background: #2a2a2a;
//           border-radius: 10px;
//           padding: 14px 16px;
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//           min-width: 160px;
//           box-shadow: 0 6px 24px rgba(0,0,0,0.4);
//         }
//         .palette-swatches {
//           display: flex;
//           gap: 8px;
//           align-items: center;
//         }
//         .swatch {
//           width: 32px;
//           height: 32px;
//           border-radius: 50%;
//           box-shadow: 0 2px 6px rgba(0,0,0,0.3);
//         }
//         .swatch-codes {
//           display: flex;
//           gap: 10px;
//           margin-top: 4px;
//         }
//         .swatch-code {
//           font-size: 8.5px;
//           color: rgba(255,255,255,0.45);
//           font-family: 'DM Sans', sans-serif;
//           letter-spacing: 0.04em;
//         }

//         /* Typography card */
//         .typo-card {
//           background: #1a1a2e;
//           border-radius: 10px;
//           padding: 16px 20px;
//           min-width: 190px;
//           box-shadow: 0 8px 32px rgba(0,0,0,0.4);
//         }
//         .typo-label {
//           font-size: 9px;
//           color: rgba(255,255,255,0.4);
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           margin-bottom: 6px;
//           font-family: 'DM Sans', sans-serif;
//         }
//         .typo-aa {
//           font-size: 42px;
//           color: #e8e0d0;
//           font-family: 'Playfair Display', serif;
//           line-height: 1;
//         }

//         /* Snack card */
//         .snack-card {
//           background: #2a2218;
//           border-radius: 12px;
//           padding: 12px;
//           display: flex;
//           gap: 8px;
//           align-items: center;
//           min-width: 160px;
//           box-shadow: 0 8px 32px rgba(0,0,0,0.4);
//         }
//         .snack-img {
//           width: 50px;
//           height: 60px;
//           object-fit: cover;
//           border-radius: 6px;
//         }

//         /* Tags card */
//         .tags-card {
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//         }
//         .tag-pill {
//           background: rgba(200,216,122,0.15);
//           border: 1px solid rgba(200,216,122,0.35);
//           color: #c8d87a;
//           font-size: 11px;
//           font-weight: 500;
//           padding: 5px 14px;
//           border-radius: 999px;
//           font-family: 'DM Sans', sans-serif;
//           white-space: nowrap;
//           text-align: center;
//         }

//         /* Person circles */
//         .person-circle {
//           border-radius: 50%;
//           overflow: hidden;
//           box-shadow: 0 8px 32px rgba(0,0,0,0.35);
//         }
//         .person-circle img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         /* Lipstick product circle */
//         .product-rect {
//           border-radius: 16px;
//           overflow: hidden;
//           box-shadow: 0 8px 32px rgba(0,0,0,0.35);
//         }
//         .product-rect img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         /* Soap circle */
//         .soap-circle {
//           width: 100px;
//           height: 100px;
//           border-radius: 50%;
//           overflow: hidden;
//           background: #e8523a;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 6px 20px rgba(0,0,0,0.3);
//         }

//         /* Brand can circle */
//         .can-circle {
//           border-radius: 50%;
//           overflow: hidden;
//           box-shadow: 0 8px 32px rgba(0,0,0,0.35);
//         }
//         .can-circle img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         /* ---------- Responsive ---------- */
//         @media (max-width: 768px) {
//           .float-el { display: none; }
//           .hero-title { font-size: clamp(64px, 18vw, 100px); }
//           .hero-sub { font-size: 14px; }
//         }
//         @media (max-width: 480px) {
//           .hero-title { font-size: 56px; }
//         }
//       `}</style>

//       <div className="pomelli-root" ref={containerRef}>
//         {/* Navbar */}
//         <nav className="nav">
//           <svg className="nav-logo-icon" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5">
//             <circle cx="12" cy="12" r="9" />
//             <path d="M8 12 Q12 6 16 12 Q12 18 8 12Z" fill="rgba(255,255,255,0.75)" stroke="none" />
//           </svg>
//           <span className="nav-label">Google Labs</span>
//         </nav>

//         {/* ── Floating Elements ── */}

//         {/* Lamp icon */}
//         <div
//           className="float-el lamp-el"
//           data-base-transform="rotate(0deg)"
//         >
//           🪔
//         </div>

//         {/* Food bowl circle — top center-left */}
//         <div
//           className="float-el food-circle"
//           style={{ top: "8%", left: "14%", transform: "rotate(-8deg)" }}
//           data-base-transform="rotate(-8deg)"
//         >
//           <img
//             src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop"
//             alt="Food"
//           />
//           <div className="food-label">Banza</div>
//         </div>

//         {/* Color palette card */}
//         <div
//           className="float-el palette-card"
//           style={{ top: "36%", left: "2%", transform: "rotate(-3deg)" }}
//           data-base-transform="rotate(-3deg)"
//         >
//           <div className="palette-swatches">
//             <div className="swatch" style={{ background: "#34534d" }} />
//             <div className="swatch" style={{ background: "#80979a" }} />
//             <div className="swatch" style={{ background: "#d3b79c" }} />
//           </div>
//           <div className="swatch-codes">
//             <span className="swatch-code">#34534d</span>
//             <span className="swatch-code">#80979a</span>
//             <span className="swatch-code">#d3b79c</span>
//           </div>
//         </div>

//         {/* Person circle — left */}
//         <div
//           className="float-el person-circle"
//           style={{ top: "57%", left: "3%", width: 110, height: 110 }}
//           data-base-transform="rotate(0deg)"
//         >
//           <img
//             src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=200&h=200&fit=crop&face"
//             alt="Person"
//           />
//         </div>

//         {/* Soap circle */}
//         <div
//           className="float-el soap-circle"
//           style={{ top: "70%", left: "11%", transform: "rotate(5deg)" }}
//           data-base-transform="rotate(5deg)"
//         >
//           <span style={{ fontSize: 28 }}>🧼</span>
//         </div>

//         {/* Tags */}
//         <div
//           className="float-el tags-card"
//           style={{ top: "79%", left: "2%", transform: "rotate(-10deg)" }}
//           data-base-transform="rotate(-10deg)"
//         >
//           {["Confident", "Inspiring", "Authentic", "Can-forward"].map((t) => (
//             <div key={t} className="tag-pill">{t}</div>
//           ))}
//         </div>

//         {/* Typography + Snacks card — top right */}
//         <div
//           className="float-el typo-card"
//           style={{ top: "10%", right: "7%", transform: "rotate(6deg)" }}
//           data-base-transform="rotate(6deg)"
//         >
//           <div className="typo-label">Ivypresto Headline</div>
//           <div className="typo-aa">Aa</div>
//         </div>

//         {/* Snacks next to typo card */}
//         <div
//           className="float-el"
//           style={{
//             top: "22%",
//             right: "14%",
//             transform: "rotate(-4deg)",
//             background: "#1a1208",
//             borderRadius: 12,
//             padding: "10px 14px",
//             boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
//             display: "flex",
//             gap: 8,
//             alignItems: "center",
//           }}
//           data-base-transform="rotate(-4deg)"
//         >
//           <span style={{ fontSize: 36 }}>🌮</span>
//           <span style={{ fontSize: 36 }}>🍫</span>
//         </div>

//         {/* Lipstick / cosmetic circle — right */}
//         <div
//           className="float-el product-rect"
//           style={{ top: "40%", right: "-10px", width: 130, height: 200 }}
//           data-base-transform="rotate(0deg)"
//         >
//           <img
//             src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=260&h=400&fit=crop"
//             alt="Cosmetic product"
//           />
//         </div>

//         {/* Brand drink can circle — bottom right */}
//         <div
//           className="float-el can-circle"
//           style={{ top: "62%", right: "5%", width: 170, height: 170 }}
//           data-base-transform="rotate(0deg)"
//         >
//           <img
//             src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300&h=300&fit=crop"
//             alt="Brand can"
//           />
//         </div>

//         {/* ── Hero Center ── */}
//         <div className="hero">
//           <h1 className="hero-title">Pomelli</h1>
//           <p className="hero-sub">Easily generate on-brand content for your business</p>
//           <button className="cta-btn">Let's get started</button>
//         </div>
//       </div>
//     </>
//   );
// }











// "use client";

// import { useEffect, useRef } from "react";



// const leftCards = [
//   {
//     id: "creative",
//     icon: "✦",
//     label: "Creative",
//     desc: "Brand visuals, motion & storytelling",
//     accent: "#c8d87a",
//     bg: "#23301a",
//   },
//   {
//     id: "design",
//     icon: "◈",
//     label: "Design",
//     desc: "UI/UX systems, components & style",
//     accent: "#7ac8d8",
//     bg: "#162530",
//   },
//   {
//     id: "dev",
//     icon: "</>",
//     label: "Development",
//     desc: "Full-stack apps, APIs & automation",
//     accent: "#d87ac8",
//     bg: "#2a1630",
//   },
//   {
//     id: "color",
//     label: "Palette",
//     type: "palette",
//     colors: ["#34534d", "#80979a", "#d3b79c", "#c8d87a"],
//     bg: "#1e2820",
//   },
// ];

// const rightCards = [
//   {
//     id: "tech",
//     icon: "⚙",
//     label: "Tech & Tools",
//     desc: "AI, CLIs, devtools & workflows",
//     accent: "#d8c87a",
//     bg: "#302a16",
//   },
//   {
//     id: "type",
//     type: "typo",
//     bg: "#1a1a2e",
//   },
//   {
//     id: "tags",
//     type: "tags",
//     tags: ["Blow Your Mind", "Creative", "Open-source", "Bold"],
//     bg: "#1e2a1e",
//   },
// ];

// export default function BYMLabPage() {
//   const rootRef = useRef<HTMLDivElement>(null);

//   /* subtle entrance animation */
//   useEffect(() => {
//     const cards = rootRef.current?.querySelectorAll<HTMLElement>(".bym-card");
//     cards?.forEach((el, i) => {
//       el.style.opacity = "0";
//       el.style.transform = "translateY(18px)";
//       setTimeout(() => {
//         el.style.transition = "opacity 0.55s ease, transform 0.55s ease";
//         el.style.opacity = "1";
//         el.style.transform = "translateY(0)";
//       }, 120 + i * 90);
//     });
//     const hero = rootRef.current?.querySelector<HTMLElement>(".hero-inner");
//     if (hero) {
//       hero.style.opacity = "0";
//       hero.style.transform = "translateY(24px)";
//       setTimeout(() => {
//         hero.style.transition = "opacity 0.7s ease, transform 0.7s ease";
//         hero.style.opacity = "1";
//         hero.style.transform = "translateY(0)";
//       }, 60);
//     }
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400;1,500&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         :root {
//           --bg: #1b2618;
//           --cream: #e8e0d0;
//           --lime: #c8d87a;
//           --muted: rgba(232,224,208,0.55);
//           --card-radius: 16px;
//           --gap: 14px;
//         }

//         html, body { height: 100%; background: var(--bg); }

//         /* ── Root ── */
//         .bym-root {
//           min-height: 100vh;
//           background: var(--bg);
//           display: flex;
//           flex-direction: column;
//           font-family: 'DM Sans', sans-serif;
//           position: relative;
//           overflow-x: hidden;
//         }

//         /* subtle grain */
//         .bym-root::before {
//           content: '';
//           position: fixed;
//           inset: 0;
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
//           pointer-events: none;
//           z-index: 0;
//           opacity: 0.45;
//         }

//         /* ── Nav ── */
//         .bym-nav {
//           position: fixed;
//           top: 0; left: 0; right: 0;
//           z-index: 100;
//           padding: 20px 28px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }
//         .bym-nav-brand {
//           display: flex;
//           align-items: center;
//           gap: 9px;
//         }
//         .bym-nav-dot {
//           width: 28px; height: 28px;
//           border-radius: 50%;
//           background: var(--lime);
//           display: flex; align-items: center; justify-content: center;
//           font-size: 13px; color: var(--bg); font-weight: 700;
//         }
//         .bym-nav-name {
//           font-family: 'DM Sans', sans-serif;
//           font-size: 18px;
//           font-weight: 600;
//           color: rgba(232,224,208,0.85);
//           letter-spacing: 0.04em;
//         }
//         .bym-nav-links {
//           display: flex;
//           gap: 28px;
//           list-style: none;
//         }
//         .bym-nav-links a {
//           color: var(--muted);
//           text-decoration: none;
//           font-size: 13px;
//           font-weight: 400;
//           letter-spacing: 0.02em;
//           transition: color 0.2s;
//         }
//         .bym-nav-links a:hover { color: var(--cream); }

//         /* ── Layout ── */
//         .bym-layout {
//           flex: 1;
//           display: grid;
//           grid-template-columns: 220px 1fr 220px;
//           gap: 0 var(--gap);
//           align-items: center;
//           min-height: 100vh;
//           padding: 100px 28px 40px;
//           position: relative;
//           z-index: 1;
//         }

//         /* ── Columns ── */
//         .bym-col {
//           display: flex;
//           flex-direction: column;
//           gap: var(--gap);
//           height: 100%;
//           justify-content: center;
//         }

//         /* ── Cards ── */
//         .bym-card {
//           border-radius: var(--card-radius);
//           padding: 16px 18px;
//           position: relative;
//           overflow: hidden;
//           cursor: default;
//           transition: transform 0.22s ease, box-shadow 0.22s ease;
//           border: 1px solid rgba(255,255,255,0.06);
//         }
//         .bym-card:hover {
//           transform: translateY(-3px) scale(1.015);
//           box-shadow: 0 12px 40px rgba(0,0,0,0.45);
//         }

//         /* icon-label card */
//         .card-icon {
//           font-size: 22px;
//           margin-bottom: 10px;
//           line-height: 1;
//           font-family: 'JetBrains Mono', monospace;
//           font-weight: 500;
//         }
//         .card-label {
//           font-size: 13px;
//           font-weight: 600;
//           color: var(--cream);
//           letter-spacing: 0.04em;
//           margin-bottom: 4px;
//           text-transform: uppercase;
//         }
//         .card-desc {
//           font-size: 11.5px;
//           color: var(--muted);
//           line-height: 1.5;
//         }
//         .card-accent-bar {
//           position: absolute;
//           bottom: 0; left: 0; right: 0;
//           height: 3px;
//           border-radius: 0 0 var(--card-radius) var(--card-radius);
//         }

//         /* palette card */
//         .palette-swatches {
//           display: flex;
//           gap: 6px;
//           margin-bottom: 8px;
//         }
//         .swatch {
//           flex: 1;
//           height: 28px;
//           border-radius: 8px;
//           box-shadow: 0 2px 6px rgba(0,0,0,0.3);
//         }
//         .palette-label {
//           font-size: 10px;
//           color: var(--muted);
//           letter-spacing: 0.06em;
//           text-transform: uppercase;
//         }

//         /* typo card */
//         .typo-tag {
//           font-size: 9px;
//           color: var(--muted);
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           margin-bottom: 4px;
//         }
//         .typo-aa {
//           font-family: 'Playfair Display', serif;
//           font-style: italic;
//           font-size: 52px;
//           color: var(--cream);
//           line-height: 1;
//         }

//         /* tags card */
//         .tags-wrap {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 6px;
//         }
//         .tag-pill {
//           background: rgba(200,216,122,0.12);
//           border: 1px solid rgba(200,216,122,0.3);
//           color: var(--lime);
//           font-size: 10.5px;
//           font-weight: 500;
//           padding: 4px 11px;
//           border-radius: 999px;
//           letter-spacing: 0.02em;
//           white-space: nowrap;
//         }

//         /* ── Hero ── */
//         .bym-hero {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           text-align: center;
//           padding: 0 12px;
//         }
//         .hero-inner {}
//         .hero-eyebrow {
//           font-size: 11px;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: var(--lime);
//           font-weight: 500;
//           margin-bottom: 16px;
//         }
//         .hero-title {
//           font-family: 'Playfair Display', serif;
//           font-style: italic;
//           font-weight: 400;
//           font-size: clamp(60px, 7.5vw, 120px);
//           line-height: 0.92;
//           color: var(--cream);
//           letter-spacing: -0.01em;
//           margin-bottom: 10px;
//         }
//         .hero-title-bold {
//           font-style: normal;
//           font-weight: 400;
//           display: block;
//           font-size: clamp(18px, 2.2vw, 32px);
//           color: var(--lime);
//           letter-spacing: 0.18em;
//           text-transform: uppercase;
//           font-family: 'DM Sans', sans-serif;
//           font-weight: 600;
//           margin-top: 6px;
//           margin-bottom: 0;
//         }
//         .hero-sub {
//           font-size: clamp(12px, 1.2vw, 15px);
//           color: var(--muted);
//           max-width: 320px;
//           line-height: 1.6;
//           margin: 18px auto 32px;
//           font-weight: 300;
//         }
//         .hero-sub strong { color: var(--cream); font-weight: 500; }

//         .cta-wrap {
//           display: flex;
//           gap: 12px;
//           align-items: center;
//           justify-content: center;
//           flex-wrap: wrap;
//         }
//         .cta-primary {
//           background: var(--lime);
//           color: var(--bg);
//           font-family: 'DM Sans', sans-serif;
//           font-size: 13px;
//           font-weight: 600;
//           padding: 13px 30px;
//           border-radius: 999px;
//           border: none;
//           cursor: pointer;
//           letter-spacing: 0.03em;
//           transition: background 0.2s, transform 0.15s;
//         }
//         .cta-primary:hover { background: #d4e485; transform: translateY(-2px); }
//         .cta-secondary {
//           color: var(--muted);
//           font-size: 13px;
//           font-weight: 400;
//           background: none;
//           border: 1px solid rgba(255,255,255,0.15);
//           padding: 13px 24px;
//           border-radius: 999px;
//           cursor: pointer;
//           transition: color 0.2s, border-color 0.2s;
//           font-family: 'DM Sans', sans-serif;
//         }
//         .cta-secondary:hover { color: var(--cream); border-color: rgba(255,255,255,0.4); }

//         /* badge below CTA */
//         .hero-badge {
//           margin-top: 24px;
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           background: rgba(255,255,255,0.05);
//           border: 1px solid rgba(255,255,255,0.1);
//           border-radius: 999px;
//           padding: 5px 14px;
//           font-size: 10.5px;
//           color: var(--muted);
//           letter-spacing: 0.05em;
//         }
//         .hero-badge-dot {
//           width: 6px; height: 6px;
//           border-radius: 50%;
//           background: var(--lime);
//           box-shadow: 0 0 6px var(--lime);
//         }

//         /* ── Footer ── */
//         .bym-footer {
//           position: relative;
//           z-index: 1;
//           text-align: center;
//           padding: 0 0 28px;
//           font-size: 11px;
//           color: rgba(232,224,208,0.25);
//           letter-spacing: 0.06em;
//         }

//         /* ── Responsive ── */
//         @media (max-width: 900px) {
//           .bym-layout {
//             grid-template-columns: 1fr 1fr;
//             grid-template-rows: auto auto;
//             gap: var(--gap);
//             padding: 90px 16px 36px;
//           }
//           .col-left { grid-column: 1; }
//           .col-hero { grid-column: 1 / -1; order: -1; padding: 24px 0 8px; }
//           .col-right { grid-column: 2; }
//           .bym-nav-links { display: none; }
//         }

//         @media (max-width: 580px) {
//           .bym-layout {
//             grid-template-columns: 1fr;
//             padding: 80px 14px 30px;
//           }
//           .col-left, .col-right {
//             display: grid;
//             grid-template-columns: 1fr 1fr;
//             gap: var(--gap);
//           }
//           .col-hero { order: -1; }
//           .hero-title { font-size: 56px; }
//         }

//         @media (max-width: 380px) {
//           .col-left, .col-right {
//             grid-template-columns: 1fr;
//           }
//         }

        
//       `}</style>

//       <div className="bym-root" ref={rootRef}>
//         {/* Nav */}
//         <nav className="bym-nav">
//           <div className="bym-nav-brand">
//        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgba(232,224,208,0.85)"><path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm80-120h400L544-400H416L280-240Zm-80 40h560L520-492v-268h-80v268L200-200Zm280-280Z"/></svg>
//             <span className="bym-nav-name">Bym Labs</span>
//           </div>
//         <ul className="bym-nav-links">
//           <li><a href="https://chinmayakumardas.com/" target="_blank" rel="noopener noreferrer">Portfolio</a></li>

//           </ul>
//         </nav>

//         {/* Main layout */}
//         <main className="bym-layout">

//           {/* LEFT COLUMN — 4 cards */}
//           <div className="bym-col col-left">

//             {/* 1 · Creative */}
//             <div className="bym-card" style={{ background: "#23301a" }}>
//               <div className="card-icon" style={{ color: "#c8d87a" }}>✦</div>
//               <div className="card-label">Creative</div>
//               <div className="card-desc">Brand visuals, motion & storytelling</div>
//               <div className="card-accent-bar" style={{ background: "#c8d87a" }} />
//             </div>

//             {/* 2 · Design */}
//             <div className="bym-card" style={{ background: "#162530" }}>
//               <div className="card-icon" style={{ color: "#7ac8d8" }}>◈</div>
//               <div className="card-label">Design</div>
//               <div className="card-desc">UI/UX systems, components & style guides</div>
//               <div className="card-accent-bar" style={{ background: "#7ac8d8" }} />
//             </div>

//             {/* 3 · Development */}
//             <div className="bym-card" style={{ background: "#2a1630" }}>
//               <div className="card-icon" style={{ color: "#d87ac8", fontFamily: "'JetBrains Mono', monospace", fontSize: 15 }}>&lt;/&gt;</div>
//               <div className="card-label">Development</div>
//               <div className="card-desc">Full-stack apps, APIs & automation scripts</div>
//               <div className="card-accent-bar" style={{ background: "#d87ac8" }} />
//             </div>

//             {/* 4 · Palette */}
//             <div className="bym-card" style={{ background: "#1e2820" }}>
//               <div className="card-label" style={{ marginBottom: 10 }}>Palette</div>
//               <div className="palette-swatches">
//                 {["#34534d","#80979a","#d3b79c","#c8d87a"].map(c => (
//                   <div key={c} className="swatch" style={{ background: c }} />
//                 ))}
//               </div>
//               <div className="palette-label">Brand System</div>
//             </div>

//           </div>

//           {/* HERO */}
//           <div className="bym-col col-hero bym-hero">
//             <div className="hero-inner">
//               <div className="hero-eyebrow">↳ BYM Lab</div>
//               <h1 className="hero-title">
//                 Blow Your
//                 <span className="hero-title-bold">Mind</span>
//               </h1>
//               <p className="hero-sub">
//                 Tools built to <strong>inspire, create & ship</strong> — across creative, design, development & tech. One lab, infinite possibilities.
//               </p>
//               <div className="cta-wrap">
//                 <button className="cta-primary">Explore Tools →</button>
//                 <button className="cta-secondary">See the work</button>
//               </div>
//               <div className="hero-badge">
//                 <div className="hero-badge-dot" />
//                 Made by a developer · For everyone
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN — 3 cards */}
//           <div className="bym-col col-right">

//             {/* 1 · Tech & Tools */}
//             <div className="bym-card" style={{ background: "#302a16" }}>
//               <div className="card-icon" style={{ color: "#d8c87a" }}>⚙</div>
//               <div className="card-label">Tech & Tools</div>
//               <div className="card-desc">AI, CLIs, devtools & workflows that just work</div>
//               <div className="card-accent-bar" style={{ background: "#d8c87a" }} />
//             </div>

//             {/* 2 · Typography */}
//             <div className="bym-card" style={{ background: "#1a1a2e" }}>
//               <div className="typo-tag">Display · Serif</div>
//               <div className="typo-aa">Aa</div>
//               <div className="card-desc" style={{ marginTop: 6 }}>Playfair Display — editorial &amp; refined</div>
//             </div>

//             {/* 3 · Tags */}
//             <div className="bym-card" style={{ background: "#1e2a1e" }}>
//               <div className="card-label" style={{ marginBottom: 10 }}>Vibes</div>
//               <div className="tags-wrap">
//                 {["Blow Your Mind","Creative","Dev-first","Bold","Open","Fast","AI-native","Craft"].map(t => (
//                   <span key={t} className="tag-pill">{t}</span>
//                 ))}
//               </div>
//             </div>

//           </div>

//         </main>

//         {/* Footer */}
//        <footer className="bym-footer">
//   © {new Date().getFullYear()} BYM Lab · Built by a developer, for everyone
// </footer>

//       </div>
//     </>
//   );
// }
















"use client";

import { useEffect, useRef } from "react";

// ──────────────────────────────────────────────

const leftCards = [
  {
    id: "creative",
    icon: "✦",
    label: "Creative",
    desc: "Brand visuals, motion & storytelling",
    accent: "#c8d87a",
    bg: "#23301a",
  },
  {
    id: "design",
    icon: "◈",
    label: "Design",
    desc: "UI/UX systems, components & style",
    accent: "#7ac8d8",
    bg: "#162530",
  },
  {
    id: "dev",
    icon: "</>",
    label: "Development",
    desc: "Full-stack apps, APIs & automation",
    accent: "#d87ac8",
    bg: "#2a1630",
  },
  {
    id: "color",
    label: "Palette",
    type: "palette",
    colors: ["#34534d", "#80979a", "#d3b79c", "#c8d87a"],
    bg: "#1e2820",
  },
];

const rightCards = [
  {
    id: "tech",
    icon: "⚙",
    label: "Tech & Tools",
    desc: "AI, CLIs, devtools & workflows",
    accent: "#d8c87a",
    bg: "#302a16",
  },
  {
    id: "type",
    type: "typo",
    bg: "#1a1a2e",
  },
  {
    id: "tags",
    type: "tags",
    tags: ["Blow Your Mind", "Creative", "Open-source", "Bold"],
    bg: "#1e2a1e",
  },
];

// ──────────────────────────────────────────────

export default function BYMLabPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  /* subtle entrance animation */
  useEffect(() => {
    const cards = rootRef.current?.querySelectorAll<HTMLElement>(".bym-card");
    cards?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.55s ease, transform 0.55s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 120 + i * 90);
    });
    const hero = rootRef.current?.querySelector<HTMLElement>(".hero-inner");
    if (hero) {
      hero.style.opacity = "0";
      hero.style.transform = "translateY(24px)";
      setTimeout(() => {
        hero.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
      }, 60);
    }
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400;1,500&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #1b2618;
          --cream: #e8e0d0;
          --lime: #c8d87a;
          --muted: rgba(232,224,208,0.55);
          --card-radius: 16px;
          --gap: 14px;
        }

        html, body { height: 100%; background: var(--bg); }

        .bym-root {
          min-height: 100vh;
          background: var(--bg);
          display: flex;
          flex-direction: column;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .bym-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.45;
        }

        .bym-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 20px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .bym-nav-brand {
          display: flex;
          align-items: center;
          gap: 9px;
        }
        .bym-nav-dot {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: var(--lime);
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; color: var(--bg); font-weight: 700;
        }
        .bym-nav-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: rgba(232,224,208,0.85);
          letter-spacing: 0.04em;
        }
        .bym-nav-links {
          display: flex;
          gap: 28px;
          list-style: none;
        }
        .bym-nav-links a {
          color: var(--muted);
          text-decoration: none;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .bym-nav-links a:hover { color: var(--cream); }

        .bym-layout {
          flex: 1;
          display: grid;
          grid-template-columns: 220px 1fr 220px;
          gap: 0 var(--gap);
          align-items: center;
          min-height: 100vh;
          padding: 100px 28px 40px;
          position: relative;
          z-index: 1;
        }

        .bym-col {
          display: flex;
          flex-direction: column;
          gap: var(--gap);
          height: 100%;
          justify-content: center;
        }

        .bym-card {
          border-radius: var(--card-radius);
          padding: 16px 18px;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .bym-card:hover {
          transform: translateY(-3px) scale(1.015);
          box-shadow: 0 12px 40px rgba(0,0,0,0.45);
        }

        .card-icon {
          font-size: 22px;
          margin-bottom: 10px;
          line-height: 1;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 500;
        }
        .card-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--cream);
          letter-spacing: 0.04em;
          margin-bottom: 4px;
          text-transform: uppercase;
        }
        .card-desc {
          font-size: 11.5px;
          color: var(--muted);
          line-height: 1.5;
        }
        .card-accent-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 0 0 var(--card-radius) var(--card-radius);
        }

        .palette-swatches {
          display: flex;
          gap: 6px;
          margin-bottom: 8px;
        }
        .swatch {
          flex: 1;
          height: 28px;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        }
        .palette-label {
          font-size: 10px;
          color: var(--muted);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .typo-tag {
          font-size: 9px;
          color: var(--muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .typo-aa {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 52px;
          color: var(--cream);
          line-height: 1;
        }

        .tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .tag-pill {
          background: rgba(200,216,122,0.12);
          border: 1px solid rgba(200,216,122,0.3);
          color: var(--lime);
          font-size: 10.5px;
          font-weight: 500;
          padding: 4px 11px;
          border-radius: 999px;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        .bym-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 12px;
        }
        .hero-inner {}
        .hero-eyebrow {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--lime);
          font-weight: 500;
          margin-bottom: 16px;
        }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 400;
          font-size: clamp(60px, 7.5vw, 120px);
          line-height: 0.92;
          color: var(--cream);
          letter-spacing: -0.01em;
          margin-bottom: 10px;
        }
        .hero-title-bold {
          font-style: normal;
          font-weight: 400;
          display: block;
          font-size: clamp(18px, 2.2vw, 32px);
          color: var(--lime);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          margin-top: 6px;
          margin-bottom: 0;
        }
        .hero-sub {
          font-size: clamp(12px, 1.2vw, 15px);
          color: var(--muted);
          max-width: 320px;
          line-height: 1.6;
          margin: 18px auto 32px;
          font-weight: 300;
        }
        .hero-sub strong { color: var(--cream); font-weight: 500; }

        .cta-wrap {
          display: flex;
          gap: 12px;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cta-primary {
          background: var(--lime);
          color: var(--bg);
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          padding: 13px 30px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          letter-spacing: 0.03em;
          transition: background 0.2s, transform 0.15s;
        }
        .cta-primary:hover { background: #d4e485; transform: translateY(-2px); }
        .cta-secondary {
          color: var(--muted);
          font-size: 13px;
          font-weight: 400;
          background: none;
          border: 1px solid rgba(255,255,255,0.15);
          padding: 13px 24px;
          border-radius: 999px;
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .cta-secondary:hover { color: var(--cream); border-color: rgba(255,255,255,0.4); }

        .hero-badge {
          margin-top: 24px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          padding: 5px 14px;
          font-size: 10.5px;
          color: var(--muted);
          letter-spacing: 0.05em;
        }
        .hero-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--lime);
          box-shadow: 0 0 6px var(--lime);
        }

        .bym-footer {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 0 0 28px;
          font-size: 11px;
          color: rgba(232,224,208,0.25);
          letter-spacing: 0.06em;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .bym-layout {
            grid-template-columns: 180px 1fr 180px;
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        @media (max-width: 900px) {
          .bym-layout {
            display: flex;
            flex-direction: column;
            gap: calc(var(--gap) * 1.8);
            padding: 90px 20px 60px;
            align-items: center;
          }

          .bym-col {
            width: 100%;
            max-width: 480px;
            margin: 0 auto;
          }

          .col-hero {
            order: -1;
            padding: 20px 0 40px;
          }

          .bym-nav {
            padding: 16px 20px;
            justify-content: center;
          }

          .bym-nav-links {
            display: none;
          }
        }

        @media (max-width: 580px) {
          .bym-layout {
            padding: 80px 14px 50px;
          }

          .bym-col {
            gap: 12px;
          }

          .hero-title {
            font-size: clamp(48px, 11vw, 78px);
          }

          .hero-title-bold {
            font-size: clamp(16px, 4vw, 26px);
          }

          .hero-sub {
            font-size: clamp(11.5px, 2.6vw, 14px);
            max-width: 90%;
          }

          .cta-wrap {
            flex-direction: column;
            gap: 12px;
          }

          .cta-primary, .cta-secondary {
            width: 100%;
            max-width: 280px;
            padding: 14px 32px;
          }
        }

        @media (max-width: 380px) {
          .bym-nav {
            padding: 14px 16px;
          }

          .bym-nav-name {
            font-size: 16px;
          }

          .bym-nav-brand svg {
            width: 20px;
            height: 20px;
          }

          .hero-eyebrow {
            font-size: 10px;
          }

          .card-icon {
            font-size: 20px;
          }

          .card-label {
            font-size: 12.5px;
          }

          .card-desc {
            font-size: 11px;
          }
        }

        @supports (padding-top: env(safe-area-inset-top)) {
          .bym-nav {
            padding-top: calc(16px + env(safe-area-inset-top));
          }
          .bym-layout {
            padding-top: calc(100px + env(safe-area-inset-top));
          }
          .bym-footer {
            padding-bottom: calc(28px + env(safe-area-inset-bottom));
          }
        }
      `}</style>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"
      />

      <div className="bym-root" ref={rootRef}>
        <nav className="bym-nav">
          <div className="bym-nav-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="rgba(232,224,208,0.85)"
            >
              <path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm80-120h400L544-400H416L280-240Zm-80 40h560L520-492v-268h-80v268L200-200Zm280-280Z" />
            </svg>
            <span className="bym-nav-name">Bym Labs</span>
          </div>
          <ul className="bym-nav-links">
            <li>
              <a
                href="https://chinmayakumardas.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </nav>

        <main className="bym-layout">
          <div className="bym-col col-left">
            <div className="bym-card" style={{ background: "#23301a" }}>
              <div className="card-icon" style={{ color: "#c8d87a" }}>✦</div>
              <div className="card-label">Creative</div>
              <div className="card-desc">Brand visuals, motion & storytelling</div>
              <div className="card-accent-bar" style={{ background: "#c8d87a" }} />
            </div>

            <div className="bym-card" style={{ background: "#162530" }}>
              <div className="card-icon" style={{ color: "#7ac8d8" }}>◈</div>
              <div className="card-label">Design</div>
              <div className="card-desc">UI/UX systems, components & style guides</div>
              <div className="card-accent-bar" style={{ background: "#7ac8d8" }} />
            </div>

            <div className="bym-card" style={{ background: "#2a1630" }}>
              <div
                className="card-icon"
                style={{ color: "#d87ac8", fontFamily: "'JetBrains Mono', monospace", fontSize: 15 }}
              >
                &lt;/&gt;
              </div>
              <div className="card-label">Development</div>
              <div className="card-desc">Full-stack apps, APIs & automation scripts</div>
              <div className="card-accent-bar" style={{ background: "#d87ac8" }} />
            </div>

            <div className="bym-card" style={{ background: "#1e2820" }}>
              <div className="card-label" style={{ marginBottom: 10 }}>Palette</div>
              <div className="palette-swatches">
                {["#34534d", "#80979a", "#d3b79c", "#c8d87a"].map((c) => (
                  <div key={c} className="swatch" style={{ background: c }} />
                ))}
              </div>
              <div className="palette-label">Brand System</div>
            </div>
          </div>

          <div className="bym-col col-hero bym-hero">
            <div className="hero-inner">
              <div className="hero-eyebrow">↳ BYM Lab</div>
              <h1 className="hero-title">
                Blow Your
                <span className="hero-title-bold">Mind</span>
              </h1>
              <p className="hero-sub">
                Tools built to <strong>inspire, create & ship</strong> — across creative, design, development & tech. One lab, infinite possibilities.
              </p>
              <div className="cta-wrap">
                <button className="cta-primary">Explore Tools →</button>
                <button className="cta-secondary">See the work</button>
              </div>
              <div className="hero-badge">
                <div className="hero-badge-dot" />
                Made by a developer · For everyone
              </div>
            </div>
          </div>

          <div className="bym-col col-right">
            <div className="bym-card" style={{ background: "#302a16" }}>
              <div className="card-icon" style={{ color: "#d8c87a" }}>⚙</div>
              <div className="card-label">Tech & Tools</div>
              <div className="card-desc">AI, CLIs, devtools & workflows that just work</div>
              <div className="card-accent-bar" style={{ background: "#d8c87a" }} />
            </div>

            <div className="bym-card" style={{ background: "#1a1a2e" }}>
              <div className="typo-tag">Display · Serif</div>
              <div className="typo-aa">Aa</div>
              <div className="card-desc" style={{ marginTop: 6 }}>
                Playfair Display — editorial & refined
              </div>
            </div>

            <div className="bym-card" style={{ background: "#1e2a1e" }}>
              <div className="card-label" style={{ marginBottom: 10 }}>Vibes</div>
              <div className="tags-wrap">
                {[
                  "Blow Your Mind",
                  "Creative",
                  "Dev-first",
                  "Bold",
                  "Open",
                  "Fast",
                  "AI-native",
                  "Craft",
                ].map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </main>

        <footer className="bym-footer">
          © {new Date().getFullYear()} BYM Lab · Built by a developer, for everyone
        </footer>
      </div>
    </>
  );
}









