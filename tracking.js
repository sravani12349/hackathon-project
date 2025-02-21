import { Server } from "socket.io";

const io = new Server(5001, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log("User Connected:", socket.id);

    socket.on("updateLocation", (data) => {
        io.emit("locationUpdated", data);
    });

    socket.on("disconnect", () => {
        console.log("User Disconnected:", socket.id);
    });
});
