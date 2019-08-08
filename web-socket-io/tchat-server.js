let allSockets;

module.exports = (io) => {
    // On rend disponible socket.io aux autres fonctions
    allSockets = io;
    // Un client se connecte
    allSockets.on('connection', connection);
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
    // On écoute l'envoi du message
    socket.on('nouveau-message', newMessage);
}

/**
 * Nouveau message reçu
 * @param objet
 */
function newMessage(objet) {
    console.log('Nouveau message reçu : ', objet);
    // On diffuse le message à tous les utilisateurs
    allSockets.emit('broadcast-message', objet);
}
