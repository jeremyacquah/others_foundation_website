import React from 'react';
import { BookOpen, Users, Target, HeartHandshake } from 'lucide-react';
import './Initiatives.css';

const Initiatives = () => {
  const initiatives = [
    {
      icon: <BookOpen className="initiative-icon" />,
      title: "Lift A Learner (LaL)",
      description: "Our flagship project providing educational resources, mentorship, and support to enable young minds to succeed."
    },
    {
      icon: <Users className="initiative-icon" />,
      title: "Community Impact",
      description: "Engaging local communities through workshops, skill-building sessions, and collaborative development projects."
    },
    {
      icon: <Target className="initiative-icon" />,
      title: "Productive Youth",
      description: "Equipping young adults with necessary life and professional skills to become independent and productive citizens."
    },
    {
      icon: <HeartHandshake className="initiative-icon" />,
      title: "Gap Standing",
      description: "Intervening where traditional systems fall short, ensuring no youth is left behind due to lack of resources."
    }
  ];

  return (
    <section id="initiatives" className="section initiatives-section">
      <div className="container">
        <h2 className="section-title">Our <span className="text-gradient">Initiatives</span></h2>
        
        <div className="initiatives-grid">
          {initiatives.map((item, index) => (
            <div key={index} className="initiative-card glass-panel" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="icon-wrapper glass-panel">
                {item.icon}
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
