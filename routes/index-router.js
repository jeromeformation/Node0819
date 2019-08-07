// On récupère le routeur
const express = require('express');
const router = express.Router();

// Page d'accueil
router.get('/', (req, res) => {
    res.render('index.pug', {
        name: 'John Doe',
        said: 'Saïd'
    });
});

// Page de contact
router.get('/contact', (req, res) => {
    res.render('contact.pug');
});


// On exporte le routeur
module.exports = router;