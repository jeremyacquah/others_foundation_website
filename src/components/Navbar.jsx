import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="logo">
          <img src="/logo.png" alt="Others Foundation Logo" className="logo-image" />
        </a>
        
        <div className="nav-links desktop-only">
          <a href="#home" className="nav-link">Home</a>
          <a href="#initiatives" className="nav-link">Initiatives</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div className="nav-actions desktop-only">
          <a href="#donate" className="btn btn-donate">
            <Heart size={18} fill="currentColor" /> Donate Now
          </a>
        </div>

        <button 
          className="mobile-menu-btn mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass-panel">
          <a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#initiatives" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Initiatives</a>
          <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a href="#donate" className="btn btn-donate" onClick={() => setMobileMenuOpen(false)}>
            <Heart size={18} fill="currentColor" /> Donate Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
