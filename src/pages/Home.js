import React, { useState, useEffect } from 'react';
import './Home.css';
import { useRef } from 'react';

const introText = "Welcome to my developer portfolio! I am a passionate software developer with experience in building web applications using modern technologies. Explore my projects, skills, and background using the navigation above.";

function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { from: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(introText.slice(0, i + 1));
      i++;
      if (i === introText.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, chatOpen]);

  const handleChatSend = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setChatMessages((msgs) => [
      ...msgs,
      { from: 'user', text: chatInput }
    ]);
    // Placeholder bot response
    setTimeout(() => {
      setChatMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: 'AI bot is currently in development. For more queries, contact Deepanshu at <a href="/contact" class="chatbot-link">Contact Page</a>.' }
      ]);
    }, 600);
    setChatInput('');
  };

  return (
    <div className="home dark-theme">
      <div className="profile-section">
        <img src="/deepanshu_pic.jpg" alt="Deepanshu Saini" className="profile-pic large" />
        <h2 className="profile-name">Deepanshu Saini</h2>
        <p className="profile-title">Full stack developer</p>
      </div>
      <div className="terminal">
        <div className="terminal-bar">
          <span className="circle red"></span>
          <span className="circle yellow"></span>
          <span className="circle green"></span>
        </div>
        <div className="terminal-content">
          <p className="typing-animation">{displayedText}<span className="cursor">|</span></p>
        </div>
      </div>
      {/* Chatbot floating button and window */}
      <div className="chatbot-container">
        {chatOpen ? (
          <div className="chatbot-window">
            <div className="chatbot-header">
              <span>Chatbot</span>
              <button className="chatbot-close" onClick={() => setChatOpen(false)}>×</button>
            </div>
            <div className="chatbot-messages">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`chatbot-msg ${msg.from}`} dangerouslySetInnerHTML={msg.from === 'bot' ? { __html: msg.text } : undefined}>
                  {msg.from !== 'bot' ? msg.text : null}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form className="chatbot-input-row" onSubmit={handleChatSend}>
              <input
                type="text"
                className="chatbot-input"
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                placeholder="Type your question..."
                autoFocus
              />
              <button type="submit" className="chatbot-send">Send</button>
            </form>
          </div>
        ) : (
          <button className="chatbot-fab" onClick={() => setChatOpen(true)}>
            💬
          </button>
        )}
      </div>
    </div>
  );
}

export default Home; 