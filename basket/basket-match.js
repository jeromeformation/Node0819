const Match = require('./Match.js');

const match1 = new Match();

console.log('Début du match');
match1.emit('newPoint', 2, 'doranco'); // 1s
match1.emit('newPoint', 3, 'doranco'); // 5s
match1.emit('newPoint', 2, 'lakers'); // 10s
match1.emit('newPoint', 1, 'doranco', true); // 2s