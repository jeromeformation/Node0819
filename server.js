// Récupération du module HTTP
const http = require("http");

// Création du serveur web
const server = http.createServer((req, res) => {
    // Récupération de l'url
    const route = req.url;

    // Système de routage
    if (route === '/') {
        res.write('<h1>Page d\'accueil</h1>');
    } else if(route === '/contact') {
        res.write('<h1>Page de contact</h1>');
    } else {
        // Définition du statut
        res.statusCode = 404;

        res.write('<h1>Page 404 : Not Found !</h1>');
    }

    // Envoi de la réponse au navigateur
    res.end();
});

server.on('listening', () => {
    console.log("Serveur web lancé sur http://localhost:3000");
});

// Lancement du serveur
server.listen(3000);
