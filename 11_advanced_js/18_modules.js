// https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/

// modules - each piece is really good at doing one thing.
// with es6 we have two new things.
//export and impot

// js1
// export multiple functions from a file.
export const add = (a, b) => a + b;
// or if just one main thing can be a default
export default function add() {
  return a + b;
}

//js2
// import multiple functions using destructuring
import { add } from './add';
// or if it was a default function like this.
import add from './add';
