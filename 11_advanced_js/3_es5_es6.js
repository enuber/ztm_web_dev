// let and const
// new way to declare variables

// const - constant, can't be changed. Should be using this unless you know the variable is going ot change. However with objects/arrays you can reassign them but, you can change properties/methods inside of them.

// let - is block scoped. can be changed.

// const player = 'bobby';
// let experience = 100;
// let wizardLevel = false;

// if (experience > 90) {
//   let wizardLevel = true;
// }

// Destructuring

const obj = {
  player: 'bobby',
  experience: 90,
  wizardLevel: false,
};

// OLD WAY
// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

// NEW WAY with obj desctructuring
const { player, experience } = obj;
let { wizardLevel } = obj;

const name = 'john snow';

const newObj = {
  [name]: 'hello',
  ['ray' + 'smith']: 'hihi',
};

// so newObj will now give us 3: hihi and john snow: 'hello'

const a = 'simon';
const b = true;
const c = {};

const obj2 = {
  a,
  b,
  c,
};

// if key/value is same name only have to put it once. will now hold a:simon, b:true, c: {}

// TEMPLATE STRINGS

// old way
// const greeting = "hello " + name + " you seem to be doing " + mood;

// new way
// const greeting = `Hello ${name} you seem to be doing ${mood}`;

// Default arguments, can assign something to fall back on if nothing was provided. If you don't provide a value, the default will show up instead.
function greet(name = '', age = 30, pet = 'cat') {
  return `Hi ${name}, you seem to be ${age} years old. Nice ${pet}`;
}

// Symbol - data type, create completely unique types. Never going to be any conflict. Used mainly as an identifier for object properties. Not used often.

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

sym2 === sym3; //false

// arrow functions
// short hand functions. if only one line you can remove the {}, if it is a single line return, can also leave the return off. If only one variable being passed in, can leave off the ()

const add = (a, b) => a + b;
