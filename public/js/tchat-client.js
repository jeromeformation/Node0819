$(function(){
    console.log('Chargement du JS côté navigateur');
    // On cache le tchat
    const tchat = $("#tchat");
    tchat.hide();

    // Etablissement du lien entre le navigateur et le serveur
    let socket = io(); // émettre l'événement "connection"

    // Gestion connexion au tchat
    $('#tchatConnection').on('submit', tchatConnection);

    /**
     * Gestion du formulaire de connexion au tchat
     * - On envoie le nom d'utilisateur au serveur
     * @param event
     */
    function tchatConnection(event) {
        // On empêche le rechargement de la page (envoi des données)
        event.preventDefault();
        // Récupération du nom de l'utilisateur
        const username = $("#username").val();
        // Envoi du nom d'utilisateur au serveur
        socket.emit('tchatConnection', {username: username});
        // Lorsque que le serveur est ok : il nous répond
        socket.on('initTchat', initTchat);
    }

    /**
     * Cache le formulaire de connexion et affichage le tchat
     * todo : afficher les derniers messages envoyés
     * @param datas
     */
    function initTchat(datas) {
        // On cache le formulaire et on affiche le tchat
        $('#tchatConnection').fadeOut(() => tchat.fadeIn());
    }

    /*
    // Emission d'un nouvel événement : "nouveau-message"
    // On envoie un objet qui contient le message
    socket.emit('nouveau-message', {message: 'Bonjour !'});

    socket.on('confirm', data => {
        console.log('Statut de la confirmation : ' + data.status);
    });
    */
});