// Récupération du module d'événéments
const events = require('events');
// Récupération de la classe pouvant émettre des événements
const EventEmitter = events.EventEmitter;

module.exports = class Match extends EventEmitter {
    constructor() {
        super();
        // Lors d'un ajout de points => le nombre de points augmente
        this.addListener('newPoint', this.addPoints);
        // Le nombre de paniers
        this.recap = {
            doranco: 0,
            lakers: 0
        };
    }

    /**
     * Ajoute les points à l'équipe donnée
     * @param points
     * @param team
     * @param last
     */
    addPoints(points, team, last = false)  {
        setTimeout(() => {
            // On ajoute les points à l'équipe concernée
            this.recap[team] += points;

            // Si c'est le dernier panier, on affiche un récap
            if (last) {
                this.getFinalRecap();
            }
        } ,100);
    }

    /**
     * Logue les points de chaque équipe
     */
    getFinalRecap() {
        // Tant qu'on a des jetons c'est pas fini
        Object.keys(this.recap)
            .forEach(team => console.log(`${team} : ${this.recap[team]} points `));
    }

};