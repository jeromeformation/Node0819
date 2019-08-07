// On récupère Express
const express = require('express');
const app = express();
// Parse du corps de la requête
const bodyParser = require('body-parser');
// Surcharge de la méthode HTTP pour les méthodes RESTFUL
const methodOverride = require('method-override');
// Récupération de web-socket-io
const socketIO = require('socket.io');
const tchatServer = require('./web-socket-io/tchat-server.js');
// HTTP
const http = require('http');

// On récupère nos routes
const indexRouter = require(__dirname + '/routes/index-router.js');
const apiRouter = require(__dirname + '/routes/api-router.js');
const tchatRouter = require(__dirname + '/routes/tchat-router.js');

// Initialisation du moteur de templates
app.set('view engine', 'pug');

// Ressources statiques
app.use(express.static('public'));
app.use('/socketio', express.static('node_modules/socket.io-client/dist'));

// Les middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method
    }
}));

// Gestion de web-socket-io
let io = socketIO();
tchatServer(io);

// Routage
app.use('/', indexRouter);
app.use('/api/products', apiRouter);
app.use('/tchat', tchatRouter);

// Création du serveur HTTP
const server = http.createServer(app);
// Lancement du serveur sur le port 3000
server.listen(3000, () => console.log("Serveur web lancé sur http://localhost:3000"));
// SocketIO écoute le serveur
io.listen(server);