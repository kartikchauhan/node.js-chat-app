const express = require('express');
const socket = require('socket.io');

const app = express();

const server = app.listen(8080, function() {
    console.log('Server started successfully');
});

app.use(express.static('public'));

const io = socket(server);

io.on('connection', function(socket) {
    console.log('new socket connection setup successfully with socket id ', socket.id);

    socket.on('chat', function(data) {
        io.sockets.emit('chat', data);
    });

    socket.on('typing', function(data) {
        socket.broadcast.emit('typing', data);
    });
});