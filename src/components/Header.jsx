import React, { useState, useEffect } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const words2 = 'Hey there!'.split(' ');
  const words3 = "I'm Darshan".split(' ');
  const roles = ['Budding Dev', 'DevFlux', 'Freelancer', 'Programmer', 'Engineer', 'Hustler'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[roleIndex];
    const speed = deleting ? 45 : 85;
    const timeout = setTimeout(() => {
      const nextLen = deleting ? display.length - 1 : display.length + 1;
      const next = full.slice(0, nextLen);
      setDisplay(next);
      if (!deleting && next === full) {
        // pause before deleting
        setTimeout(() => setDeleting(true), 900);
      }
      if (deleting && nextLen === 0) {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, speed);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [display, deleting, roleIndex]);

  return (
    <div id="header" className="reveal">
      <div className="container">
        <nav>
          <img src={`${process.env.PUBLIC_URL}/Images/logo.png`} className="logo" alt="logo" />
          <ul id="sidemenu" style={{ right: menuOpen ? '0' : '' }}>
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#contact">Connect  </a></li>
            <i className="fa-solid fa-circle-xmark" onClick={() => setMenuOpen(false)}></i>
          </ul>
          <i className="fa-solid fa-bars" onClick={() => setMenuOpen(true)}></i>
        </nav>

        <div className="header-text">
          <h1>
            <span className="hero-line hero-2">
              {words2.map((w, i) => (
                <span className="hero-word" style={{ '--d': `${i * 0.07 + 0.1}s` }} key={`w2-${i}`}>{w}</span>
              ))}
            </span>
            <br />
            <span className="hero-line hero-3">
              {words3.map((w, i) => (
                <span className="hero-word" style={{ '--d': `${i * 0.07 + 0.2}s` }} key={`w3-${i}`}>{w}</span>
              ))}
            </span>
          </h1>
          <p className="hero-line hero-1" aria-live="polite">
            <span className="role-typewriter">
              <span className="tw-text">{display}</span>
              <span className="tw-caret" />
            </span>
          </p>
          <p className="role-fallback">Budding Dev · DevFlux · Freelancer · Programmer · Engineer · Hustler</p>
          <p className="role-quote">“Debugging latent layers while dribbling through cognitive clutter.”</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
