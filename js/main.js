const num = 266219;
const numSplit = String(num).split('').map(Number);
const numSplitMult = numSplit.reduce( (acc, value) => acc * value, 1);

console.log(` ${ numSplitMult }`);

let numDegree = numSplitMult
for (let i = 1; i < 3; i++) {
  numDegree *= numSplitMult; // надеюсь я правильно понял про оператор и использовал только 1 (*)
}

console.log( String(`${numDegree}`.slice(0, 2)) );
