import React, { useState } from 'react';

const Event = () => {
    const [events, setEvents] = useState([]);
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');

    const handleAddEvent = () => {
        if (eventName && eventDate) {
            setEvents([...events, { name: eventName, date: eventDate }]);
            setEventName('');
            setEventDate('');
        }
    };

    return (
        <div className="event-container">
            <style>{`
                .event-container {
                    max-width: 800px;
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
                }

                .event-form {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 20px;
                }

                input[type="text"],
                input[type="date"] {
                    padding: 10px;
                    margin: 10px 0;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    font-size: 1em;
                }

                button {
                    padding: 10px;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1em;
                    transition: background-color 0.3s ease;
                }

                button:hover {
                    background-color: #45a049;
                }

                ul {
                    list-style-type: none;
                    padding: 0;
                }

                li {
                    padding: 10px;
                    margin: 5px 0;
                    background: #f9f9f9;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                }
            `}</style>

            <h1>Event Management</h1>
            <div className="event-form">
                <input
                    type="text"
                    placeholder="Event Name"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                />
                <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                />
                <button onClick={handleAddEvent}>Add Event</button>
            </div>
            <h2>Upcoming Events</h2>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                        {event.name} - {new Date(event.date).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Event;
