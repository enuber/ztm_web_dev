// to run this file from node in terminal simply type
// node script.js
// provided you are in the folder you have your script file in. else you need to specificy the full link
// once it reads the file it runs process.exit() automatically.

// to check if something exists in the terminal you do
// node
// > global.setTimeout
// this will let you know that there is a function

// until recently you couldn't use import from a different file, node.js didn't understand this. to get around this, have to do it a different way

// import largeNum from './script_2.js'; <--- can do this or

import { largeNum } from './script_2.js';

// const stuff = require('./script_2'); <--- old way. also have to access largeNum as stuff.largeNum

const a = largeNum;
const b = 5;

// setTimeout(() => {
//   console.log(a + b);
// }, 3000);

console.log(a + b);

// __dirname = useful for telling you were you are located

// console.log(__dirname);
