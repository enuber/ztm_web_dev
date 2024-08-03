// modules

// 1) modules that you import and export

// import largeNum from './script_2.js';
// export default largeNum;

// 2) built in modules - preinstalled with node

// fs - file system, it comes with a lot of things but that is what it stands for. Allows you to read text files and read through it. Like how many times a word appears.
// ex: const c = require('fs');
// console.log(c)

// const c = require('fs').readFile

// another popular on is http. This allows you to set up a server.
// const c = require('http');
// console.log(c);

// 3) a package, something you install with npm. Like nodemon.
// npm init -y
// npm i nodemon --save-dev

// then in package.json add

// 'scripts': {
//   'start': 'nodemon'
// }

// when you run npm start in the terminal it will run your file, show it starts and exits but if you make changes, it will automatically rerun. nice package to run where you don't have to keep typing and starting your file.

//don't have to add the script, can also just run it in the terminal as
// nodemon app.js <--- your file name to watch
