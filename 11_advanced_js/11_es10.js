// flat() used on arrays

// flat flattens out nested arrays. one level deep

const arr = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11]]];

arr.flat();
arr.flat(2); //will flatten to two layers by adding the number in

//can clean up data by removing the empty places
const enteries = ['bob', 'sally', , , , , 'cindy'];

enteries.flat();

// flatMap()
// allows flat and map on an array but only to a depth of one.

const arrFlatMap = arr.flatMap((num) => num + 10);
console.log(arrFlatMap); // doesn't do what is expected because it is multiple levels deep

// trimStart() trimEnd()
userEmail = '        eddytheeagle@gmail.com';
useremail2 = 'sdflkjjfdsl@sdf.com      ';
userEmail.trimStart();
useremail2.trimEnd();

// fromEnteries, turns this array into an object with the username being the key and age being the value

const userProfiles = [
  ['commanderTom', 23, true],
  ['derekZlander', 40],
  ['handsel', 32],
];

Object.fromEntries(userProfiles);

// try catch block - in the catch area you know longer have to pass in an error catch (error) is just catch
