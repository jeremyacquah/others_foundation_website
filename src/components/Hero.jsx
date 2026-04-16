import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
      
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <div className="badge glass-panel animate-float">
            <Sparkles size={16} className="badge-icon" />
            <span>The LaL Project - Lift A Learner</span>
          </div>
          
          <h1 className="hero-title">
            Standing in the gap <br/>
            for <span className="text-gradient">others.</span>
          </h1>
          
          <p className="hero-subtitle">
            Enabling young people to become productive and impact their communities through education and empowerment.
          </p>
          
          <div className="hero-actions">
            <a href="#donate" className="btn btn-donate">
              Donate Now <ArrowRight size={20} />
            </a>
            <a href="#initiatives" className="btn btn-outline">
              Learn More
            </a>
          </div>
        </div>
        
        {/* Placeholder for an inspiring image showing youth/education */}
        <div className="hero-image-wrapper glass-panel">
          <div className="hero-image-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Young students learning together" 
            className="hero-image"
          />
          <div className="hero-stats glass-panel">
            <div className="stat">
              <span className="stat-number text-gradient-gold">500+</span>
              <span className="stat-label">Youth Reached</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number text-gradient">LaL</span>
              <span className="stat-label">Project Model</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
