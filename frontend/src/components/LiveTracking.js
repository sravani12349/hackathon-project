import { useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5001");

const LiveTracking = () => {
    useEffect(() => {
        socket.on("locationUpdated", (data) => {
            console.log("User moved:", data);
        });

        return () => socket.disconnect();
    }, []);

    return <div>Tracking Users in Real-Time...</div>;
};

export default LiveTracking;
