import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';
import Achievements from './pages/Achievements';
import About from './pages/About';
import Misc from './pages/Misc';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isHome = location.pathname === '/';

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { to: "/work", label: "WORK" },
    { to: "/achievements", label: "ACHIEVEMENTS" },
    { to: "/about", label: "ABOUT" },
    { to: "/misc", label: "MISC" },
    { to: "/contact", label: "CONTACT" }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] px-6 py-6 flex justify-between items-center transition-colors duration-300 ${isHome && !isMenuOpen ? 'bg-transparent text-white' : 'bg-background text-foreground'}`}>
        <div className="flex items-center gap-3">
          <NavLink to="/" className="font-bold text-lg tracking-wider z-50 relative">ARCHIT GUPTA</NavLink>
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-[10px] border border-current overflow-hidden z-50 relative">
            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover fallback-bg" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block';}}/>
            <span className="hidden">PHOTO</span>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <NavLink 
              key={link.to} 
              to={link.to} 
              className={({isActive}) => isActive ? 'text-accent' : 'hover:text-accent transition-colors'}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center z-50 relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-sm font-bold tracking-widest uppercase focus:outline-none"
          >
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-background z-50 flex flex-col items-center justify-center transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center gap-8 text-2xl font-bold tracking-widest">
          {navLinks.map((link) => (
            <NavLink 
              key={link.to} 
              to={link.to} 
              className={({isActive}) => isActive ? 'text-accent' : 'text-foreground hover:text-accent transition-colors'}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<ProjectDetail />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/about" element={<About />} />
          <Route path="/misc" element={<Misc />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
