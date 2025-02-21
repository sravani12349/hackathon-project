import React from "react";
import { useHistory } from "react-router-dom"; // Import useHistory for navigation

const Home = () => {
  const history = useHistory(); // Initialize useHistory

  // Function to handle AI-based facial recognition click
  const handleFacialRecognitionClick = () => {
    history.push("/facial-recognition"); // Navigate to the FaceRecognition component
  };

  return (
    <div className="home-container">
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
        }

        .home-container {
          max-width: 1200px;
          margin: auto;
          padding: 20px;
          background: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }

        h1 {
          color: #4CAF50;
          text-align: center;
          margin-bottom: 20px;
          font-size: 2.5em;
        }

        h2 {
          color: #333;
          margin-top: 30px;
          font-size: 2em;
          border-bottom: 2px solid #4CAF50;
          padding-bottom: 10px;
        }

        p {
          line-height: 1.6;
          color: #555;
          font-size: 1.1em;
          margin-bottom: 20px;
        }

        .key-features {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 20px;
        }

        .feature {
          flex: 1 1 300px;
          background: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          margin: 10px;
          transition: box-shadow 0.3s ease;
          cursor: pointer; /* Add cursor pointer to indicate it's clickable */
        }

        .feature:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .feature h3 {
          color: #4CAF50;
          margin-bottom: 10px;
        }

        .feature p {
          color: #666;
        }

        footer {
          text-align: center;
          margin-top: 30px;
          padding: 10px;
          background: #4CAF50;
          color: white;
          border-radius: 8px;
        }
      `}</style>

      <h1>Welcome to the Event Ticketing & Access Control System</h1>
      <p>
        Our platform is designed to enhance security and efficiency in ticketing and entry processes for events of all sizes.
      </p>

      <h2>Key Features</h2>
      <div className="key-features">
        <div className="feature" onClick={handleFacialRecognitionClick}>
          <h3>AI-Based Facial Recognition</h3>
          <p>Fast and secure entry validation through advanced biometric authentication, ensuring a seamless experience for attendees.</p>
        </div>
        <div className="feature">
          <h3>Blockchain-Integrated Ticket Verification</h3>
          <p>Eliminate fraud with unique, traceable tickets stored on the blockchain, ensuring authenticity and security.</p>
        </div>
        <div className="feature">
          <h3>Dynamic QR Codes</h3>
          <p>Secure ticket validation that refreshes after entry to prevent misuse and enhance security during events.</p>
        </div>
        <div className="feature">
          <h3>Live Tracking of Attendees</h3>
          <p>Efficient crowd management with real-time tracking of attendee movements, ensuring safety and organization throughout the event.</p>
        </div>
      </div>

      <footer>
        <p>&copy; 2025 Event Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
