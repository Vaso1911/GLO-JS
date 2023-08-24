'use strict';
let title,
  screens,
  screenPrice,
  adaptive
// const rollback = 15;

// const service1 = prompt("Какой дополнительный тип услуги нужен? (первый вопрос)");
// const servicePrice1 = +prompt("Сколько это будет стоить? (первый вопрос)");
// const service2 = prompt("Какой дополнительный тип услуги нужен? (второй вопрос)");
// const servicePrice2 = +prompt("Сколько это будет стоить? (второй вопрос)");


const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}


const asking = function () {
  title = prompt("Как называется ваш проект?");
  screens = prompt("Какие типы экранов нужно разработать? (Простые, Сложные, Интерактивные)");

  do {
    screenPrice = +prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice))

  adaptive = confirm("Нужен ли адаптив на сайте?");
  
}




// //  сумма всех дополнительных услуг
// const getAllServicePrices = function () {
//   return servicePrice1 + servicePrice2;
// };

// const allServicePrices = getAllServicePrices();

// //  сумма стоимости верстки и стоимости дополнительных услуг
// function getFullPrice() {
//   return screenPrice + allServicePrices;
// };

// const fullPrice = getFullPrice();

// // преобразуем title
// const getTitle = () => {
//   title = title.trim();
//   title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();

//   return title;
// }
// // итоговая стоимость за вычетом процента отката
// function getServicePercentPrices() {
//   return Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
// }

// const servicePercentPrice = 'Итоговая стоимость ' + getServicePercentPrices()

// const showTypeOf = function (variable) {
//   console.log(variable, typeof variable);
// }

// const getRollbackMessage = function (price) {
//   if (price > 30000) {
//     return "Даем скидку в 10%";
//   } else if (price > 15000 && price <= 30000) {
//     return "Даем скидку в 5%";
//   } else if (price > 0 && price <= 15000) {
//     return "Скидка не предусмотрена";
//   } else {
//     return "Что-то пошло не так";
//   }
// }

// showTypeOf(getTitle())
// showTypeOf(screenPrice)
// showTypeOf(adaptive)

// console.log(getRollbackMessage(fullPrice));
// console.log(servicePercentPrice);