const socket = io.connect('http://localhost:8080');

var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    sendButton = document.getElementById('send'),
    output = document.getElementById('output');

sendButton.addEventListener('click', function() {
    socket.emit('chat', {
        handle: handle.value,
        message: message.value
    });
});

socket.on('chat', function(data) {
    output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});