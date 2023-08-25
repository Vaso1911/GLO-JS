'use strict';
let title = prompt("Как называется ваш проект?", "EEEE");
let screens = prompt("Как ?", "bbb");
let screenPrice = +prompt("коКа?", 15000);
let adaptive = prompt("?", "E");
let rollback = 15
// let service1
let allServicePrices
let fullPrice
let servicePercentPrices


const getAllServicePrices = function () {
  let sum = 0
  for(let i = 0; i < 2; i++) {
    sum += +prompt("Сколько это будет стоить?") 
  }
   return sum
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
}

const getFullPrice = function() {
  return screenPrice + allServicePrices;
};

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

const getTitle = () => {
  title = title.trim();
  title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();

  return title;
}

function getServicePercentPrices() {
  return Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
}

// const servicePercentPrice = 'Итоговая стоимость ' + getServicePercentPrices()



const getRollbackMessage = function (price) {
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (price > 15000 && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (price > 0 && price <= 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  }
}

allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrices = getServicePercentPrices()
title = getTitle()

// asking()
showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log('allServicePrices', allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(servicePercentPrices);
console.log('стоимость верстки экранов ' + screenPrice + 'руб и стоимость разработки сайта '  + fullPrice + ' руб');


// const asking = function () {
//   title = prompt("Как называется ваш проект?");
//   screens = prompt("Какие типы экранов нужно разработать? (Простые, Сложные, Интерактивные)");

//   do {
//     screenPrice = +prompt("Сколько будет стоить данная работа?");
//   } while (!isNumber(screenPrice))

//   adaptive = confirm("Нужен ли адаптив на сайте?");
//   // service1 = prompt("Какой дополнительный тип услуги нужен? (первый вопрос)");
//   // servicePrice1 = +prompt("Сколько это будет стоить? (первый вопрос)");
//   // service2 = prompt("Какой дополнительный тип услуги нужен? (второй вопрос)");
//   // servicePrice2 = +prompt("Сколько это будет стоить? (второй вопрос)");

// }

//  сумма всех дополнительных услуг
// const getAllServicePrices = function () {
//   return servicePrice1 + servicePrice2;
// };

// const allServicePrices = getAllServicePrices();

//  сумма стоимости верстки и стоимости дополнительных услуг
// function getFullPrice() {
//   return screenPrice + allServicePrices;
// };

// const fullPrice = getFullPrice();

// преобразуем title






