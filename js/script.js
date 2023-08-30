const titel = document.getElementsByTagName('h1')[0]
const btns = document.getElementsByClassName('handler_btn')
const btnScreen = document.querySelector('.screen-btn')
const itemsPercent = document.querySelectorAll('.other-items.percent')
const itemsNumber = document.querySelectorAll('.other-items.number')
const inputRange = document.querySelector('.rollback > .main-controls__range > [type=range]')
const span = document.querySelector('.rollback > .main-controls__range > span')
const rightDiv = document.querySelector('main-total') 
const rightDivInputs = document.getElementsByClassName('total-input')
let screens = document.querySelectorAll('.screen')

for(let i = 0; i < rightDivInputs.length; i++) {
  console.log(rightDivInputs[i]);
}

console.log(titel);
console.log(btns);
console.log(btnScreen);
console.log(itemsPercent);
console.log(itemsNumber);
console.log(inputRange);
console.log(span);
console.dir(screens);

