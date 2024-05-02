const express = require("express");
const { createServer } = require("http");
const { join } = require("path");
const { Server } = require("socket.io");
//const clients = {};
const app = express();
app.use(express.static("public"));
const server = createServer(app);
const io = new Server(server);



app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
    socket.on('updateFromClient',(msg)=>{// listen from user 1 and send to server
        socket.broadcast.emit('updateFromServer',msg) //send the square location and event to user 2
    })
    //const playerSymbol = {"0" : "X", "1" : "O"}
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});