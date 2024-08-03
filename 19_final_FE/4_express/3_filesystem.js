// NOTE in package.json change the start script to this file in order to run it.

// fs - built into node
const fs = require('fs'); // stands for file system

//method readFile - reads a file the first param is the path to the file. Have to add in toString() does utf8 that is a type of encoding that reads text and gives us back characters as we expect them. can put in toString('arg') where arg is the type that you want back. Default is utf8. Could be ASCII...
fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('error');
    throw err;
  }
  console.log(data.toString());
});

// this is same type of thing but, runs synchronously. It actually happens first. then the .readFile above. The above has a callback function so goes on call stack and then when rest of stuff is done callback happens. The below says wait here while I read this and then continue on. So this happens first.
// which to use. the above is preferable because if you have a massive file, it happens in the background while the below will hold everything up reading the file.
const file = fs.readFileSync('./hello.txt');
console.log(file.toString());

// can append to a file to add more text
// fs.appendFile('./hello.txt', ' This is added in', (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

//write - creates a new text file.
fs.writeFile('bye.txt', 'good bye...', (err) => {
  if (err) {
    console.log(err);
  }
});

// Delete
fs.unlink('./bye.txt', (err) => {
  if (err) {
    console.log(err);
  }
});

// with the above you can now read files, write to them, append to them and remove them.
