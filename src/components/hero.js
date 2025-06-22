import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-container"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="hero-title"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 100 }}
        >
          Hi, I’m <span className="gradient-text">Sakshi 👩‍💻</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Just a girl who codes, designs, and breaks the internet (sometimes on purpose)...
        </motion.p>

        <motion.div
          className="typewriter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Typewriter
            options={{
              strings: [
                "Data Analyst 📊",
                "AI Explorer 🤖",
                "Full Stack Dev 🧠",
                "Midnight Debugger 🌙",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
