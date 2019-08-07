module.exports = (io) => {
  // Un client se connecte
  io.on('connection', connection);
};

/**
 *  Gestion de la connexion d'un nouveau client
 */
function connection(socket) {
    console.log('Un nouveau client se connecte');
    socket.on('nouveau-message', (data) => {
        newMessage(data, socket);
    });
}

/**
 * Nouveau message reçu
 * @param objet
 * @param socket
 */
function newMessage(objet, socket) {
    console.log('Nouveau message reçu : ' + objet.message);
    // On envoie un message de confirmation au navigateur
    socket.emit('confirm', {status: 'ok'});
}
