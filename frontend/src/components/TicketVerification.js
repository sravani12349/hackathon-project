import React, { useState } from "react";
import axios from "axios";
import QrScanner from "react-qr-scanner";

const TicketVerification = () => {
  const [scanResult, setScanResult] = useState("");
  const [verificationMessage, setVerificationMessage] = useState("");

  const handleScan = async (data) => {
    if (data) {
      setScanResult(data.text);
      try {
        const response = await axios.post("http://localhost:5000/api/tickets/verify", {
          ticketId: data.text,
        });
        setVerificationMessage(response.data.message);
      } catch (error) {
        setVerificationMessage("Invalid Ticket or Already Used!");
      }
    }
  };

  const handleError = (err) => {
    console.error("QR Scanner Error: ", err);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Ticket Verification</h2>
      <QrScanner
        delay={300}
        style={{ width: "300px" }}
        onError={handleError}
        onScan={handleScan}
      />
      <p>Scan Result: {scanResult}</p>
      {verificationMessage && <h3>{verificationMessage}</h3>}
    </div>
  );
};

export default TicketVerification;
