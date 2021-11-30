// const obj = {
//     val: 'Hello',
//     func: () => console.log('Hello'),
//     [Symbol('name')]: 'Gleb',
//     obj: {
//         val: 'Hello',
//         func: () => console.log('Hello'),
//         [Symbol('name')]: 'Gleb',
//         obj: {
//             val: 'Hello',
//             func: () => console.log('Hello'),
//             [Symbol('name')]: 'Gleb',

//         },
//     },
//     date: new Date(),
// };
// export default obj;

export class Creature {
    constructor(
        name = '',
        hp = 0,
        mana = 0,
        target = null,
        money = 0,
        equipment = {
            'head': '',
            'body': '',
            'weapon': '',
        },
        location) {
        this._name = name;
        this._hp = hp;
        this._mana = mana;
        this._target = target;
        this._money = money;
        this._equipment = equipment;
        this._location = location;
    }

    deal_damage() {
        return Math.floor(Math.random() * 100)
    }

    get target() {
        return this._target;
    }

    set target(obj) {
        this._target = obj;
    }
};

export class Hero extends Creature {
    constructor(name, hp, mana, target, money, equipment, location, ability) {
        super(name, hp, mana, target, money, equipment, location);
        this._main_ability_name = '';
        this._main_ability_modifier = 0;
        this._main_ability_name = ability;
    }

    get ability_params() {
        return `${this._main_ability_name} - ${+this._main_ability_modifier} to damage`;
    }

    set ability_params(mod) {
        this._main_ability_modifier = mod;
    }

    use_spell() {
        console.log(`${this._name} использовал заклинание`)
    }

    deal_damage() {
      return Math.floor(Math.random() * 100) + 20;
    }
};

export class Enemy extends Creature {

    constructor(name, hp, mana, target, money, equipment, location) {
        super(name, hp, mana, target, money, equipment, location);
    }

    punch() {
        console.log('test3')
    }
};