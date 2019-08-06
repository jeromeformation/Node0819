// On récupère Express
const express = require('express');
const app = express();

// Initialisation du moteur de templates
app.set('view engine', 'pug');

// Les middlewares
app.use(express.static('public'));

// Routage
app.get('/', (req, res) => {
    res.render('index.pug', {
        name: 'John Doe',
        said: 'Saïd'
    });
});

// Lancement du serveur
app.listen(3000, () => console.log("Serveur web lancé sur http://localhost:3000"));