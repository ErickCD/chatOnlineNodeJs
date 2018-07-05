//Archivo para front-end
//alert("Chat iniciado");

$(function () {
    //Socket iniciado
    var socket = io();

    //console.log("Cargado");
    //variables
    var message = $('#chat-message');
    var chat = $('#chat');

    message.focus();

    $('#message-box').submit(function (e) {
        e.preventDefault();
       //console.log(message.val());
        //chat.append(message.val() + "<br>");
        socket.emit('mensaje-del-cliente', message.val());
        message.val('');
    });

    socket.on('mensaje-del-servidor', function (data) {
        //console.log(data);
        chat.append(data + "<br>");
    })
});
