// Récupération des modules
const http = require("http");
const url = require("url");
const querystring = require("querystring");
const fs = require('fs');

/**
 * Envoi le fichier sélectionné dans la réponse donnée
 * @param res
 * @param filename
 */
function render(res, filename) {
    fs.readFile(
        filename,
        {
            encoding: "utf8",
            flag: 'r'
        },
        (err, datas) => {
            res.end(err || datas);
        }
    )

}

// Création du serveur web
const server = http.createServer();

// Lors d'une requête, on active le routage
server.on('request',(req, res) => {
    // Récupération de l'url
    const objRoute = url.parse(req.url);
    const route = objRoute.pathname.toLowerCase();
    // Système de routage
    if (route === '/') {
        render(res, __dirname + '/templates/index.html');
    } else if(route === '/contact') {
        res.end('<h1>Page de contact</h1>');
    } else if(route === '/blog') {
        // Récupération des variables GET
        const gets = querystring.parse(objRoute.query);
        // Récupération du numéro de la page
        const page = gets.page || 1;

        res.end(`<h1>Blog : page ${page}</h1>`);
    } else {
        // Définition du statut
        res.statusCode = 404;

        res.end('<h1>Page 404 : Not Found !</h1>');
    }

    // Renvoi de la réponse au navigateur
    //res.end();
});

// Une fois que le serveur est en écoute, on affiche un message
server.on('listening', () => {
    console.log("Serveur web lancé sur http://localhost:3000");
});

// Lancement du serveur
server.listen(3000);
