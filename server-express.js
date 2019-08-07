// On récupère Express
const express = require('express');
const app = express();
// Parse du corps de la requête
const bodyParser = require('body-parser');
// Surcharge de la méthode HTTP pour les méthodes RESTFUL
const methodOverride = require('method-override');

// On récupère nos routes
const indexRouter = require(__dirname + '/routes/index-router.js');
const apiRouter = require(__dirname + '/routes/api-router.js');
const tchatRouter = require(__dirname + '/routes/tchat-router.js');

// Initialisation du moteur de templates
app.set('view engine', 'pug');

// Les middlewares
app.use(express.static('public'));
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


// Routage
app.use('/', indexRouter);
app.use('/api/products', apiRouter);
app.use('/tchat', tchatRouter);

// Lancement du serveur
app.listen(3000, () => console.log("Serveur web lancé sur http://localhost:3000"));