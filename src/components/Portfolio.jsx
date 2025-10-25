import React, { useRef, useState } from 'react';

function ShatterImage({ src, alt }) {
  const imgRef = useRef(null);
  const canvasRef = useRef(null);
  const [animating, setAnimating] = useState(false);

  const onClick = () => {
    if (animating) return;
    const img = imgRef.current;
    const canvas = canvasRef.current;
    if (!img || !canvas) return;
    const rect = img.getBoundingClientRect();
    const w = img.naturalWidth || rect.width;
    const h = img.naturalHeight || rect.height;
    // Match canvas to rendered size of the container
    const cw = img.clientWidth;
    const ch = img.clientHeight;
    canvas.width = cw;
    canvas.height = ch;
    const ctx = canvas.getContext('2d');
    // Prepare an offscreen buffer with the current image scaled to fit
    const buffer = document.createElement('canvas');
    buffer.width = cw;
    buffer.height = ch;
    const bctx = buffer.getContext('2d');
    const scaleX = cw / w;
    const scaleY = ch / h;
    bctx.setTransform(scaleX, 0, 0, scaleY, 0, 0);
    bctx.drawImage(img, 0, 0);
    bctx.setTransform(1, 0, 0, 1, 0, 0);

    // Build tiles
    const cols = 14, rows = 10; // tweak for more/less pieces
    const tileW = Math.ceil(cw / cols);
    const tileH = Math.ceil(ch / rows);
    const pieces = [];
    const cx = cw / 2, cy = ch / 2;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const sx = x * tileW;
        const sy = y * tileH;
        // velocity away from center with randomness
        const dx = sx + tileW / 2 - cx;
        const dy = sy + tileH / 2 - cy;
        const dist = Math.hypot(dx, dy) || 1;
        const base = 3 + Math.random() * 2; // speed
        const vx = (dx / dist) * base + (Math.random() - 0.5) * 1.2;
        const vy = (dy / dist) * base + (Math.random() - 0.5) * 1.2;
        pieces.push({ sx, sy, x: sx, y: sy, vx, vy, a: 1 });
      }
    }

    // Animate
    setAnimating(true);
    img.style.visibility = 'hidden';
    canvas.style.opacity = '1';
    let last = performance.now();
    let elapsed = 0;
    const duration = 900; // ms
    const gravity = 0.15;
    const animate = (t) => {
      const dt = Math.min(32, t - last);
      last = t;
      elapsed += dt;
      ctx.clearRect(0, 0, cw, ch);
      for (const p of pieces) {
        p.vy += gravity * (dt / 16);
        p.x += p.vx * (dt / 16);
        p.y += p.vy * (dt / 16);
        // fade out towards the end
        p.a = Math.max(0, 1 - elapsed / duration);
        if (p.a <= 0) continue;
        ctx.globalAlpha = p.a;
        ctx.drawImage(buffer, p.sx, p.sy, tileW, tileH, p.x, p.y, tileW, tileH);
      }
      ctx.globalAlpha = 1;
      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        // cleanup
        ctx.clearRect(0, 0, cw, ch);
        canvas.style.opacity = '0';
        img.style.visibility = 'visible';
        setAnimating(false);
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <div className="media" onClick={onClick} style={{ position: 'relative', cursor: 'pointer' }}>
      <img ref={imgRef} src={src} alt={alt} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0, transition: 'opacity .2s ease' }} />
    </div>
  );
}

function Portfolio() {
  return (
    <div id="portfolio" className="reveal">
      <div className="container">
        <h1 className="sub-title">Projects</h1>
        <div className="gallery-grid">
          <article className="gallery-card">
            <ShatterImage src={`${process.env.PUBLIC_URL}/Images/project-img1.png`} alt="PetHub" />
            <div className="overlay">
              <h3>PetHub</h3>
              <p>Developed a full-stack inventory and sales management platform for pet products during apprenticeship. Used J2EE and JSP with MVC architecture for backend modularity, and designed MySQL schemas for products, users, and orders. Integrated a React frontend for dynamic browsing and responsive UX.</p>
              <a className="btn btn2" href="https://github.com/Darshan-git00/PetHub" target="_blank" rel="noreferrer">View</a>
            </div>
          </article>
          <article className="gallery-card">
            <ShatterImage src={`${process.env.PUBLIC_URL}/Images/project-img2.png`} alt="Cattle Disease Prediction" />
            <div className="overlay">
              <h3>Cattle Disease Prediction</h3>
              <p>Built a rule-based prediction system using Java, Spring Boot, and MySQL to analyze historical cattle health data. Designed backend logic and REST endpoints to classify disease patterns and forecast outbreaks. Enabled early diagnosis through structured data analysis, supporting proactive veterinary care.</p>
              <a className="btn btn2" href="https://github.com/Darshan-git00/Cattle-Disease" target="_blank" rel="noreferrer">View</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
