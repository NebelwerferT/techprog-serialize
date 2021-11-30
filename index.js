import serialize from "./serialize.js";
import { Hero, Enemy } from "./objects.js";
import deserialize from "./deserialize.js";
import saveJSON from "./saveJSON.js";
import extractJSON from "./extractJSON.js";


const hero = new Hero('Horus', 10, 10, 0, undefined, 'Knight armor', 'village', 'Сhopping blow');
const enemy = new Enemy('Dagon', 8, 10, 5, undefined, 'Mantle', 'town', 'Spell book');
const enemy2 = new Enemy('Dagon2', 8, 10, 5, undefined, '55', 'town', 'Spell book');
const enemy3 = new Enemy('Dagon3', 8, 10, 5, undefined, '75', 'town', 'Spell book');

console.log(hero, enemy);

saveJSON(serialize([hero, enemy, enemy2, enemy3]), 'sObj');
(extractJSON('sObj').then(data => console.log(deserialize(data))));

// (extractJSON('sObj').then(data => (deserialize(data)).forEach(element => {
//  console.log(element.constructor.name)
// })));