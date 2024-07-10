// ternary

// very good for a simple check for a condition with two simple results. can still be done with an if/else.
// condition ? expr1 : expr2 - means that if the the condition

function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? 'you may enter' : 'access denied';

// switch
// like an if else as well but cleaner for certain uses. break is a keyword that exits the switch statement.

function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case 'forward':
      whatHappens = 'you encounter a monster';
      break;
    case 'back':
      whatHappens = 'you arrived home';
      break;
    case 'right':
      whatHappens = 'you found a river';
      break;
    case 'left':
      whatHappens = 'you run into a troll';
      break;
    default:
      whatHappens = 'please enter a valid direction';
  }
  return whatHappens;
}

moveCommand('forward');
