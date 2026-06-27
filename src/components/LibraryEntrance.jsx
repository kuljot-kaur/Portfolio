import React, { useState } from 'react';
import './LibraryEntrance.css';

export default function LibraryEntrance({ onEnter }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleBookClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onEnter();
    }, 1200);
  };

  return (
    <div className={`library-entrance-wrap ${isOpening ? 'opening' : ''}`}>
      <div className="le-wall"></div>

      {/* LANTERN */}
      <div className="le-lantern">
        <div className="le-lantern-chain"></div>
        <div className="le-lantern-body">
          <div className="le-lantern-glow"></div>
        </div>
      </div>

      {/* SPARKLES around featured book area */}
      <div className="le-sp" style={{ top: '155px', left: '72%', fontSize: '16px' }}>✦</div>
      <div className="le-sp" style={{ top: '138px', left: '74%', fontSize: '10px', animationDelay: '0.5s' }}>✦</div>
      <div className="le-sp" style={{ top: '165px', left: '78%', fontSize: '12px', animationDelay: '1s' }}>✦</div>
      <div className="le-sp" style={{ top: '390px', left: '44%', fontSize: '10px', animationDelay: '0.8s' }}>✦</div>
      <div className="le-sp" style={{ top: '400px', left: '54%', fontSize: '8px', animationDelay: '1.4s' }}>✦</div>

      {/* WELCOME TEXT */}
      <div className="le-welcome">
        <div className="le-w-small">welcome to my</div>
        <div className="le-w-name">
          <span className="le-wl" style={{ background: 'var(--caput)', color: 'var(--tan)' }}>L</span>
          <span className="le-wl" style={{ background: 'var(--space)', color: 'var(--cream)' }}>I</span>
          <span className="le-wl" style={{ background: 'var(--tan)', color: 'var(--space)' }}>B</span>
          <span className="le-wl" style={{ background: 'var(--coffee)', color: 'var(--tan)' }}>R</span>
          <span className="le-wl" style={{ background: 'var(--slate)', color: 'var(--cream)' }}>A</span>
          <span className="le-wl" style={{ background: 'var(--caput)', color: 'var(--tan)' }}>R</span>
          <span className="le-wl" style={{ background: 'var(--space)', color: 'var(--cream)' }}>Y</span>
        </div>
      </div>

      {/* STICKY NOTE top right */}
      <div className="le-sticky" style={{ top: '80px', right: '240px', background: '#d5b893', transform: 'rotate(2deg)', width: '130px' }}>
        <div className="le-pin"></div>
        Warning:<br />highly caffeinated<br />code inside &rarr;
      </div>

      {/* LIBRARY */}
      <div className="le-library">
        <div className="le-shelves">

          {/* ROW 1 - Top Shelf */}
          <div className="le-row">
            <div className="le-books" style={{ gap: '4px', padding: '0 14px', alignItems: 'flex-end', opacity: 0.8 }}>
              <div className="le-b le-bc2 le-dimmed-heavy" style={{ width: '30px', height: '65%' }}></div>
              <div className="le-b le-bc4 le-dimmed-heavy" style={{ width: '45px', height: '80%' }}></div>
              <div className="le-b le-bc1 le-dimmed-heavy" style={{ width: '25px', height: '60%' }}></div>
              <div className="le-b le-bc3 le-dimmed-heavy" style={{ width: '55px', height: '85%' }}></div>
              <div className="le-b le-bc5 le-dimmed-heavy" style={{ width: '20px', height: '55%' }}></div>
              <div className="le-b le-bc6 le-dimmed-heavy" style={{ width: '40px', height: '70%' }}></div>
              <div className="le-b le-bc2 le-dimmed-heavy" style={{ width: '50px', height: '75%' }}></div>
              <div className="le-b le-bc4 le-dimmed-heavy" style={{ width: '30px', height: '80%' }}></div>
              <div className="le-b le-bc1 le-dimmed-heavy" style={{ width: '35px', height: '65%' }}></div>
              <div className="le-b le-bc3 le-dimmed-heavy" style={{ width: '60px', height: '85%' }}></div>
              <div className="le-b le-bc5 le-dimmed-heavy" style={{ width: '25px', height: '70%' }}></div>
              <div className="le-b le-bc6 le-dimmed-heavy" style={{ width: '45px', height: '75%' }}></div>
              <div className="le-b le-bc2 le-dimmed-heavy" style={{ width: '35px', height: '60%' }}></div>
              <div className="le-b le-bc4 le-dimmed-heavy" style={{ width: '50px', height: '80%' }}></div>
              <div className="le-b le-bc1 le-dimmed-heavy" style={{ width: '40px', height: '85%' }}></div>
              <div className="le-b le-bc3 le-dimmed-heavy" style={{ width: '20px', height: '50%' }}></div>
              <div className="le-b le-bc5 le-dimmed-heavy" style={{ width: '30px', height: '70%' }}></div>
              <div className="le-b le-bc6 le-dimmed-heavy" style={{ width: '45px', height: '75%' }}></div>
              <div className="le-b le-bc1 le-dimmed-heavy" style={{ width: '50px', height: '80%' }}></div>
              <div className="le-b le-bc4 le-dimmed-heavy" style={{ width: '20px', height: '55%' }}></div>
              <div className="le-b le-bc2 le-dimmed-heavy" style={{ width: '40px', height: '70%' }}></div>
            </div>
            {/* Plant Cluster on top shelf right */}
            <div style={{ position: 'absolute', bottom: '22px', right: '60px', width: '160px', height: '140px', zIndex: 4, filter: 'drop-shadow(2px 5px 6px rgba(0,0,0,0.6)) brightness(0.6)' }}>
              {/* Plant 1: Tall Snake Plant */}
              <svg width="45" height="120" viewBox="0 0 40 110" style={{ position: 'absolute', bottom: '0', left: '0' }}>
                <path d="M10,110 L30,110 L35,80 L5,80 Z" fill="#4a3020" />
                <rect x="0" y="70" width="40" height="10" rx="2" fill="#2d1a10" />
                <path d="M20,70 Q5,40 15,0 Q25,30 20,70" fill="#2d4a22" />
                <path d="M20,70 Q30,30 35,10 Q25,40 20,70" fill="#3a5a2a" />
                <path d="M20,70 Q5,50 0,20 Q15,50 20,70" fill="#4a6a3a" />
              </svg>

              {/* Plant 2: Round bushy plant */}
              <svg width="65" height="85" viewBox="0 0 60 70" style={{ position: 'absolute', bottom: '0', left: '35px' }}>
                <path d="M15,70 L45,70 L50,45 L10,45 Z" fill="#8a9a9a" />
                <circle cx="30" cy="30" r="25" fill="#1d3a12" />
                <circle cx="20" cy="20" r="15" fill="#2d4a22" />
                <circle cx="45" cy="25" r="18" fill="#3a5a2a" />
                <circle cx="35" cy="15" r="12" fill="#4a6a3a" />
              </svg>

              {/* Plant 3: Small Cactus */}
              <svg width="35" height="55" viewBox="0 0 30 50" style={{ position: 'absolute', bottom: '0', left: '85px' }}>
                <path d="M5,50 L25,50 L28,35 L2,35 Z" fill="#d5b893" />
                <rect x="10" y="10" width="10" height="25" rx="5" fill="#3a5a2a" />
                <rect x="5" y="18" width="6" height="12" rx="3" fill="#4a6a3a" />
                <rect x="19" y="15" width="6" height="10" rx="3" fill="#2d4a22" />
              </svg>

              {/* Plant 4: Trailing Ivy hanging down */}
              <svg width="55" height="90" viewBox="0 0 50 100" style={{ position: 'absolute', bottom: '-35px', left: '105px' }}>
                <path d="M15,60 L35,60 L40,40 L10,40 Z" fill="#8a6040" />
                <circle cx="25" cy="30" r="18" fill="#2d4a22" />
                <circle cx="15" cy="25" r="12" fill="#3a5a2a" />
                <circle cx="35" cy="28" r="14" fill="#1d3a12" />
                <path d="M20,40 Q10,70 15,95" fill="none" stroke="#2d4a22" strokeWidth="2" />
                <path d="M30,40 Q45,60 30,85" fill="none" stroke="#3a5a2a" strokeWidth="2" />
                <path d="M25,40 Q25,80 35,90" fill="none" stroke="#1d3a12" strokeWidth="2" />
                <circle cx="15" cy="65" r="4" fill="#3a5a2a" />
                <circle cx="12" cy="80" r="3" fill="#4a6a3a" />
                <circle cx="17" cy="92" r="4" fill="#2d4a22" />
                <circle cx="38" cy="55" r="5" fill="#1d3a12" />
                <circle cx="32" cy="75" r="4" fill="#3a5a2a" />
                <circle cx="29" cy="85" r="3" fill="#2d4a22" />
                <circle cx="34" cy="95" r="4" fill="#4a6a3a" />
              </svg>
            </div>
            <div className="le-plank"></div>
          </div>

          {/* ROW 2 - Main Shelf (Filled with books) */}
          <div className="le-row">
            <div className="le-books" style={{ gap: '4px', padding: '0 14px' }}>
              {/* Added books to fill left */}
              <div className="le-b le-bc4 le-dimmed" style={{ width: '22px', height: '62%' }}></div>
              <div className="le-b le-bc7 le-dimmed" style={{ width: '18px', height: '58%' }}></div>
              <div className="le-b le-bc1 le-dimmed" style={{ width: '48px', height: '78%' }}><div className="le-bt">MEMOIR</div></div>
              <div className="le-b le-bc3 le-dimmed" style={{ width: '20px', height: '65%' }}></div>
              <div className="le-b le-bc5 le-dimmed" style={{ width: '44px', height: '75%' }}><div className="le-bt">IDEAS</div></div>
              <div className="le-b le-bc2 le-dimmed" style={{ width: '22px', height: '68%' }}></div>
              <div className="le-b le-bc6 le-dimmed" style={{ width: '20px', height: '60%' }}></div>
              <div className="le-b le-bc1 le-dimmed" style={{ width: '50px', height: '80%' }}><div className="le-bt">TALES</div></div>
              <div className="le-b le-bc4 le-dimmed" style={{ width: '18px', height: '55%' }}></div>
              <div className="le-b le-bc3 le-dimmed" style={{ width: '24px', height: '70%' }}></div>

              <div className="le-b le-bc6 le-dimmed" style={{ width: '22px', height: '62%' }}></div>
              <div className="le-b le-bc2 le-dimmed" style={{ width: '24px', height: '70%' }}><div className="le-bt">I</div></div>
              <div className="le-b le-bc1 le-dimmed" style={{ width: '48px', height: '78%' }}><div className="le-bt">DESIGN</div><div className="le-bs">notes</div></div>
              <div className="le-b le-bc3 le-dimmed" style={{ width: '20px', height: '65%' }}></div>
              <div className="le-b le-bc4 le-dimmed" style={{ width: '54px', height: '82%' }}><div className="le-bt">AI EXPER.</div><div className="le-bs">ideas</div></div>
              <div className="le-b le-bc6 le-dimmed" style={{ width: '18px', height: '55%' }}></div>
              <div className="le-b le-bc5 le-dimmed" style={{ width: '44px', height: '75%' }}><div className="le-bt">RANDOM</div><div className="le-bs">3am</div></div>
              <div className="le-b le-bc2 le-dimmed" style={{ width: '52px', height: '80%' }}><div className="le-bt">CODE</div><div className="le-bs">snippets</div><div className="le-bi">&lt;/&gt;</div></div>
              <div className="le-b le-bc7 le-dimmed" style={{ width: '16px', height: '52%' }}></div>

              {/* FEATURED BOOK (Front Cover) */}
              <div className={`le-featured ${isOpening ? 'pull-out' : ''}`} style={{ width: '135px', height: '92%' }} onClick={handleBookClick}>
                <div className="le-featured-front">
                  <div className="le-f-corner le-f-tr"></div>
                  <div className="le-f-corner le-f-br"></div>

                  <div className="le-f-title-tiles">
                    <div className="le-tiles-row">
                      <span className="le-tile" style={{ background: '#e8e0d5', color: '#8a2a2e' }}>K</span>
                      <span className="le-tile" style={{ background: '#2e4060', color: '#fff' }}>U</span>
                      <span className="le-tile" style={{ background: '#d5b893', color: '#182535' }}>L</span>
                      <span className="le-tile" style={{ background: '#4a3020', color: '#fff' }}>J</span>
                      <span className="le-tile" style={{ background: '#2e4060', color: '#fff' }}>O</span>
                      <span className="le-tile" style={{ background: '#8a6040', color: '#fff' }}>T</span>
                    </div>
                    <div className="le-tiles-row">
                      <span className="le-tile" style={{ background: '#e8e0d5', color: '#8a2a2e' }}>K</span>
                      <span className="le-tile" style={{ background: '#2e4060', color: '#fff' }}>A</span>
                      <span className="le-tile" style={{ background: '#d5b893', color: '#182535' }}>U</span>
                      <span className="le-tile" style={{ background: '#2e4060', color: '#fff' }}>R</span>
                    </div>
                  </div>

                  <div className="le-f-subtitle">DIGITAL PORTFOLIO</div>
                  <div className="le-f-star">✱</div>

                  <div className="le-f-bottom-area">
                    <div className="le-f-badge-new">my<br />story</div>
                    <div className="le-f-heart">♡</div>
                  </div>
                </div>
                <div className="le-f-ribbon">★</div>
              </div>

              <div className="le-b le-bc4 le-dimmed" style={{ width: '22px', height: '66%' }}></div>
              <div className="le-b le-bc1 le-dimmed" style={{ width: '50px', height: '80%' }}><div className="le-bt">JOURNEY</div><div className="le-bs">origins</div><div className="le-bi">⛰</div></div>
              <div className="le-b le-bc3 le-dimmed" style={{ width: '20px', height: '60%' }}></div>
              <div className="le-b le-bc2 le-dimmed" style={{ width: '52px', height: '76%' }}><div className="le-bt">LESSONS</div><div className="le-bs">learned</div><div className="le-bi">✦</div></div>
              <div className="le-b le-bc6 le-dimmed" style={{ width: '18px', height: '58%' }}></div>
              <div className="le-b le-bc5 le-dimmed" style={{ width: '48px', height: '74%' }}><div className="le-bt">DREAMS</div><div className="le-bs">plans</div><div className="le-bi">✱</div></div>
              <div className="le-b le-bc1 le-dimmed" style={{ width: '20px', height: '64%' }}></div>
              <div className="le-b le-bc7 le-dimmed" style={{ width: '16px', height: '52%' }}></div>
              <div className="le-b le-bc4 le-dimmed" style={{ width: '48px', height: '76%' }}><div className="le-bt">NOTES</div></div>
              <div className="le-b le-bc6 le-dimmed" style={{ width: '18px', height: '58%' }}></div>

              {/* Added books to fill right */}
              <div className="le-b le-bc2 le-dimmed" style={{ width: '24px', height: '65%' }}></div>
              <div className="le-b le-bc5 le-dimmed" style={{ width: '50px', height: '82%' }}><div className="le-bt">MUSIC</div></div>
              <div className="le-b le-bc1 le-dimmed" style={{ width: '22px', height: '60%' }}></div>
              <div className="le-b le-bc3 le-dimmed" style={{ width: '44px', height: '78%' }}><div className="le-bt">DIARY</div></div>
              <div className="le-b le-bc6 le-dimmed" style={{ width: '18px', height: '54%' }}></div>
              <div className="le-b le-bc2 le-dimmed" style={{ width: '52px', height: '75%' }}><div className="le-bt">QUESTS</div></div>
              <div className="le-b le-bc7 le-dimmed" style={{ width: '20px', height: '62%' }}></div>
              <div className="le-b le-bc4 le-dimmed" style={{ width: '48px', height: '80%' }}><div className="le-bt">ETC</div></div>
              <div className="le-b le-bc1 le-dimmed" style={{ width: '24px', height: '68%' }}></div>
              <div className="le-b le-bc5 le-dimmed" style={{ width: '16px', height: '50%' }}></div>
            </div>
            <div className="le-plank"></div>
          </div>

          {/* ROW 3 — Bottom Shelf with sticky notes and polaroids */}
          <div className="le-row" style={{ flex: 0.55 }}>
            <div className="le-books" style={{ gap: '4px', padding: '0 14px', alignItems: 'flex-end' }}>
              {/* stacked horizontal pile */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', alignSelf: 'flex-end', opacity: 0.2 }}>
                <div style={{ width: '90px', height: '16px', background: 'var(--caput)', borderRadius: '2px', transform: 'rotate(-0.5deg)', boxShadow: '1px 2px 4px rgba(0,0,0,0.5)' }}></div>
                <div style={{ width: '90px', height: '16px', background: 'var(--space)', borderRadius: '2px', transform: 'rotate(0.5deg)', boxShadow: '1px 2px 4px rgba(0,0,0,0.5)' }}></div>
                <div style={{ width: '90px', height: '16px', background: 'var(--coffee)', borderRadius: '2px', boxShadow: '1px 2px 4px rgba(0,0,0,0.5)' }}></div>
              </div>
              <div className="le-b le-bc3 le-dimmed-heavy" style={{ width: '20px', height: '85%' }}></div>
              <div className="le-b le-bc2 le-dimmed-heavy" style={{ width: '48px', height: '90%' }}><div className="le-bt">CHAPTER<br />ONE</div></div>
              <div className="le-b le-bc6 le-dimmed-heavy" style={{ width: '18px', height: '80%' }}></div>
              <div className="le-b le-bc5 le-dimmed-heavy" style={{ width: '16px', height: '75%' }}></div>

              <div className="le-b le-bc1 le-dimmed-heavy" style={{ width: '50px', height: '78%' }}><div className="le-bt">TRUE<br />CRIME</div><div className="le-bs">files</div><div className="le-bi">🔍</div></div>
              <div className="le-b le-bc2 le-dimmed-heavy" style={{ width: '20px', height: '62%' }}></div>

              {/* Filler dark books */}
              <div className="le-b le-bc4 le-dimmed-heavy" style={{ width: '35px', height: '80%' }}></div>
              <div className="le-b le-bc1 le-dimmed-heavy" style={{ width: '25px', height: '60%' }}></div>
              <div className="le-b le-bc3 le-dimmed-heavy" style={{ width: '55px', height: '85%' }}></div>
              <div className="le-b le-bc5 le-dimmed-heavy" style={{ width: '30px', height: '55%' }}></div>
              <div className="le-b le-bc6 le-dimmed-heavy" style={{ width: '40px', height: '70%' }}></div>
              <div className="le-b le-bc2 le-dimmed-heavy" style={{ width: '50px', height: '75%' }}></div>
              <div className="le-b le-bc4 le-dimmed-heavy" style={{ width: '30px', height: '80%' }}></div>
              <div className="le-b le-bc1 le-dimmed-heavy" style={{ width: '35px', height: '65%' }}></div>
              <div className="le-b le-bc3 le-dimmed-heavy" style={{ width: '60px', height: '85%' }}></div>
              <div className="le-b le-bc5 le-dimmed-heavy" style={{ width: '25px', height: '70%' }}></div>
              <div className="le-b le-bc6 le-dimmed-heavy" style={{ width: '45px', height: '75%' }}></div>
              <div className="le-b le-bc2 le-dimmed-heavy" style={{ width: '35px', height: '60%' }}></div>
              <div className="le-b le-bc4 le-dimmed-heavy" style={{ width: '50px', height: '80%' }}></div>
              <div className="le-b le-bc1 le-dimmed-heavy" style={{ width: '40px', height: '85%' }}></div>
              <div className="le-b le-bc3 le-dimmed-heavy" style={{ width: '20px', height: '50%' }}></div>
              <div className="le-b le-bc5 le-dimmed-heavy" style={{ width: '30px', height: '70%' }}></div>
              <div className="le-b le-bc6 le-dimmed-heavy" style={{ width: '45px', height: '75%' }}></div>
              <div className="le-b le-bc1 le-dimmed-heavy" style={{ width: '50px', height: '80%' }}></div>
              <div className="le-b le-bc4 le-dimmed-heavy" style={{ width: '20px', height: '55%' }}></div>
              <div className="le-b le-bc2 le-dimmed-heavy" style={{ width: '40px', height: '70%' }}></div>
              <div className="le-b le-bc1 le-dimmed-heavy" style={{ width: '25px', height: '60%' }}></div>
              <div className="le-b le-bc3 le-dimmed-heavy" style={{ width: '55px', height: '85%' }}></div>
              <div className="le-b le-bc5 le-dimmed-heavy" style={{ width: '30px', height: '55%' }}></div>
              <div className="le-b le-bc6 le-dimmed-heavy" style={{ width: '40px', height: '70%' }}></div>
              <div className="le-b le-bc2 le-dimmed-heavy" style={{ width: '50px', height: '75%' }}></div>

              <div className="le-b le-bc1 le-dimmed-heavy" style={{ width: '44px', height: '88%' }}><div className="le-bt">VOL. II</div></div>
              <div className="le-b le-bc4 le-dimmed-heavy" style={{ width: '20px', height: '80%' }}></div>
              <div className="le-b le-bc7 le-dimmed-heavy" style={{ width: '16px', height: '72%' }}></div>
              {/* stacked pile right */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', alignSelf: 'flex-end', opacity: 0.2 }}>
                <div style={{ width: '75px', height: '16px', background: 'var(--slate)', borderRadius: '2px', transform: 'rotate(0.5deg)', boxShadow: '1px 2px 4px rgba(0,0,0,0.5)' }}></div>
                <div style={{ width: '75px', height: '16px', background: 'var(--tan)', borderRadius: '2px', transform: 'rotate(-0.5deg)', boxShadow: '1px 2px 4px rgba(0,0,0,0.5)' }}></div>
              </div>
            </div>

            {/* STICKY NOTES AND POLAROIDS placed relative to the bottom shelf */}
            <div className="le-sticky" style={{ bottom: '100px', left: '12%', background: 'var(--tan)', transform: 'rotate(-2deg)', width: '160px', color: 'var(--space)' }}>
              <div className="le-pin" style={{ background: 'var(--coffee)' }}></div>
              my commits<br />are cleaner than<br />my room. ✦
            </div>

            <div className="le-sticky" style={{ bottom: '20px', left: '25%', background: '#d5b893', transform: 'rotate(3deg)', width: '160px', zIndex: 10 }}>
              <div style={{ position: 'absolute', top: '-10px', left: '-10px', width: '40px', height: '15px', background: 'rgba(255,255,255,0.4)', transform: 'rotate(-30deg)', backdropFilter: 'blur(2px)' }}></div>
              <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '40px', height: '15px', background: 'rgba(255,255,255,0.4)', transform: 'rotate(-40deg)', backdropFilter: 'blur(2px)' }}></div>
              git checkout<br />this book &rarr;
            </div>

            <div className="le-click-hint le-torn-paper" style={{ bottom: '30px', left: '45%', transform: 'translateX(-50%) rotate(-2deg)' }} onClick={handleBookClick}>
              <span style={{ fontSize: '20px' }}>click on my book<br />to open</span>
              {/* Hand doodle SVG */}
              <svg width="40" height="40" viewBox="0 0 100 100" style={{ transform: 'rotate(-20deg)', filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.3))' }}>
                <path d="M30,50 L30,20 Q30,10 40,10 Q50,10 50,20 L50,45 Q50,35 60,35 Q65,35 65,45 Q65,35 75,35 Q80,35 80,45 Q80,40 90,40 Q95,40 95,50 L95,70 Q95,90 70,90 L40,90 Q20,90 20,70 L20,60 Z" fill="none" stroke="#222" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M50,45 L50,60 M65,45 L65,60 M80,45 L80,60" stroke="#222" strokeWidth="5" strokeLinecap="round" />
              </svg>
              {/* Ink Splatters */}
              <div style={{ position: 'absolute', right: '20px', top: '15px', color: '#8a2a2e', fontSize: '16px', opacity: 0.8 }}>✦</div>
              <div style={{ position: 'absolute', right: '45px', bottom: '15px', color: '#8a2a2e', fontSize: '10px', opacity: 0.6 }}>✦</div>
            </div>

            <div className="le-polaroid" style={{ bottom: '40px', right: '10%', transform: 'rotate(4deg)', zIndex: 10 }}>
              <div className="le-p-img" style={{ background: '#e0dfd5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                  {/* Table */}
                  <line x1="10" y1="90" x2="90" y2="90" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Laptop */}
                  <rect x="45" y="65" width="30" height="20" rx="2" fill="none" stroke="#333" strokeWidth="2.5" />
                  <line x1="40" y1="85" x2="80" y2="85" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Girl Body */}
                  <path d="M20,90 Q20,60 35,60 Q50,60 50,90" fill="none" stroke="#333" strokeWidth="2.5" />
                  {/* Head */}
                  <circle cx="35" cy="45" r="12" fill="none" stroke="#333" strokeWidth="2.5" />
                  {/* Hair bun */}
                  <circle cx="22" cy="40" r="7" fill="none" stroke="#333" strokeWidth="2.5" />
                  <path d="M25,35 Q35,28 44,35" fill="none" stroke="#333" strokeWidth="2.5" />
                  {/* Glasses */}
                  <circle cx="38" cy="45" r="4" fill="none" stroke="#333" strokeWidth="2" />
                  <circle cx="48" cy="45" r="4" fill="none" stroke="#333" strokeWidth="2" />
                  <line x1="42" y1="45" x2="44" y2="45" stroke="#333" strokeWidth="2" />
                  {/* Arm typing */}
                  <path d="M35,65 Q45,75 50,75" fill="none" stroke="#333" strokeWidth="2.5" />
                  {/* Little plant on right */}
                  <path d="M85,90 L85,75 L95,75 L95,90 Z" fill="none" stroke="#333" strokeWidth="2" />
                  <path d="M90,75 Q85,65 90,55 Q95,65 90,75" fill="none" stroke="#333" strokeWidth="2" />
                  {/* Phone */}
                  <rect x="65" y="86" width="12" height="4" rx="1" fill="none" stroke="#333" strokeWidth="2" />
                </svg>
              </div>
              <div className="le-p-cap" style={{ fontFamily: '"Caveat", cursive', fontSize: '16px' }}>tech &lt;3</div>
              {/* Paperclip */}
              <div style={{ position: 'absolute', top: '-10px', right: '25px', width: '12px', height: '30px', border: '3px solid #ccc', borderRadius: '6px', zIndex: 12, boxShadow: '1px 2px 3px rgba(0,0,0,0.4)' }}></div>
              {/* Tape */}
              <div style={{ position: 'absolute', top: '-5px', left: '20px', width: '40px', height: '18px', background: 'rgba(255,255,255,0.4)', transform: 'rotate(10deg)', backdropFilter: 'blur(2px)', zIndex: 12 }}></div>
            </div>

            <div className="le-plank"></div>
          </div>

        </div>
      </div>

      {/* FLOOR DOODLES */}
      <div className="le-fd" style={{ left: '130px' }}>&hearts;</div>
      <div className="le-fd" style={{ left: '290px' }}>&lt;/&gt;</div>
      <div className="le-fd" style={{ left: '50%', transform: 'translateX(-50%)' }}>~ ~ ~</div>
      <div className="le-fd" style={{ right: '280px' }}>✱</div>
      <div className="le-fd" style={{ right: '120px' }}>☆</div>
    </div>
  );
}
