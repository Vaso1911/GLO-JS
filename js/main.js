const num = 266219;
const numSplit = String(num).split('').map(Number).reduce( (acc, value) => acc * value, 1);


console.log(` ${numSplit}`);

let numDegree = numSplit
for (let i = 1; i < 3; i++) {
  numDegree *= numSplit; // надеюсь я правильно понял про оператор и использовал только 1 (*)
}

console.log( String(`${numDegree}`.slice(0, 2)) );
