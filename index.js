const express = require('express');
const socket = require('socket.io');

const app = express();
app.set('port', (process.env.PORT || 8080));

app.use(express.static('public'));

const server = app.listen(app.get('port'), function() {
    console.log('Server started successfully');
});


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