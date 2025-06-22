import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <div className="portfolio-section">
      <motion.h1 
        className="portfolio-title"
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}>
        👩‍💻 My Tech Universe
      </motion.h1>

      {/* Education */}
      <motion.div className="education" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <h2>🎓 Education</h2>
        <p><strong>JECRC University</strong> (2022 - 2026)<br />B.Tech in Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning. Here, I discovered my passion for building impactful tech solutions while learning and unlearning with curiosity.</p>
      </motion.div>

      {/* Skills */}
      <motion.div className="skills" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <h2>🛠️ Skills & Technologies</h2>
        <div className="marquee">
          <p>
            React.js ⚛️ • HTML5 • CSS3 • JavaScript • Python 🐍 • C++ 💻 • Node.js 🧠 • Feature Engineering • ETL 🛠️ • Data Analysis 📊 • Data Engineering
          </p>
        </div>
      </motion.div>

      {/* Projects */}
      <motion.div className="projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
        <h2>🚀 Projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <h3>AI Logo Generator</h3>
            <p>A generative AI tool to design logos using prompt-based UI.</p>
            <a href="https://github.com/sakshi0444/AI-logoGenerator" target="_blank" rel="noreferrer">GitHub →</a>
          </div>
          <div className="project-card">
            <h3>AI Code Review</h3>
            <p>Review and improve code using AI-based suggestions.</p>
            <a href="https://github.com/sakshi0444/ai-code-review" target="_blank" rel="noreferrer">GitHub →</a>
          </div>
          <div className="project-card">
            <h3>Osterio Annex</h3>
            <p>A modern restaurant site with ordering and feedback features.</p>
            <a href="https://github.com/sakshi0444/Osterio-Annex" target="_blank" rel="noreferrer">GitHub →</a>
          </div>
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div className="achievements" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
        <h2>🌱 Little Wins, Big Lessons</h2>
        <div className="achievement-cards">
          <div className="achievement-card">
            <h4>🏥 National Healthcare Hackathon</h4>
            <p>Selected among India’s top 10 teams. Developed an X-ray Tracker and <strong>gained hands-on experience with real-world healthcare problems, teamwork & agile development.</strong></p>
          </div>
          <div className="achievement-card">
            <h4>🎓 CGPA: 9.0+</h4>
            <p>Maintaining academic excellence through consistent dedication and self-study habits.</p>
          </div>
          <div className="achievement-card">
            <h4>🚀 Smart India Hackathon</h4>
            <p>Participated in building scalable tech solutions for national-level problem statements.</p>
          </div>
          <div className="achievement-card">
            <h4>👩‍💻 iNeuron Hackathon</h4>
            <p>Ideated & prototyped within tight deadlines, reinforcing my problem-solving mindset.</p>
          </div>
          <div className="achievement-card">
            <h4>🧑‍💻 Active Coding Profiles</h4>
            <p>Continuously improving via LeetCode, GitHub projects, and open-source collaboration.</p>
          </div>
        </div>
      </motion.div>

      <style>{`
        .portfolio-section {
          padding: 3rem 2rem;
          background: #0f0f0f;
          color: #f2f2f2;
          font-family: 'Poppins', sans-serif;
          line-height: 1.6;
          min-height: 100vh;
        }

        .portfolio-title {
          font-size: 2.8rem;
          font-weight: 800;
          text-align: center;
          background: linear-gradient(to right, #ff6ec4, #7873f5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 2rem;
        }

        h2 {
          font-size: 1.6rem;
          margin-top: 2.5rem;
          color: #ff90e8;
        }

        .skills .marquee {
          overflow: hidden;
          white-space: nowrap;
          box-sizing: border-box;
          animation: marquee 12s linear infinite;
          background: rgba(255, 255, 255, 0.1);
          padding: 1rem;
          border-radius: 12px;
          margin-top: 1rem;
        }

        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .project-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .project-card {
          background: #1c1c1c;
          padding: 1rem;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease-in-out;
          border-left: 6px solid  #f48eff;
        }

        .project-card:hover {
          transform: scale(1.05);
          background: #262626;
        }

        .project-card a {
          color: #f48eff;
          text-decoration: none;
          font-weight: 600;
        }

        .achievement-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.2rem;
          margin-top: 1rem;
        }

        .achievement-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
  justify-content: center;
  align-items: stretch;
}


        .achievement-card:hover {
          transform: translateY(-4px);
          background-color: #262626;
        }

        .skills ul,
        .achievements ul {
          list-style: none;
          padding-left: 1rem;
          margin-top: 1rem;
        }

        .skills li,
        .achievements li {
          margin-bottom: 0.6rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.8rem;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
