import { Server } from "socket.io";

export default function handler(req, res) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);
    
    io.on("connection", (socket) => {
      console.log("User connected:", socket.id);

      // When a user calls another user
      socket.on("callUser", (data) => {
        io.to(data.userToCall).emit("incomingCall", {
          from: socket.id,
          signal: data.signalData,
        });
      });

      // When a user answers the call
      socket.on("answerCall", (data) => {
        io.to(data.to).emit("callAccepted", data.signal);
      });

      // Handle disconnection
      socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
      });
    });

    res.socket.server.io = io;
  }

  res.end();
}
