class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    // on connection
    this.io.on("connection", (socket) => {
      //escuchar evento
      socket.on("mensaje-to-server", (data) => {
        console.log(data);

        //emitir evento
        this.io.emit("mensaje-from-server", data);
      });
    });
  }
}

module.exports = Sockets;
