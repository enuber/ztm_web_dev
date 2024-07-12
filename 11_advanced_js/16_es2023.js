const ztmMonsters = [
  { id: 1, monster: 'Mr. Mouse', level: 1 },
  { id: 2, monster: 'Mac', level: 30 },
  { id: 3, monster: 'Denodude', level: 17 },
  { id: 4, monster: 'Pye', level: 5 },
];

// pick monster that is level 15 or higher and then pick the last one.

// old way to do this
const advancedMonsters = ztmMonsters.filter((item) => item.level > 15);
console.log(advancedMonsters);
console.log(advancedMonsters[advancedMonsters.length - 1]);

//new way with findlast()

ztmMonsters.findLast((item) => item.level > 15);

// findLastIndex() - gives index of last item that fits what you are looking for.

ztmMonsters.findLastIndex((item) => item.level > 15);

ztmMonstersArr = ['mr. mouse', 'mac', 'denodude', 'pye'];

// Not modifying original array.
// ztmMonstersArr.reverse(); // this mutates the array meaning changes it permanently.

// now can do this and doesn't mutate the original array.
ztmMonstersArr.toReversed();

// toSorted, toSpliced - also don't mutate original array
ztmMonstersArr.toSorted(); //sorts without mutating

ztmMonstersArr.toSpliced(2, 1); //splices without mutating

// .with() - give first param and modify it with something else. Basically replaces something at an index with what is given in second param
ztmMonstersArr.with(1, 'ghost');
