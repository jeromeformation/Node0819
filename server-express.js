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

// Initialisation du moteur de templates
app.set('view engine', 'pug');

// Les middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use(express.static('public'));

// Routage
app.use('/', indexRouter);
app.use('/api', apiRouter);

// Lancement du serveur
app.listen(3000, () => console.log("Serveur web lancé sur http://localhost:3000"));