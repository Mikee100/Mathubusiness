import React, { useState, useEffect } from 'react';
import './notification.css';

const Notification = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Duration for the notification to be visible (3 seconds in this example)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`notification ${isVisible ? 'show' : ''}`}>
      {message}
    </div>
  );
};

export default Notification;
