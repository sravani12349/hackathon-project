import React from "react";
import './EventManagement.css'; // Ensure this path is correct

const Event = () => {
  return (
    <div className="event-management">
      <h1>Event Ticketing & Access Control System</h1>
      <p>
        Welcome to our web-based platform for event management, designed to enhance security and efficiency in ticketing and entry processes.
      </p>
      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>AI-Based Facial Recognition:</strong> 
          Fast and secure entry validation through advanced biometric authentication.
        </li>
        <li>
          <strong>Blockchain-Integrated Ticket Verification:</strong> 
          Eliminate fraud with unique, traceable tickets on the blockchain.
        </li>
        <li>
          <strong>Dynamic QR Codes:</strong> 
          Secure ticket validation that refreshes after entry to prevent misuse.
        </li>
        <li>
          <strong>Live Tracking of Attendees:</strong> 
          Efficient crowd management with real-time tracking of attendee movements.
        </li>
      </ul>
      <h2>How It Works</h2>
      <p>
        Our system streamlines the ticketing process by integrating cutting-edge technology to ensure a smooth and secure event experience for both organizers and attendees.
      </p>
      <h2>Get Started</h2>
      <p>
        Join us today and experience hassle-free event management with enhanced security features!
      </p>
    </div>
  );
};

export default Event;
