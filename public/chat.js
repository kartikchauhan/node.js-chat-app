const socket = io.connect('https://node-chat-app-sockets.herokuapp.com:8080');

var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    sendButton = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

sendButton.addEventListener('click', function() {    
    socket.emit('chat', {
        handle: handle.value,
        message: message.value
    });
    console.log('clearing the message');
    message.value = '';
});

message.addEventListener('keypress', function() {
    socket.emit('typing', handle.value);
});

socket.on('chat', function(data) {
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ':</strong> ' + data.message + '</p>';
});

socket.on('typing', function(data) {
    feedback.innerHTML = '<p><em>' + data + ' is typing...</em></p>';
});