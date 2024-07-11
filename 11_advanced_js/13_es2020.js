// bigint - allows calculations of larger numbers. Not scientific.
Number.MAX_SAFE_INTEGER;
// use bigInt for numbers larger than the max safe integer
typeof BigInt;

typeof 1n; // bigint

// optional chaining operator ?

let will_pokemon = {
  pikachu: {
    species: 'Mouse Pokemon',
    height: 0.4,
    weight: 6,
  },
};

let andrei_pokemon = {
  raichu: {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30,
    power: '',
  },
};

let weight = will_pokemon.pikachu.weight;

//lets a check to be done if the object exists before trying to move on. if it does we get what we want, if it doesn't we get back undefined.
let weight2 = andrei_pokemon?.pikachu?.weight;

console.log('weight: ', weight);
console.log('weight2: ', weight2);

// nullish coalescing operator ??

// The nullish coalescing operator (??) in JavaScript is used to provide a default value when dealing with null or undefined. It is useful for situations where you want to explicitly handle null and undefined values without mistakenly catching falsy values like 0, false, or an empty string ('').
// Like an || but will allow through an empty string, 0, or false. WIll check for undefined or null

let andrei_pokemon = {
  pikachu: {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30,
    power: 'lightning',
  },
};

let power = andrei_pokemon?.pikachu?.power ?? 'no power';
console.log(power);

let name = '';
let defaultName = 'Guest';

let currentName = name || defaultName;
console.log(currentName); // Output: 'Guest' (because '' is falsy)

currentName = name ?? defaultName;
console.log(currentName); // Output: '' (because '' is neither null nor undefined)

function greetUser(name) {
  let userName = name ?? 'Guest';
  console.log(`Hello, ${userName}!`);
}

greetUser('Alice'); // Output: Hello, Alice!
greetUser(null); // Output: Hello, Guest!
greetUser(undefined); // Output: Hello, Guest!
greetUser(''); // Output: Hello, !
greetUser(0); // Output: Hello, 0!
greetUser(false); // Output: Hello, false!

//  Promise.allsettled
// globalThis
