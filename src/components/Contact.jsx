import React, { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyZwMXBcJYYTU7kZ9go7eqChPAIAJ0uMfawFlHv-r-AQwImNT1S7Ro10GBpYJS2bdXnvQ/exec';

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
      setStatus('Message sent Successfully');
      setTimeout(() => setStatus(''), 5000);
      form.reset();
    } catch (err) {
      console.error('Error!', err.message);
    }
  };

  return (
    <div id="contact" className="reveal">
      <div className="container">
        <div className="row"> 
          <div className="contact-left">
            <h1 className="subtitle">Connect with Me
              
            </h1>
            <p>Let's Build Something Together!</p>
            <p>
              <i className="fa-solid fa-square-envelope"></i>
              <a href="mailto:darshanprabhakar66@gmail.com" style={{ color: '#ababab', textDecoration: 'none' }}>darshanprabhakar66@gmail.com</a>
            </p>
            <p>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+919902215280" style={{ color: '#ababab', textDecoration: 'none' }}>+91 9902215280</a>
            </p>
            <div className="social-icons">
              <p>
                <a href="https://www.linkedin.com/in/h-darshan/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://www.glassdoor.co.in/member/profile" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-g"></i>
                </a>
                <a href="https://github.com/Darshan-git00" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </p>
            </div>
            <a href={`${process.env.PUBLIC_URL}/Images/Darshan_updated_Resume.pdf`} download className="btn btn2">Download My Resume</a>
          </div>
          <div className="contact-right">
            <form onSubmit={onSubmit}>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="text" name="email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message will be valuable "></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
            <span id="msg">{status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
