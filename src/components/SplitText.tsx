import React, { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  style?: React.CSSProperties;
}

const SplitText: React.FC<SplitTextProps> = ({ 
  text, 
  className = '', 
  delay = 0, 
  duration = 0.8,
  staggerDelay = 0.1,
  style = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const words = text.split(' ');

  return (
    <div ref={textRef} className={`split-text-container ${className}`} style={style}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2 lg:mr-4">
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className={`inline-block transition-all ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDuration: `${duration}s`,
                transitionDelay: `${(wordIndex * 0.2) + (charIndex * staggerDelay)}s`,
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default SplitText;