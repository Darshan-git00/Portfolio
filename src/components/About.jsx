import React, { useState } from 'react';

function About() {
  const [tab, setTab] = useState('skills');
  return (
    <div id="about" className="reveal">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={`${process.env.PUBLIC_URL}/images/user.png`} alt="Darshan" style={{ width: '350px', height: 'auto' }} />
          </div>
          <div className="about-col-2">
            <h1 className="subtitle">About me</h1>
            <p>
              I'm Darshan, a backend-focused developer building reliable services with Java, Spring Boot, and SQL. I care about clean architecture, performance, and deployments that just work—now expanding into AWS for cloud-native workflows. I enjoy debugging tricky issues, shaping modular code, and delivering clear, incremental value. I also take on freelance work for backend fixes, performance tuning, and deployments.
            </p>
            <div className="tab-titles">
              <p className={`tab-links ${tab === 'skills' ? 'active-link' : ''}`} onClick={() => setTab('skills')}>Skills</p>
              <p className={`tab-links ${tab === 'experience' ? 'active-link' : ''}`} onClick={() => setTab('experience')}>Experience</p>
              <p className={`tab-links ${tab === 'education' ? 'active-link' : ''}`} onClick={() => setTab('education')}>Education</p>
            </div>
            <div className={`tab-contents ${tab === 'skills' ? 'active-tab' : ''}`} id="skills">
              <div className="skills-grid">
                <div className="skill-item" style={{"--pct":"92%"}}>
                  <span className="skill-icon"><i className="fa-brands fa-java" aria-hidden="true"></i></span>
                  <span className="skill-name">Java</span>
                  <span className="skill-meter"><span className="fill"></span></span>
                </div>
                <div className="skill-item" style={{"--pct":"86%"}}>
                  <span className="skill-icon"><i className="fa-solid fa-leaf" aria-hidden="true"></i></span>
                  <span className="skill-name">Spring Boot</span>
                  <span className="skill-meter"><span className="fill"></span></span>
                </div>
                <div className="skill-item" style={{"--pct":"84%"}}>
                  <span className="skill-icon"><i className="fa-solid fa-database" aria-hidden="true"></i></span>
                  <span className="skill-name">SQL</span>
                  <span className="skill-meter"><span className="fill"></span></span>
                </div>
                <div className="skill-item" style={{"--pct":"72%"}}>
                  <span className="skill-icon"><i className="fa-brands fa-js" aria-hidden="true"></i></span>
                  <span className="skill-name">JavaScript</span>
                  <span className="skill-meter"><span className="fill"></span></span>
                </div>
                <div className="skill-item" style={{"--pct":"68%"}}>
                  <span className="skill-icon"><i className="fa-brands fa-react" aria-hidden="true"></i></span>
                  <span className="skill-name">React JS</span>
                  <span className="skill-meter"><span className="fill"></span></span>
                </div>
                <div className="skill-item" style={{"--pct":"75%"}}>
                  <span className="skill-icon"><i className="fa-brands fa-aws" aria-hidden="true"></i></span>
                  <span className="skill-name">AWS</span>
                  <span className="skill-meter"><span className="fill"></span></span>
                </div>
                <div className="skill-item" style={{"--pct":"78%"}}>
                  <span className="skill-icon"><i className="fa-brands fa-git-alt" aria-hidden="true"></i></span>
                  <span className="skill-name">Git</span>
                  <span className="skill-meter"><span className="fill"></span></span>
                </div>
              </div>
              <div className="skills-cloud" aria-hidden="true">
                <div className="cloud-track slow">
                  <i className="fa-brands fa-java" title="Java"></i>
                  <i className="fa-solid fa-leaf" title="Spring Boot"></i>
                  <i className="fa-solid fa-database" title="SQL"></i>
                  <i className="fa-brands fa-js" title="JavaScript"></i>
                  <i className="fa-brands fa-react" title="React"></i>
                  <i className="fa-brands fa-aws" title="AWS"></i>
                  <i className="fa-brands fa-git-alt" title="Git"></i>
                  <i className="fa-brands fa-java" title="Java"></i>
                  <i className="fa-solid fa-leaf" title="Spring Boot"></i>
                  <i className="fa-solid fa-database" title="SQL"></i>
                  <i className="fa-brands fa-js" title="JavaScript"></i>
                  <i className="fa-brands fa-react" title="React"></i>
                  <i className="fa-brands fa-aws" title="AWS"></i>
                  <i className="fa-brands fa-git-alt" title="Git"></i>
                </div>
                <div className="cloud-track slow copy">
                  <i className="fa-brands fa-java" title="Java"></i>
                  <i className="fa-solid fa-leaf" title="Spring Boot"></i>
                  <i className="fa-solid fa-database" title="SQL"></i>
                  <i className="fa-brands fa-js" title="JavaScript"></i>
                  <i className="fa-brands fa-react" title="React"></i>
                  <i className="fa-brands fa-aws" title="AWS"></i>
                  <i className="fa-brands fa-git-alt" title="Git"></i>
                  <i className="fa-brands fa-java" title="Java"></i>
                  <i className="fa-solid fa-leaf" title="Spring Boot"></i>
                  <i className="fa-solid fa-database" title="SQL"></i>
                  <i className="fa-brands fa-js" title="JavaScript"></i>
                  <i className="fa-brands fa-react" title="React"></i>
                  <i className="fa-brands fa-aws" title="AWS"></i>
                  <i className="fa-brands fa-git-alt" title="Git"></i>
                </div>
              </div>
            </div>
            <div className={`tab-contents ${tab === 'experience' ? 'active-tab' : ''}`} id="experience">
              <div className="info-cards">
                <div className="info-card">
                  <h3>Backend Development</h3>
                  <p>Crafting scalable APIs and integrating robust database solutions.<br />Skilled in Spring Boot, SQL, and cloud-ready architectures.</p>
                </div>
                <div className="info-card">
                  <h3>Freelance Explore</h3>
                  <p>Delivering precise backend fixes and deployment support on Upwork &amp; Fiverr.<br />Focused on clean code, client satisfaction, and rapid iteration.</p>
                </div>
                <div className="info-card">
                  <h3>Pentagon Space Apprenticeship</h3>
                  <p>Completed hands-on training in Java, Spring Boot, and project deployment.<br />Gained real-world experience through guided modules and assessments.</p>
                </div>
              </div>
            </div>
            <div className={`tab-contents ${tab === 'education' ? 'active-tab' : ''}`} id="education">
              <div className="info-cards">
                <div className="info-card">
                  <h3>Bachelor of Engineering</h3>
                  <p>Information Science and Engineering<br />Vivekananda Institute of Technlogy, Bengaluru<br />2021-2025</p>
                </div>
                <div className="info-card">
                  <h3>Certifications</h3>
                  <p>Completed JavaScript course on platforms like Udemy.<br />Currently pursuing AWS Cloud Practitioner certification.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
