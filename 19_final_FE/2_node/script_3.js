let a;
if (true) {
  //because of top level await we can do this as well. can await the import of what we need from another file.
  //while this if statement will always run, this does mean that we can load modules if a condition is actually met so we aren't wasting resources on importing something that we don't need.
  const { largeNum } = await import('./script_2.js');
  a = largeNum;
}
const b = 5;

console.log(a, b);
