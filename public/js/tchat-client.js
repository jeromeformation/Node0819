console.log('Chargement du JS côté navigateur');

// Etablissement du lien entre le navigateur et le serveur
let socket = io(); // émettre l'événement "connection"

// Emission d'un nouvel événement : "nouveau-message"
// On envoie un objet qui contient le message
socket.emit('nouveau-message', {message: 'Bonjour !'});

socket.on('confirm', data => {
    console.log('Statut de la confirmation : ' + data.status);
});