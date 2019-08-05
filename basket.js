// Récupération du module d'événéments
const events = require('events');
// Récupération de la classe pouvant émettre des événements
const EventEmitter = events.EventEmitter;

// Création du match de basket
const match = new EventEmitter();

// Le nombre de paniers
let recap = {
    doranco: 0,
    lakers: 0
};

// Lors d'un ajout de points => le nombre de points augmente
match.addListener('newPoint', (points, team, last = false) => {
    setTimeout(() => {
        // On ajoute les points à l'équipe concernée
        recap[team] += points;

        // Si c'est le dernier panier, on affiche un récap
        if (last) {
            // Tant qu'on a des jetons c'est pas fini
            Object.keys(recap).forEach(team => console.log(`${team} : ${recap[team]} points `));
        }
    } ,100);
});

match.once('end', () => console.log('match terminé !'));

/********************************/
/***** DEBUT DU MATCH ****/
/********************************/

console.log('Début du match');
match.emit('newPoint', 2, 'doranco'); // 1s
match.emit('newPoint', 3, 'doranco'); // 5s
match.emit('newPoint', 2, 'lakers'); // 10s
match.emit('newPoint', 1, 'doranco', true); // 2s

match.emit('end');
