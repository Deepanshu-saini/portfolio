import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact</h2>
      <div className="contact-card">
        <div className="contact-info">
          <p><span className="contact-icon" role="img" aria-label="email">📧</span> <a href="mailto:your.email@example.com">your.email@example.com</a></p>
          <p><span className="contact-icon" role="img" aria-label="linkedin">🔗</span> <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-linkedin</a></p>
          <p><span className="contact-icon" role="img" aria-label="github">🐙</span> <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">github.com/your-github-username</a></p>
        </div>
        {/*
        <div className="contact-form-section">
          <h3>Send me a message</h3>
          {submitted ? (
            <div className="form-success">Thank you for reaching out! I'll get back to you soon.</div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
              />
              <button type="submit">Send</button>
            </form>
          )}
        </div>
        */}
      </div>
    </div>
  );
}

export default Contact; 