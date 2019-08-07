console.log('Chargement du JS côté navigateur');

// Etablissement du lien entre le navigateur et le serveur
let socket = io(); // émettre l'événement "connection"

socket.emit('nouveau-message', {message: 'Bonjour !'});