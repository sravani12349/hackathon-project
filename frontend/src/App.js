import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FaceRecognition from './components/FaceRecognition';
import Event from './pages/Event'; // Make sure to create this component as well



const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/face-recognition" element={<FaceRecognition />} />
                    <Route path="/event" element={<Event />} /> {/* Make sure this component exists */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
