import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Initiatives from './components/Initiatives';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Initiatives />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
