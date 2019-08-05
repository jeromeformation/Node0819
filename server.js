// Récupération du module HTTP
const http = require('http');

// Création du serveur web
const server = http.createServer(
    (req, res) => {
        res.end('<h1>Hola !</h1>');
    }
);

// Lancement du serveur
server.listen(3000);