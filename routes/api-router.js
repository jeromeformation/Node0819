// On récupère le routeur
const express = require('express');
const router = express.Router();

// Modification du produit
/*
router.put(
    '/produit/edit',
    (req, res, next) => {
        console.log('Accès à l\'API');
        next();
    },
    (req, res) => {
        // Récupération des variables POST
        const datas = req.body;
        console.log(datas);

        res.json({
            message: 'Le produit a bien été modifié'
        });
    }
);
*/

router.route('/')
    .get((req, res) => res.json({'message': 'Liste des produits'}))
    .post((req, res) => res.json({'message': 'Création d\'un produit'}))
    .put((req, res) => res.json({'message': 'Mis à jour du produit'}))
    .delete((req, res) => res.json({'message': 'Liste des produits'}))
;
// ":id" est une variable de l'URL
router.get('/:id', (req, res) => {
    // Récupération de l'id envoyé dans l'URL
    const id = req.params.id;
    res.json({
        'data': {
            id: id
        },
        'message': 'Détail du produit'
    });
});

// On exporte le routeur
module.exports = router;



