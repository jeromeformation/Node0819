// On récupère le routeur
const express = require('express');
const router = express.Router();

// Page d'accueil
router.all('/produit/edit', (req, res) => {
    // Récupération des variables POST
    const datas = req.body;
    console.log(req);
    console.log(datas);

    res.json({
        message: 'Le produit a bien été modifié'
    });
});

// On exporte le routeur
module.exports = router;