import React from 'react';

function Services() {
  return (
    <div id="services" className="reveal">
      <div className="container">
        <h1 className="sub-title">What I Do</h1>
        <ul className="services-timeline">
          <li className="service-item">
            <span className="svc-icon"><i className="fa-brands fa-java" aria-hidden="true"></i></span>
            <div className="svc-content">
              <h3>Modular Backend</h3>
              <p>I specialize in backend development using Java, Spring Boot, and SQL to build scalable, secure applications. From debugging complex systems to deploying cloud-ready solutions, I focus on clean architecture and performance.</p>
            </div>
          </li>
          <li className="service-item">
            <span className="svc-icon"><i className="fa-solid fa-laptop-code" aria-hidden="true"></i></span>
            <div className="svc-content">
              <h3>Freelance Services</h3>
              <p>I provide backend troubleshooting, deployment support, and performance tuning for clients on platforms like Upwork and Fiverr.</p>
            </div>
          </li>
          <li className="service-item">
            <span className="svc-icon"><i className="fa-solid fa-code" aria-hidden="true"></i></span>
            <div className="svc-content">
              <h3>Responsive Frontend Craft</h3>
              <p>I build clean, responsive interfaces using HTML, CSS, and JavaScript, with React for dynamic, component-driven experiences. My focus is on fast load times, pixel precision, and seamless user interaction across devices also Recently Started learning UI/UX Design.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
