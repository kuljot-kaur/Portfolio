import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import LibraryEntrance from './LibraryEntrance';

const FullCoverSpread = ({ side }) => {
  const style = {
    position: 'absolute',
    top: 0,
    width: '200%',
    height: '100%',
    left: side === 'left' ? '0' : '-100%',
    background: 'var(--tan)',
    overflow: 'hidden'
  };

  return (
    <div className="v2-cover" style={style}>
      <div className="sky">
        <div className="cloud c1"></div><div className="cloud c2"></div>
        <div className="cloud c3"></div><div className="cloud c4"></div>
      </div>
      <div className="grass"></div>

      <div className="sticker" style={{ top: '7%', right: '2%', fontSize: 26, transform: 'rotate(10deg)', color: 'var(--caput)' }}>✦</div>
      <div className="sticker" style={{ bottom: '4%', left: '2%', fontSize: 24, transform: 'rotate(20deg)', color: 'var(--space)' }}>✳</div>
      <div className="sticker" style={{ bottom: '5%', right: '2%', fontSize: 24, transform: 'rotate(-10deg)', color: 'var(--caput)' }}>✳</div>

      <svg className="doodle" style={{ top: '6%', left: '18%' }} width="80" height="30" viewBox="0 0 80 30">
        <path d="M5 20 Q20 5 35 20 Q50 35 65 20 Q72 12 78 15" fill="none" stroke="#632024" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <svg className="doodle" style={{ bottom: '2%', right: '10%' }} width="36" height="36" viewBox="0 0 36 36">
        <path d="M18 2 L20 14 L32 14 L22 22 L26 34 L18 26 L10 34 L14 22 L4 14 L16 14 Z" fill="none" stroke="#25344F" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <svg className="doodle" style={{ top: '16%', left: '8%', transform: 'rotate(-10deg)' }} width="24" height="38" viewBox="0 0 24 38">
        <path d="M16 2 L4 20 L12 20 L8 36 L22 16 L14 16 Z" fill="var(--tan)" stroke="var(--space)" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <svg className="doodle" style={{ bottom: '2%', right: '25%', transform: 'rotate(15deg)' }} width="50" height="30" viewBox="0 0 50 30">
        <path d="M5 20 Q25 5 40 15" fill="none" stroke="#632024" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M34 10 L42 16 L34 20" fill="none" stroke="#632024" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg className="doodle" style={{ bottom: '2%', left: '12%' }} width="28" height="26" viewBox="0 0 28 26">
        <path d="M14 23 C14 23 2 14 2 8 C2 4 5 2 8 2 C10.5 2 12.5 3.5 14 5.5 C15.5 3.5 17.5 2 20 2 C23 2 26 4 26 8 C26 14 14 23 14 23Z" fill="none" stroke="#617891" strokeWidth="2.2" strokeLinejoin="round" />
      </svg>
      <svg className="doodle" style={{ top: '20%', right: '28%' }} width="32" height="28" viewBox="0 0 32 28">
        <path d="M4 16 Q16 4 28 16" fill="none" stroke="#25344F" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M8 20 Q16 12 24 20" fill="none" stroke="#25344F" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="16" cy="24" r="2.5" fill="#25344F" />
      </svg>
      <svg className="doodle" style={{ bottom: '2%', left: '22%' }} width="44" height="32" viewBox="0 0 44 32">
        <path d="M14 4 L4 16 L14 28" fill="none" stroke="#6F4D38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 4 L40 16 L30 28" fill="none" stroke="#6F4D38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="card">
        <div className="my-digital">My Digital</div>
        <div className="cutout-row">
          <span className="cl s1 tilt1">P</span>
          <span className="cl s2 tilt2">O</span>
          <span className="cl s3 tilt3">R</span>
          <span className="cl s4 tilt4">T</span>
          <span className="cl s5 tilt5">F</span>
          <span className="cl s6 tilt6">O</span>
          <span className="cl s1 tilt7">L</span>
          <span className="cl s2 tilt8">I</span>
          <span className="cl s3 tilt9">O</span>
        </div>

        <div className="card-bottom">
          <div className="name-tag" style={{ flexShrink: 0 }}>
            <div className="name-tag-hello">hello, i'm</div>
            <div className="name-tag-name">Kuljot Kaur</div>
            <div className="name-tag-role">code, curiosity & chaos ✦</div>
          </div>

          <div className="widgets">
            <div className="widget w-terminal">
              <span className="prompt">~/kuljot $</span> <span style={{ color: '#f5d90a' }}>whoami</span><br />
              <span style={{ color: '#fff' }}>engineering ideas into reality</span>
            </div>
          </div>

          <div className="avatar-wrap" style={{ flexShrink: 0 }}>
            <div className="avatar-circle" style={{ padding: 0 }}>
              <img src="/avatar.png" alt="Kuljot avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        <svg style={{ position: 'absolute', top: 10, right: 14, zIndex: 3 }} width="22" height="22" viewBox="0 0 22 22">
          <path d="M11 2 L12.5 8.5 L19 8.5 L13.5 12.5 L15.5 19 L11 15 L6.5 19 L8.5 12.5 L3 8.5 L9.5 8.5 Z" fill="none" stroke="#617891" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
        <svg style={{ position: 'absolute', bottom: 12, left: 170, zIndex: 3 }} width="20" height="20" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="8" fill="none" stroke="#632024" strokeWidth="1.8" />
          <path d="M10 6 L10 14 M6 10 L14 10" stroke="#632024" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default function Book() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const audioRef = useRef(null);

  const handleEnter = () => {
    setHasEntered(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.log(e));
    }
  };



  const toggleMute = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };


  const sheets = [
    // Spread 0: Cover
    {
      id: 'cover',
      frontBg: 'var(--tan)',
      frontColor: 'var(--space)',
      backBg: 'var(--space)',
      backColor: 'var(--v2-cream)',
      front: (
        <div style={{ width: '100%', height: '100%', position: 'relative' }} onClick={() => nextPage()}>
          <FullCoverSpread side="right" />
        </div>
      ),
      back: (
        <div className="v2-about-left" onClick={() => prevPage()}>
          <div className="left-title">About Me</div>
          <div className="the-author" style={{ fontFamily: '"Playfair Display", serif', fontSize: '24px', fontWeight: '900', color: 'var(--tan)', opacity: 1, marginTop: '5px' }}>The Author ✦</div>

          <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            <div className="polaroid" style={{ position: 'relative', margin: 0, width: '190px', flexShrink: 0 }}>
              <div className="clip" style={{ position: 'absolute', top: '-15px', left: '70%', transform: 'translateX(-50%)', zIndex: 10 }}>
                <svg width="24" height="46" viewBox="0 0 28 52" style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.4))' }}>
                  <path d="M14 4 C8 4 4 8 4 14 L4 38 C4 44 8 48 14 48 C20 48 24 44 24 38 L24 16 C24 12 21 9 17 9 C13 9 11 12 11 16 L11 36 C11 39 13 41 14 41 C15 41 17 39 17 36 L17 16" fill="none" stroke="#c0c0c0" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="pol-img" style={{ height: '200px' }}>
                <img src="/kuljot.jpg" alt="Kuljot Kaur" style={{ filter: 'none' }} onError={(e) => { e.target.parentElement.style.background = '#617891'; e.target.style.display = 'none'; }} />
              </div>
              <div className="pol-cap" style={{ fontSize: '20px' }}>Kuljot Kaur</div>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div className="lb-section">
                <div className="lb-title" style={{ fontSize: '12px' }}>💻 Skills</div>
                <div className="skill-row">
                  <span className="sk c1" style={{ fontSize: '12px', padding: '4px 10px' }}>Python</span>
                  <span className="sk c2" style={{ fontSize: '12px', padding: '4px 10px' }}>TypeScript</span>
                  <span className="sk c3" style={{ fontSize: '12px', padding: '4px 10px' }}>JavaScript</span>
                  <span className="sk c1" style={{ fontSize: '12px', padding: '4px 10px' }}>Java</span>
                  <span className="sk c2" style={{ fontSize: '12px', padding: '4px 10px' }}>React</span>
                  <span className="sk c3" style={{ fontSize: '12px', padding: '4px 10px' }}>Next.js</span>
                  <span className="sk c1" style={{ fontSize: '12px', padding: '4px 10px' }}>FastAPI</span>
                  <span className="sk c2" style={{ fontSize: '12px', padding: '4px 10px' }}>PostgreSQL</span>
                  <span className="sk c3" style={{ fontSize: '12px', padding: '4px 10px' }}>Supabase</span>
                  <span className="sk c1" style={{ fontSize: '12px', padding: '4px 10px' }}>MongoDB</span>
                  <span className="sk c2" style={{ fontSize: '12px', padding: '4px 10px' }}>Redis</span>
                  <span className="sk c3" style={{ fontSize: '12px', padding: '4px 10px' }}>Docker</span>
                  <span className="sk c1" style={{ fontSize: '12px', padding: '4px 10px' }}>Git</span>
                  <span className="sk c2" style={{ fontSize: '12px', padding: '4px 10px' }}>GitHub</span>
                  <span className="sk c3" style={{ fontSize: '12px', padding: '4px 10px' }}>Tailwind CSS</span>
                  <span className="sk c1" style={{ fontSize: '12px', padding: '4px 10px' }}>AI Agents</span>
                  <span className="sk c2" style={{ fontSize: '12px', padding: '4px 10px' }}>RAG</span>
                  <span className="sk c3" style={{ fontSize: '12px', padding: '4px 10px' }}>REST APIs</span>
                  <span className="sk c1" style={{ fontSize: '12px', padding: '4px 10px' }}>GitHub Actions</span>
                  <span className="sk c2" style={{ fontSize: '12px', padding: '4px 10px' }}>Vercel</span>
                  <span className="sk c3" style={{ fontSize: '12px', padding: '4px 10px' }}>Figma</span>
                </div>
              </div>
              <div className="lb-section">
                <div className="lb-title" style={{ fontSize: '12px' }}>✦ Interests</div>
                <div className="interest-row">
                  <span className="int-chip" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '12px', padding: '4px 10px', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}>AI & LLMs </span>
                  <span className="int-chip" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '12px', padding: '4px 10px', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}>Full-Stack Development </span>
                  <span className="int-chip" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '12px', padding: '4px 10px', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}>System Design </span>
                  <span className="int-chip" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '12px', padding: '4px 10px', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}>Open Source </span>
                  <span className="int-chip" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '12px', padding: '4px 10px', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}>True Crime </span>
                  <span className="int-chip" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '12px', padding: '4px 10px', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}>Dance </span>
                  <span className="int-chip" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '12px', padding: '4px 10px', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}>Travel </span>
                  <span className="int-chip" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '12px', padding: '4px 10px', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}>Music </span>
                </div>
              </div>
            </div>
          </div>

          <div className="left-bottom" style={{ marginTop: '15px' }}>
            <div className="lb-section">
              <div className="lb-title" style={{ fontSize: '14px' }}>🎓 Education</div>
              <div className="edu-entry" style={{ marginBottom: '8px' }}>
                <div className="edu-name" style={{ fontSize: '15px' }}>SRM Institute of Science and Technology, Chennai</div>
                <div className="edu-sub" style={{ fontSize: '13px', fontWeight: 'bold' }}>B.Tech in Computer Science and Engineering · 2024–Present</div>
              </div>
              <div className="edu-entry">
                <div className="edu-name" style={{ fontSize: '15px' }}>Sunbeam English School, Varanasi</div>
                <div className="edu-sub" style={{ fontSize: '13px', fontWeight: 'bold' }}>12th Grade PCM + CS</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Spread 1: About Me
    {
      id: 'about',
      tabName: 'ABOUT',
      tabTop: '10%',
      tabColor: 'var(--caput)',
      tabTextColor: 'var(--v2-cream)',
      frontBg: '#ffffff',
      frontColor: 'var(--space)',
      backBg: 'var(--mustard)',
      backColor: 'var(--cobalt-blue)',
      front: (
        <div className="v2-about-right" onClick={() => nextPage()}>
          <div style={{ flex: 1, overflowY: 'auto', paddingRight: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 style={{ fontFamily: 'Inter', fontWeight: 900, fontSize: '24px', color: 'var(--space)', textTransform: 'uppercase', marginBottom: '4px' }}>
              HEY! I AM KULJOT
            </h3>

            <div className="bio-text" style={{ marginBottom: 0, fontSize: '16px', lineHeight: '1.4' }}>
              I’m a Computer Science student, AI enthusiast, researcher, occasional singer and dancer, and a full-time overthinker.
            </div>
            <div className="bio-text" style={{ marginBottom: 0, fontSize: '16px', lineHeight: '1.4' }}>
              My journey into tech began with curiosity and a constant “What happens if I try this?” mindset. Sometimes it leads to exciting projects, sometimes to broken code — but either way, I learn something new.
            </div>
            <div className="bio-text" style={{ marginBottom: 0, fontSize: '16px', lineHeight: '1.4' }}>
              I’m a walking contradiction: organized enough to plan projects, yet chaotic enough to have way too many browser tabs open. I love building things, solving problems, and getting lost in understanding the “why” behind everything — whether it’s AI, software, or a random true-crime rabbit hole.
            </div>
            <div className="bio-text" style={{ marginBottom: 0, fontSize: '16px', lineHeight: '1.4' }}>
              Outside of tech, you’ll find me listening to music, singing, dancing, exploring new ideas, or overthinking everything (which, ironically, helps me solve problems). I believe the best way to learn is by building, breaking, fixing, and trying again.
            </div>
            <div className="bio-text" style={{ marginBottom: 0, fontSize: '16px', lineHeight: '1.4' }}>
              I’m endlessly curious, occasionally dramatic about debugging errors, and always excited for the next thing to create, learn, and explore.
            </div>
          </div>

          <div className="quote-note" style={{ padding: '24px 32px', margin: '20px 0 0 0' }}>
            <div className="quote-text" style={{ fontSize: '22px', lineHeight: '1.8' }}>
              Curious by nature. Builder by choice. Always learning, always creating.
            </div>
          </div>
        </div>
      ),
      back: (
        <div className="p2-left" onClick={() => prevPage()}>
          <div className="p2-page-label">page 1 of 4 · projects</div>
          <div className="p2-page-title">Projects</div>
          <div className="p2-page-sub" style={{ fontFamily: '"Playfair Display", serif', fontSize: '24px', fontWeight: '900', color: 'var(--tan)', opacity: 1, marginTop: '5px' }}>things I built ✦</div>

          <div className="p2-notes-col">
            <div className="p2-note p2-n-cream p2-tape p2-tilt-l" style={{ padding: '24px' }}>
              <div className="p2-note-header">
                <span className="p2-note-icon" style={{ fontSize: '20px' }}>📄</span>
                <div className="p2-note-title" style={{ fontSize: '16px', fontWeight: '800' }}>Complyt — AI Document Compliance</div>
              </div>
              <div className="p2-note-desc" style={{ fontSize: '15px', lineHeight: '1.5', marginTop: '10px' }}>Complyt is an AI-powered document compliance platform that automates the validation of PDFs and images against regulatory requirements. Using AI, it extracts structured information and generates compliance reports while reducing manual review effort. I built a scalable backend with FastAPI, Celery, and Redis for asynchronous processing, ensuring smooth handling of large documents. The platform also includes secure authentication, encrypted storage of sensitive information, and duplicate document detection using SHA-256 hashing. Complyt reflects my focus on building production-ready AI applications that prioritize performance, security, and real-world usability.</div>
              <div className="p2-note-tags" style={{ marginTop: '12px', gap: '8px', display: 'flex', flexWrap: 'wrap' }}>
                <span className="p2-ntag p2-c2" style={{ fontSize: '12px', padding: '4px 10px' }}>FastAPI</span>
                <span className="p2-ntag p2-c4" style={{ fontSize: '12px', padding: '4px 10px' }}>TypeScript</span>
                <span className="p2-ntag p2-c1" style={{ fontSize: '12px', padding: '4px 10px' }}>PostgreSQL</span>
                <span className="p2-ntag p2-c3" style={{ fontSize: '12px', padding: '4px 10px' }}>Docker</span>
                <span className="p2-ntag p2-c2" style={{ fontSize: '12px', padding: '4px 10px' }}>OpenAI API</span>
                <span className="p2-ntag p2-c1" style={{ fontSize: '12px', padding: '4px 10px' }}>Redis</span>
                <span className="p2-ntag p2-c4" style={{ fontSize: '12px', padding: '4px 10px' }}>Celery</span>
              </div>
              <div className="p2-note-links" style={{ marginTop: '16px' }} onClick={(e) => e.stopPropagation()}>
                <a href="https://github.com/kuljot-kaur/Complyt" target="_blank" rel="noreferrer" className="p2-nlink" style={{ fontSize: '16px', fontWeight: 'bold', color: '#a63e3e', textDecoration: 'underline' }}>GitHub ↗</a>
                <span className="p2-nlink red" style={{ border: 'none', fontSize: '11px', opacity: 0.7, cursor: 'default' }}></span>
              </div>
            </div>
          </div>
          <div className="p2-page-num">projects · i</div>
        </div>
      )
    },

    // Spread 2: Project 1 - Qualyx
    {
      id: 'project1',
      tabName: 'PROJECTS',
      tabTop: '28%',
      tabColor: 'var(--space)',
      tabTextColor: 'var(--tan)',
      frontBg: 'var(--cream)',
      frontColor: 'var(--space)',
      backBg: 'var(--cobalt-blue)',
      backColor: 'var(--cream)',
      front: (
        <div className="p2-right" onClick={() => nextPage()}>
          <div className="p2-page-label" style={{ color: 'rgba(97,120,145,0.6)', textAlign: 'right', marginBottom: '40px' }}>page 2 of 4 · projects</div>
          <div className="p2-right-notes">
            <div className="p2-note p2-n-slate p2-pin-r p2-tilt-r" style={{ padding: '24px' }}>
              <div className="p2-note-header">
                <span className="p2-note-icon" style={{ fontSize: '20px' }}>🧠</span>
                <div className="p2-note-title" style={{ fontSize: '16px', fontWeight: '800' }}>HireIQ — Hiring Intelligence Agent</div>
              </div>
              <div className="p2-note-desc" style={{ fontSize: '15px', lineHeight: '1.5', marginTop: '10px' }}>HireIQ is an AI-powered hiring assistant that helps recruiters make better decisions by analyzing historical hiring data and identifying candidate patterns. It uses semantic memory to retrieve similar profiles, generate interview briefs, and suggest role-specific questions based on previous hiring outcomes. I developed an interactive React dashboard with separate views for candidate management, AI-powered interviews, and recruitment insights. Powered by FastAPI and Supabase, the platform demonstrates how AI can streamline hiring workflows by reducing repetitive tasks and providing recruiters with actionable, context-aware recommendations.</div>
              <div className="p2-note-tags" style={{ marginTop: '12px', gap: '8px', display: 'flex', flexWrap: 'wrap' }}>
                <span className="p2-ntag p2-c1" style={{ fontSize: '12px', padding: '4px 10px' }}>React</span>
                <span className="p2-ntag p2-c4" style={{ fontSize: '12px', padding: '4px 10px' }}>FastAPI</span>
                <span className="p2-ntag p2-c2" style={{ fontSize: '12px', padding: '4px 10px' }}>Python</span>
                <span className="p2-ntag p2-c3" style={{ fontSize: '12px', padding: '4px 10px' }}>Groq API</span>
                <span className="p2-ntag p2-c1" style={{ fontSize: '12px', padding: '4px 10px' }}>Supabase</span>
              </div>
              <div className="p2-note-links" onClick={(e) => e.stopPropagation()} style={{ marginTop: '16px' }}>
                <a href="https://github.com/kuljot-kaur/HireIQ" target="_blank" rel="noreferrer" className="p2-nlink" style={{ fontSize: '16px', fontWeight: 'bold', color: '#a63e3e', textDecoration: 'underline' }}>GitHub ↗</a>
              </div>
            </div>
          </div>

          <div className="p2-page-dots">
            <div className="p2-dot on"></div>
            <div className="p2-dot on"></div>
            <div className="p2-dot"></div>
            <div className="p2-dot"></div>
          </div>
        </div>
      ),
      back: (
        <div className="p2-left" onClick={() => prevPage()}>
          <div className="p2-page-label">page 3 of 4 · projects</div>
          <div className="p2-page-title">More Projects</div>
          <div className="p2-page-sub" style={{ fontFamily: '"Playfair Display", serif', fontSize: '24px', fontWeight: '900', color: 'var(--tan)', opacity: 1, marginTop: '5px' }}>still building... ✦</div>

          <div className="p2-notes-col" style={{ marginTop: '3px' }}>
            <div className="p2-note p2-n-tan p2-tape-l p2-straight p2-has-clip" style={{ padding: '24px' }}>
              <svg className="p2-clip-icon" width="14" height="26" viewBox="0 0 28 52">
                <path d="M14 4 C8 4 4 8 4 14 L4 38 C4 44 8 48 14 48 C20 48 24 44 24 38 L24 16 C24 12 21 9 17 9 C13 9 11 12 11 16 L11 36 C11 39 13 41 14 41 C15 41 17 39 17 36 L17 16" fill="none" stroke="#999" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <div className="p2-note-header">
                <span className="p2-note-icon" style={{ fontSize: '20px' }}>🎮</span>
                <div className="p2-note-title" style={{ fontSize: '16px', fontWeight: '800' }}>QuestBoard — Real-time Collaborative Kanban</div>
              </div>
              <div className="p2-note-desc" style={{ fontSize: '15px', lineHeight: '1.5', marginTop: '10px' }}>QuestBoard is a collaborative Kanban platform that combines task management with gamification to create a more engaging productivity experience. Users can create boards, organize tasks with drag-and-drop interactions, and collaborate in real time through Firebase Firestore. To encourage consistent productivity, I implemented experience points, leveling mechanics, and audio feedback using Tone.js. The application features responsive design, secure authentication, and efficient real-time synchronization across multiple users. QuestBoard showcases my ability to build interactive, user-focused applications that balance functionality with enjoyable user experiences.</div>
              <div className="p2-note-tags" style={{ marginTop: '12px', gap: '8px', display: 'flex', flexWrap: 'wrap' }}>
                <span className="p2-ntag p2-c4" style={{ fontSize: '12px', padding: '4px 10px' }}>React</span>
                <span className="p2-ntag p2-c1" style={{ fontSize: '12px', padding: '4px 10px' }}>Firebase</span>
                <span className="p2-ntag p2-c2" style={{ fontSize: '12px', padding: '4px 10px' }}>Firestore</span>
                <span className="p2-ntag p2-c3" style={{ fontSize: '12px', padding: '4px 10px' }}>Tailwind CSS</span>
                <span className="p2-ntag p2-c1" style={{ fontSize: '12px', padding: '4px 10px' }}>Tone.js</span>
              </div>
              <div className="p2-note-links" onClick={(e) => e.stopPropagation()} style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
                <div>
                  <a href="https://kanbanapp-omega.vercel.app" target="_blank" rel="noreferrer" className="p2-nlink p2-coffee" style={{ fontSize: '16px', fontWeight: 'bold', color: '#a63e3e', textDecoration: 'underline', marginRight: '6px' }}>Live Demo ↗</a>
                  <span style={{ fontFamily: "'Caveat', cursive", fontSize: '11px', color: '#888' }}>kanbanapp-omega.vercel.app</span>
                </div>
                <div>
                  <a href="https://github.com/kuljot-kaur/QuestBoards" target="_blank" rel="noreferrer" className="p2-nlink p2-coffee" style={{ fontSize: '16px', fontWeight: 'bold', color: '#a63e3e', textDecoration: 'underline' }}>GitHub ↗</a>
                </div>
              </div>
            </div>
          </div>
          <div className="p2-page-num">projects · iii</div>
        </div>
      )
    },

    // Spread 3: Project 3 - HireIQ
    {
      id: 'project3',
      tabName: 'EXPERIENCE',
      tabJump: 4,
      tabTop: '46%',
      tabColor: 'var(--tan)',
      tabTextColor: 'var(--space)',
      frontBg: 'var(--cream)',
      frontColor: 'var(--cobalt-blue)',
      backBg: '#C4A070',
      backColor: '#1a0d06',
      front: (
        <div className="p2-right" onClick={() => nextPage()}>
          <div className="p2-page-label" style={{ color: 'rgba(97,120,145,0.6)', textAlign: 'right', marginBottom: '20px' }}>page 4 of 4 · projects</div>
          <div className="p2-right-notes">
            <div className="p2-note p2-n-light p2-pin-l p2-tilt-l" style={{ padding: '24px' }}>
              <div className="p2-note-header">
                <span className="p2-note-icon" style={{ fontSize: '20px' }}>✍️</span>
                <div className="p2-note-title" style={{ fontSize: '16px', fontWeight: '800' }}>BlogVerse — CLI-style Blogging Platform</div>
              </div>
              <div className="p2-note-desc" style={{ fontSize: '15px', lineHeight: '1.5', marginTop: '10px' }}>BlogVerse is a multi-user blogging platform featuring a unique terminal-inspired interface that allows users to perform common blogging actions through structured commands. The application supports creating, editing, deleting, and managing blog posts while maintaining real-time synchronization with Firebase Firestore. Firebase Authentication ensures secure user access, and Tailwind CSS provides a clean, responsive interface that complements the CLI aesthetic. Through BlogVerse, I explored alternative interaction patterns that make traditional CRUD applications feel more engaging while maintaining a simple and intuitive user experience.</div>
              <div className="p2-note-tags" style={{ marginTop: '12px', gap: '8px', display: 'flex', flexWrap: 'wrap' }}>
                <span className="p2-ntag p2-c1" style={{ fontSize: '12px', padding: '4px 10px' }}>React</span>
                <span className="p2-ntag p2-c3" style={{ fontSize: '12px', padding: '4px 10px' }}>Firebase</span>
                <span className="p2-ntag p2-c2" style={{ fontSize: '12px', padding: '4px 10px' }}>Firestore</span>
                <span className="p2-ntag p2-c4" style={{ fontSize: '12px', padding: '4px 10px' }}>Tailwind CSS</span>
              </div>
              <div className="p2-note-links" onClick={(e) => e.stopPropagation()} style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
                <div>
                  <a href="https://blogverse-alpha.vercel.app" target="_blank" rel="noreferrer" className="p2-nlink p2-coffee" style={{ fontSize: '16px', fontWeight: 'bold', color: '#a63e3e', textDecoration: 'underline', marginRight: '6px' }}>Live Demo ↗</a>
                  <span style={{ fontFamily: "'Caveat', cursive", fontSize: '11px', color: '#888' }}>blogverse-alpha.vercel.app</span>
                </div>
                <div>
                  <a href="https://github.com/kuljot-kaur/BlogVerse" target="_blank" rel="noreferrer" className="p2-nlink p2-coffee" style={{ fontSize: '16px', fontWeight: 'bold', color: '#a63e3e', textDecoration: 'underline' }}>GitHub ↗</a>
                </div>
              </div>
            </div>

          </div>

          <div className="p2-page-dots">
            <div className="p2-dot on"></div>
            <div className="p2-dot on"></div>
            <div className="p2-dot on"></div>
            <div className="p2-dot on"></div>
          </div>
        </div>
      ),
      back: (
        <div className="exp-page" onClick={() => prevPage()}>
          <div className="exp-page-title">Experience</div>
          <div className="exp-timeline">
            <div className="tl-item" style={{ background: '#fff', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', borderLeft: '5px solid var(--caput)', marginBottom: '14px' }}>
              <div className="tl-dot" style={{ left: '-32.5px', top: '20px', backgroundColor: 'var(--caput)', boxShadow: '0 0 0 3px #fff, 0 0 0 5px var(--caput)' }}></div>
              <div className="tl-header" style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '6px', marginBottom: '4px' }}>
                <span className="tl-role" style={{ fontSize: '15px', fontWeight: '900', color: 'var(--space)', margin: 0 }}>AI/ML Intern</span>
                <span className="tl-at" style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--coffee)' }}>@</span>
                <span className="tl-org" style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: '800', color: 'var(--caput)', margin: 0 }}>Samsung R&D Institute India (SRI-B)</span>
              </div>
              <div className="tl-year" style={{ color: 'var(--slate)', fontSize: '11px', marginBottom: '6px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Apr 2026 – Present</div>
              <div className="tl-desc" style={{ fontSize: '14px', color: '#444', margin: 0, fontWeight: '550' }}>Working on AI-driven solutions with a focus on Speech Emotion Recognition (SER). Developing and evaluating machine learning models while exploring LLMs and intelligent workflows for real-world applications in a research-oriented environment.</div>
            </div>

            <div className="tl-item" style={{ background: '#fff', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', borderLeft: '5px solid var(--cobalt-blue)', marginBottom: '14px' }}>
              <div className="tl-dot" style={{ left: '-32.5px', top: '20px', backgroundColor: 'var(--cobalt-blue)', boxShadow: '0 0 0 3px #fff, 0 0 0 5px var(--cobalt-blue)' }}></div>
              <div className="tl-header" style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '6px', marginBottom: '4px' }}>
                <span className="tl-role" style={{ fontSize: '15px', fontWeight: '900', color: 'var(--space)', margin: 0 }}>Web Developer Intern</span>
                <span className="tl-at" style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--coffee)' }}>@</span>
                <span className="tl-org" style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: '800', color: 'var(--cobalt-blue)', margin: 0 }}>Elevate Labs</span>
              </div>
              <div className="tl-year" style={{ color: 'var(--slate)', fontSize: '11px', marginBottom: '6px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Nov 2025 – Dec 2025</div>
              <div className="tl-desc" style={{ fontSize: '14px', color: '#444', margin: 0, fontWeight: '550' }}>Built responsive React applications across e-commerce, dashboard, and landing page projects. Improved UI performance, optimized components, and was recognized as the Best Performer of the internship cohort.</div>
              <div className="tl-badge" style={{ marginTop: '8px', fontSize: '9px', padding: '3px 8px', backgroundColor: '#f0f4f8', color: 'var(--cobalt-blue)', border: '1px solid var(--cobalt-blue)' }}>🏆 Best Performer</div>
            </div>

            <div className="tl-item" style={{ background: '#fff', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', borderLeft: '5px solid var(--coffee)', marginBottom: '0px' }}>
              <div className="tl-dot" style={{ left: '-32.5px', top: '20px', backgroundColor: 'var(--coffee)', boxShadow: '0 0 0 3px #fff, 0 0 0 5px var(--coffee)' }}></div>
              <div className="tl-header" style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '6px', marginBottom: '4px' }}>
                <span className="tl-role" style={{ fontSize: '15px', fontWeight: '900', color: 'var(--space)', margin: 0 }}>Open Source Contributor</span>
                <span className="tl-at" style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--coffee)' }}>@</span>
                <span className="tl-org" style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: '800', color: 'var(--coffee)', margin: 0 }}>GirlScript Summer of Code (GSSoC '25)</span>
              </div>
              <div className="tl-year" style={{ color: 'var(--slate)', fontSize: '11px', marginBottom: '6px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Aug 2025</div>
              <div className="tl-desc" style={{ fontSize: '14px', color: '#444', margin: 0, fontWeight: '550' }}>Contributed to open-source projects by implementing features, fixing bugs, and collaborating with maintainers through code reviews while following industry-standard Git workflows.</div>
            </div>
          </div>

        </div>
      )
    },

    // Spread 4: Achievements & Interests
    {
      id: 'achievements',
      tabName: 'AWARDS',
      tabTop: '64%',
      tabColor: 'var(--slate)',
      tabTextColor: 'var(--v2-cream)',
      frontBg: 'var(--slate)',
      frontColor: '#ffffff',
      backBg: '#4A5240',
      backColor: '#ffffff',
      front: (
        <div className="ach-page" onClick={() => nextPage()}>
          <div className="ach-page-title">Achievements</div>
          <div className="pub-section">
            <div className="pub-label">📄 Publication</div>
            <div className="pub-card" style={{ padding: '16px 18px' }}>
              <div className="pub-journal" style={{ fontSize: '11px' }}>ICECMSN 2025 · Hindusthan Institute of Technology · Nov 2025</div>
              <div className="pub-title" style={{ fontSize: '17px', marginBottom: '8px' }}>Neuromorphic Edge Computing: A Survey of Brain-Inspired Architectures for Low-Power AI</div>
              <div className="pub-meta" style={{ fontSize: '13px' }}>
                <span>5th International Conference on Evolutionary Computing &amp; Mobile Sustainable Networks</span>
              </div>
              <div onClick={(e) => e.stopPropagation()} style={{ marginTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <span className="pub-tag" style={{ fontSize: '9px', padding: '3px 10px' }}>Research</span>
                  <span className="pub-tag" style={{ background: 'var(--caput)', marginLeft: '4px', fontSize: '9px', padding: '3px 10px' }}>Conference Paper</span>
                  <span className="pub-tag" style={{ background: 'var(--coffee)', marginLeft: '4px', fontSize: '9px', padding: '3px 10px' }}>AI / Hardware</span>
                </div>
                <a href="https://ieeexplore.ieee.org/document/11383149" target="_blank" rel="noreferrer" style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--caput)', textDecoration: 'underline' }}>View Paper ↗</a>
              </div>
            </div>
          </div>
          <div className="cert-section">
            <div className="cert-label">🏅 Certifications</div>
            <div className="cert-grid">
              <div className="cert-card cc1">
                <div className="cert-seal s1">★</div>
                <div className="cert-name">AWS AI Practitioner Challenge</div>
                <div className="cert-issuer">UDACITY</div>
              </div>
              <div className="cert-card cc2">
                <div className="cert-seal s2">★</div>
                <div className="cert-name">Programming in Java</div>
                <div className="cert-issuer">NPTEL</div>
              </div>
              <div className="cert-card cc3">
                <div className="cert-seal s3">★</div>
                <div className="cert-name">Database Management System</div>
                <div className="cert-issuer">NPTEL</div>
              </div>
              <div className="cert-card cc4">
                <div className="cert-seal s4">★</div>
                <div className="cert-name">Technology Job Simulation</div>
                <div className="cert-issuer">Deloitte Australia</div>
              </div>
              <div className="cert-card cc1">
                <div className="cert-seal s1">★</div>
                <div className="cert-name">CBSE Industry Engagement</div>
                <div className="cert-issuer">CBSE</div>
              </div>
            </div>
          </div>
        </div>
      ),
      back: (
        <div className="page-content" onClick={() => prevPage()} style={{ display: 'flex', flexDirection: 'column', height: '100%', paddingBottom: '16px' }}>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h2 className="editorial-h2" style={{ color: '#ffffff', margin: 0, fontWeight: 900 }}>Resume</h2>

            <div style={{ display: 'flex', gap: '8px' }} onClick={(e) => e.stopPropagation()}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '8px 14px', background: 'var(--slate)', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', gap: '4px', transition: 'transform 0.2s', boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <span>↗</span> Open
              </a>
              <a
                href="/resume.pdf"
                download="Kuljot_Kaur_Resume.pdf"
                style={{ padding: '8px 14px', background: 'var(--coffee)', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', gap: '4px', transition: 'transform 0.2s', boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <span>↓</span> Download
              </a>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              position: 'relative',
              background: '#f9f6f0',
              padding: '8px',
              paddingBottom: '16px',
              borderRadius: '2px',
              boxShadow: '2px 8px 24px rgba(0,0,0,0.15)',
              border: '1px solid #e0d8c8',
              transform: 'rotate(-0.5deg)',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="paper-clip" style={{ top: '-10px', left: '50%', transform: 'translateX(-50%)', position: 'absolute', zIndex: 10 }} />

            <div style={{ flex: 1, position: 'relative', background: '#fff', borderRadius: '1px', overflow: 'hidden', border: '1px solid #ccc' }}>
              <iframe
                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Resume Preview"
              ></iframe>
            </div>
          </div>

        </div>
      )
    },

    // Spread 5: Contact
    {
      id: 'contact',
      tabName: 'CONTACT',
      tabTop: '82%',
      tabColor: 'var(--coffee)',
      tabTextColor: 'var(--v2-cream)',
      frontBg: '#2E2E2E',
      frontColor: '#ffffff',
      backBg: 'var(--mustard)',
      backColor: 'var(--cobalt-blue)',
      front: (
        <div className="contact-page" onClick={() => jumpTo(0)} style={{ width: '100%', height: '100%' }}>
          <div className="sp" style={{ top: '160px', right: '30px', fontSize: '14px', color: '#ffffff' }}>✦</div>
          <div className="sp" style={{ top: '280px', left: '28px', fontSize: '10px', color: '#ffffff', animationDelay: '0.6s' }}>✱</div>

          <div className="right-title">Find Me Here</div>
          <div className="right-sub">let's vibe together and build something fun ✦</div>

          <div className="links-col">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', top: '10px', left: '-5%', width: '110%', height: '50px', zIndex: 0, pointerEvents: 'none' }}>
              <path d="M 0,0 Q 50,100 100,0" fill="none" stroke="#A67B5B" strokeWidth="3" vectorEffect="non-scaling-stroke" />
            </svg>

            <div className="stamp-wrapper" style={{ '--start-rot': '-4deg', '--end-rot': '2deg', '--dur': '4.2s', marginTop: '35px' }} onClick={(e) => e.stopPropagation()}>
              <svg viewBox="0 0 20 40" style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '32px', zIndex: 10, pointerEvents: 'none' }}>
                <rect x="2" y="0" width="16" height="32" rx="2" fill="#F0D9B5" />
                <rect x="0" y="14" width="20" height="4" rx="1" fill="#C19A6B" />
                <line x1="10" y1="20" x2="10" y2="32" stroke="#C19A6B" strokeWidth="2" />
              </svg>
              <a className="social-stamp" href="https://github.com/kuljot-kaur" target="_blank" rel="noreferrer">
                <div className="stamp-inner">
                  <svg className="stamp-icon" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                </div>
              </a>
              <div className="stamp-name">github</div>
            </div>

            <div className="stamp-wrapper" style={{ '--start-rot': '3deg', '--end-rot': '-2deg', '--dur': '3.7s', marginTop: '44px' }} onClick={(e) => e.stopPropagation()}>
              <svg viewBox="0 0 20 40" style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '32px', zIndex: 10, pointerEvents: 'none' }}>
                <rect x="2" y="0" width="16" height="32" rx="2" fill="#F0D9B5" />
                <rect x="0" y="14" width="20" height="4" rx="1" fill="#C19A6B" />
                <line x1="10" y1="20" x2="10" y2="32" stroke="#C19A6B" strokeWidth="2" />
              </svg>
              <a className="social-stamp" href="https://linkedin.com/in/kuljot-kaur-11a955264" target="_blank" rel="noreferrer">
                <div className="stamp-inner">
                  <svg className="stamp-icon" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </div>
              </a>
              <div className="stamp-name">linkedin</div>
            </div>

            <div className="stamp-wrapper" style={{ '--start-rot': '-1deg', '--end-rot': '4deg', '--dur': '4.5s', marginTop: '39px' }} onClick={(e) => e.stopPropagation()}>
              <svg viewBox="0 0 20 40" style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '32px', zIndex: 10, pointerEvents: 'none' }}>
                <rect x="2" y="0" width="16" height="32" rx="2" fill="#F0D9B5" />
                <rect x="0" y="14" width="20" height="4" rx="1" fill="#C19A6B" />
                <line x1="10" y1="20" x2="10" y2="32" stroke="#C19A6B" strokeWidth="2" />
              </svg>
              <a className="social-stamp" href="mailto:kaurkuljot23@gmail.com">
                <div className="stamp-inner">
                  <svg className="stamp-icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                </div>
              </a>
              <div className="stamp-name">email</div>
            </div>
          </div>

          <div className="postcard">
            <div className="pc-to">to: anyone curious enough to reach out</div>
            <div className="pc-name">From Kuljot's Desk ✦</div>
            <div className="pc-msg">you've reached the final page, but hopefully not the end of the story. if something here resonated with you, let's create the next chapter together.</div>
            <div className="pc-sig">— kuljot</div>
          </div>
        </div>
      ),
      back: (
        <div className="page-content" onClick={() => prevPage()}></div>
      )
    }
  ];

  const nextPage = () => {
    if (currentPage < sheets.length) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const jumpTo = (index) => {
    setCurrentPage(index);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/bgm.mp3"
        loop
        onTimeUpdate={() => {
          if (audioRef.current && audioRef.current.duration) {
            // Buffer of 0.15s to loop slightly before the exact end, reducing gaps
            if (audioRef.current.currentTime >= audioRef.current.duration - 0.15) {
              audioRef.current.currentTime = 0;
              audioRef.current.play();
            }
          }
        }}
      />

      {!hasEntered && <LibraryEntrance onEnter={handleEnter} />}

      {hasEntered && (
        <div className="book-scene">
          <button
            onClick={toggleMute}
            style={{
              position: 'fixed',
              top: 30,
              right: 30,
              zIndex: 1000,
              background: 'var(--space)',
              color: 'var(--tan)',
              border: '3px solid var(--coffee)',
              borderRadius: '50%',
              width: 54,
              height: 54,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '3px 3px 0 var(--coffee)',
              fontSize: 24,
            }}
          >
            {isPlaying ? '🔊' : '🔈'}
          </button>
          <motion.div
            className="book-wrapper"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2 }}
          >
            {/* Background Leather Cover */}
            <div className="leather-cover">
              <div className="clasp">
                <div className="clasp-button" />
              </div>
            </div>

            {/* Book Crease Shadow (Spine) */}
            <div className="book-crease" />

            {/* Static Left page (Back cover content when all sheets flipped) */}
            <div style={{ position: 'absolute', left: 0, width: '50%', height: '100%', background: '#111', borderRadius: '5px 0 0 5px', zIndex: -1 }}>
              <div className="page-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {/* The very bottom left page under everything */}
              </div>
            </div>

            {/* Static Right page (Back cover content) */}
            <div style={{ position: 'absolute', right: 0, width: '50%', height: '100%', background: '#f5f5f5', borderRadius: '0 5px 5px 0', zIndex: -1 }}>
              <div className="page-content"></div>
            </div>

            {/* Static Cover Left Page */}
            <div className="sheet" style={{ transform: 'rotateY(-180deg)', zIndex: 0 }}>
              <div className="sheet-face sheet-back" style={{ background: 'var(--tan)' }}>
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                  <FullCoverSpread side="left" />
                </div>
              </div>
            </div>

            {sheets.map((sheet, index) => {
              const isFlipped = index < currentPage;

              return (
                <motion.div
                  key={sheet.id}
                  className="sheet"
                  initial={false}
                  animate={{
                    rotateY: isFlipped ? -180 : 0,
                    zIndex: isFlipped ? index + 1 : sheets.length - index,
                  }}
                  transition={{ type: 'spring', stiffness: 45, damping: 15, mass: 1 }}
                >
                  <div
                    className="sheet-face sheet-front"
                    style={{ backgroundColor: sheet.frontBg, color: sheet.frontColor, pointerEvents: isFlipped ? 'none' : 'auto' }}
                  >
                    {sheet.front}
                    {sheet.tabName && !isFlipped && (
                      <div
                        className="bookmark-tab bookmark-front"
                        style={{ top: sheet.tabTop, background: sheet.tabColor, color: sheet.tabTextColor || 'var(--text-light)' }}
                        onClick={(e) => { e.stopPropagation(); jumpTo(sheet.tabJump !== undefined ? sheet.tabJump : index); }}
                      >
                        <span className="tab-text front-text">{sheet.tabName}</span>
                      </div>
                    )}
                  </div>
                  <div
                    className="sheet-face sheet-back"
                    style={{ backgroundColor: sheet.backBg, color: sheet.backColor, pointerEvents: isFlipped ? 'auto' : 'none' }}
                  >
                    {sheet.back}
                    {sheet.tabName && isFlipped && (
                      <div
                        className="bookmark-tab bookmark-back"
                        style={{ top: sheet.tabTop, background: sheet.tabColor, color: sheet.tabTextColor || 'var(--text-light)' }}
                        onClick={(e) => { e.stopPropagation(); jumpTo(sheet.tabJump !== undefined ? sheet.tabJump : index); }}
                      >
                        <span className="tab-text back-text">{sheet.tabName}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}

          </motion.div>
        </div>
      )}
    </>
  );
}
