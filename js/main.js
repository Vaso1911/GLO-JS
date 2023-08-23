let testString = '  Это строка и она имеет более тридцати символов  ';
let testNotString = 123;
let testStringTrim = testString.trim();

const validString = function (arg) {
  if (typeof arg !== "string") {
    return console.log('Это не строка');
  } else {
    console.log('Это строка');
  }
}

const convertString = function (str) {
  if (str.length > 30) {
    console.log(str.slice(0, 30) + '...');
  }
}

validString(testString);
validString(testNotString);
convertString(testStringTrim);