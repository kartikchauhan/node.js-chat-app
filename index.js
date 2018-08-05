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
});