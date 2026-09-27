import React from 'react';
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
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Navbar = () => {
  const location = useLocation();
  // Don't apply fixed background blindly, but for Home it might be transparent.
  // Actually, let's keep it clean.
  
  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center transition-colors duration-300 ${isHome ? 'bg-transparent text-white' : 'bg-background text-foreground'}`}>
      <div className="flex items-center gap-3">
        <NavLink to="/" className="font-bold text-lg tracking-wider">ARCHIT GUPTA</NavLink>
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-[10px] border border-current overflow-hidden">
          <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover fallback-bg" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block';}}/>
          <span className="hidden">PHOTO</span>
        </div>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
        <NavLink to="/work" className={({isActive}) => isActive ? 'text-accent' : 'hover:text-accent transition-colors'}>WORK</NavLink>
        <NavLink to="/achievements" className={({isActive}) => isActive ? 'text-accent' : 'hover:text-accent transition-colors'}>ACHIEVEMENTS</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'text-accent' : 'hover:text-accent transition-colors'}>ABOUT</NavLink>
        <NavLink to="/misc" className={({isActive}) => isActive ? 'text-accent' : 'hover:text-accent transition-colors'}>MISC</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? 'text-accent' : 'hover:text-accent transition-colors'}>CONTACT</NavLink>
      </div>
      <div className="md:hidden flex items-center">
        {/* Simple hamburger for mobile - we can leave it simple for now or implement a menu */}
        <button className="text-sm tracking-wide">MENU</button>
      </div>
    </nav>
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
