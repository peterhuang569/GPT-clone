import React, { useState, useEffect } from 'react';
import './TypingAnimation.css'; // Import CSS file for styling

function TypingAnimation({ text }) {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setVisibleText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 15); // Adjust typing speed here (milliseconds)

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="typing-animation">
      <span>{visibleText}</span>
    </div>
  );
}

export default TypingAnimation;
