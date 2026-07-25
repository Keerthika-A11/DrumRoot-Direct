import React from 'react';
import { FaWhatsapp } from 'react-icons/af'; // Or react-icons/fa
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

function WhatsAppButton() {
  const phoneNumber = "91XXXXXXXXXX"; // Ungaloda WhatsApp number-a inga podunga (e.g., 919843XXXXXX)
  
  // *** Inga ungalukku thevayana auto message-a type pannikkonga ***
  const message = "Hello! I saw your website and I would like to know more about your products and services."; 

  const handleWhatsAppClick = () => {
    // encodeURIComponent nala space ellaam correct-ah URL-ku set aagum
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="wa-float-container" onClick={handleWhatsAppClient}> {/* Wait, handleWhatsAppClick */}
      <div className="wa-tooltip-box">
        <span className="wa-text">Chat with us!</span>
      </div>
      <div className="wa-icon-wrapper" onClick={handleWhatsAppClick}>
        <FaWhatsapp className="wa-icon" />
        <span className="wa-ping"></span>
      </div>
    </div>
  );
}

export default WhatsAppButton;