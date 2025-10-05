import React from "react";
import "./About.css";
import img7 from "../Images/img 7.webp";

function About() {
  return (
    <>
      <div className="portfolio">
        <div className="marquee">
          <span className="sky">About</span>
          <span className="blue"> Me</span>
        </div>

        <div className="card">
          <img src={img7} alt="About" />
        </div>

        <div className="about-section">
          <h2>Full Stack Developer</h2>
          <p>
            I’m Maryam, a passionate Full Stack Developer proficient in HTML, CSS, JavaScript, and C++. 
            I excel at creating efficient, responsive, and user-friendly web applications, 
            with a strong foundation in both front-end and back-end development. 
            I am a problem solver, a creative thinker, and a team player who adapts well to dynamic environments. 
            I am dedicated to continuous learning and committed to staying updated with the latest technologies 
            and industry trends to deliver high-quality solutions.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </>
  );
}

export default About;