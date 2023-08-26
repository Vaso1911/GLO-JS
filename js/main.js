const arr = ['24', '333', '467', '98', '44', '2456', '12']

arr.forEach(e => {
  if (e.slice(0, 1) === '2' || e.slice(0, 1) === '4') {

    if (e.slice(0, 1) === '2') {
      console.log(`${e} Это число начинается на 2`);
    } else {
      console.log(`${e} Это число начинается на 4`);
    }

  }
})

for (let i = 2; i <= 100; i++) {
  let simple = true

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      simple = false; 
      break;
    }
  }

  if (simple) {
    console.log(`У числа ${i} Делители этого числа: 1 и ${i}`);
  }
}
