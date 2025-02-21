import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing from react-router-dom
import Home from './pages/Home'; // Importing Home component
import Event from './pages/Event'; // Importing EventManagement component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/event" element={<Event />} />
            </Routes>
        </Router>
    );
}

export default App;
