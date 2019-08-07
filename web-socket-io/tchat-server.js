module.exports = (io) => {
  // Un client se connecte
  io.on('connection', connection);
};

/**
 *  Gestion de la connexion d'un nouveau client
 */
function connection(socket) {
    console.log('Un nouveau client se connecte');
}