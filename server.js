// Récupération du module HTTP
const http = require("http");

// Création du serveur web
const server = http.createServer(
    (req, res) => {
        res.end('<h1>Bonjour !</h1>');
    }
);

// Lancement du serveur
server.listen(3000, () => {
    console.log("Serveur web lancé sur http://localhost:3000");
});
