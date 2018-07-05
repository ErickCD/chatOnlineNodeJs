const io = require('socket.io');

module.exports = function (server) {
    var sockets = io.listen(server);

    sockets.on('connection', function (socket) {
        console.log('Nuevo cliennte conectado');

        socket.on('mensaje-del-cliente', function (data) {
            //console.log(data);
            sockets.emit('mensaje-del-servidor', data);
        });
    });
};