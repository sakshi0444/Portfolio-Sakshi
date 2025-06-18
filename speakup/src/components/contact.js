// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div style={{
      padding: '3rem',
      backgroundColor: '#121212',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let’s Connect </h1>

      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', textAlign: 'center' }}>
        Always down to chat about code, life, or your favorite Spotify playlist.
      </p>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="https://www.linkedin.com/in/sakshi-dosaya" target="_blank" rel="noopener noreferrer"
          style={linkStyle}>LinkedIn</a>
        <a href="https://x.com/sakshi_dosaya" target="_blank" rel="noopener noreferrer"
          style={linkStyle}>Twitter (X)</a>
        <a href="https://github.com/sakshi0444" target="_blank" rel="noopener noreferrer"
          style={linkStyle}>GitHub</a>
        <a href="mailto:dosayasakshi35@gmail.com" style={linkStyle}>Email Me</a>
      </div>

      <div style={{ marginTop: '4rem' }}>
        <iframe style={{ borderRadius: '12px' }}
        title="Spotify Vibes"
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator"
          width="100%" height="152" frameBorder="0" allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy">
        </iframe>
      </div>
    </div>
  );
};

const linkStyle = {
  color: '#1DB954',
  textDecoration: 'none',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  transition: '0.3s',
  borderBottom: '2px solid transparent'
};

export default Contact;
