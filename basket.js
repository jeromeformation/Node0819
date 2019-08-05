// Récupération du module d'événéments
const events = require('events');
// Récupération de la classe pouvant émettre des événements
const EventEmitter = events.EventEmitter;

// Création du match de basket
const match = new EventEmitter();

// Le nombre de paniers
let nbPoints = 0;

// Lors d'un ajout de points => le nombre de points augmente
match.addListener('newPoint', (points, team, callback) => {
    setTimeout(() => {
        console.log('Panier à ' + points + ' points');
        console.log('Panier de l\'équipe ' + team);
        console.log('Un panier a été détecté !');
        nbPoints++;
        console.log('Total des points : ' + nbPoints);
        // Execution de la callback
        callback()
    } ,100);
});

/********************************/
/***** DEBUT DU MATCH ****/
/********************************/

console.log('Début du match (points : ' + nbPoints + ')');
match.emit('newPoint', 2, 'Doranco', () => {
    console.log('Fin du match (points : ' + nbPoints + ')');
});

