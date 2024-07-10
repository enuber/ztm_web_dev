// LOOPS

var todos = [
  'clean room',
  'brush teeth',
  'exercise',
  'eat healthy',
  'study JS',
];

for (var i = 0; i < todos.length; i++) {
  console.log(i, todos[i]);
}

todos.forEach(function (item, index) {
  console.log(item, index);
});

var counter = 0;
while (counter < 10) {
  console.log(counter);
  counter++;
}

var counter2 = 10;
do {
  console.log(counter2);
  counter2--;
} while (counter2 > 0);
