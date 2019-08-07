module.exports = (io) => {
  // Un client se connecte
  io.on('connection', connection);
};

/**
 *  Gestion de la connexion d'un nouveau client
 */
function connection(socket) {
    console.log('Un nouveau client se connecte');

    socket.on('nouveau-message', newMessage);
}

/**
 * Nouveau message reçu
 * @param objet
 */
function newMessage(objet) {
    console.log('Nouveau message reçu : ' + objet.message);
}