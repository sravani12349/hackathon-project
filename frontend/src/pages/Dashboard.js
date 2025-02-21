import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Event Ticketing System</h1>
      <p>Book your tickets now and experience seamless event access.</p>
      <Link to="/events">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>View Events</button>
      </Link>
    </div>
  );
};

export default Home;
