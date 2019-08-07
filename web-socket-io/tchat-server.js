module.exports = (io) => {
  // Un client se connecte
  io.on('connection', connection);
};

/**
 *  Gestion de la connexion d'un nouveau client
 */
function connection(socket) {
    console.log('Un nouveau client se connecte');
    socket.on('tchatConnection', (data) => {
        tchatConnection(data, socket);
    });
}
// On stocke tous les clients CONNECTES dans le tableau
// todo: gérer la suppression de la clef lors d'une déconnexion
let clients = [];

function tchatConnection(data, socket) {
    // On stocke le client
    clients[socket.id] = data.username;
    // On envoie les derniers messages pour initialiser le tchat
    socket.emit('initTchat', {
        messages: []
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
