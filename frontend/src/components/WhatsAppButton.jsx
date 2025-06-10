import React from 'react';
import './whatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '+918075875280';
  const message = 'Hello, I need help with my order';

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        className="whatsapp-icon"
      />
    </div>
  );
};

export default WhatsAppButton;