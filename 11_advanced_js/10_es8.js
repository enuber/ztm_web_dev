// .padStart() .padEnd()

'Turtle'.padStart(10);
'Turtle'.padEnd(10);

//ending comma - just there if you happen to leave a comma after last parameter/arguement won't throw an error.

const fun = (a, b, c, d) => {
  console.log(a);
};
fun(1, 2, 3, 4);

// Object.values Object.enteries Object.keys

let obj = {
  username0: 'Santa',
  username1: 'Rudolph',
  username2: 'Grinch',
};

Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
});

Object.values(obj).forEach((value) => {
  console.log(value);
});

Object.entries(obj).forEach((value) => {
  console.log(value);
});

Object.entries(obj).map((value) => {
  return value[1] + value[0].replace('username', '');
});
