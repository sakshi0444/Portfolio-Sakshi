// App.js (Updated: Easier Easter Egg with Floating Emoji 🎮)
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Portfolio from './components/project';
import Contact from './components/contact';
import './App.css';

const App = () => {
  const [easterEgg, setEasterEgg] = useState(false);

  return (
    <Router>
      <Navbar />

      {/* Floating Easter Egg Button */}
      <div
        onClick={() => setEasterEgg(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          fontSize: '1.8rem',
          cursor: 'pointer',
          zIndex: 999
        }}
        title="Click me!"
      >
        🧠
      </div>

      {/* Modal Pop-up */}
      {easterEgg && (
        <div style={{
          position: 'fixed',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#1f1f1f',
          color: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          zIndex: 1000,
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)'
        }}>
        Stay weird. Stay curious. 💫
          <div style={{ marginTop: '1rem', textAlign: 'right' }}>
            <button
              onClick={() => setEasterEgg(false)}
              style={{
                backgroundColor: '#ff79c6',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                color: 'white'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
       <Route path="/snapshot" element={<Portfolio />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
