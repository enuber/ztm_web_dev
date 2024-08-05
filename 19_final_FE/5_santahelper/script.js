// 1 - what floor does santa end up on
// ( - goes up 1 floor
// ) - goes down 1 floor

const fs = require('fs');

function question1() {
  fs.readFile('./santa_movement.txt', (err, data) => {
    console.time('santa-time');
    const directions = data.toString();
    const directionsArray = directions.split('');
    const answer = directionsArray.reduce((acc, currentValue) => {
      if (currentValue === '(') {
        return (acc += 1);
      } else if (currentValue === ')') {
        return (acc -= 1);
      }
    }, 0);
    console.timeEnd('santa-time');
    console.log(answer);
  });
}

question1();

// 2 what is the index of the first character to send him to the basement.

function question2() {
  fs.readFile('./santa_movement.txt', (err, data) => {
    console.time('santa-time');
    const directions = data.toString();
    const directionsArray = directions.split('');
    let acc = 0;
    let counter = 0;
    const answer = directionsArray.some((currentItem) => {
      if (currentItem === '(') {
        acc += 1;
      } else if (currentItem === ')') {
        acc -= 1;
      }
      counter++;
      return acc < 0;
    });
    console.timeEnd('santa-time');
    console.log(counter);
  });
}

question2();
