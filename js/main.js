'use strict';
let title
let screens
let screenPrice
let adaptive
let rollback = 15
let service1
let service2
let allServicePrices
let fullPrice
let servicePercentPrices

// Задаём вопросы через функцию + цикл с проверкой
const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор вёрстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");

  do {
    screenPrice = +prompt("Сколько будет стоить данная работа?", ' 15000   ');
    screenPrice = isNumber(screenPrice) ? parseFloat(screenPrice) : NaN;
  } while (isNaN(screenPrice))

  adaptive = confirm("Нужен ли адаптив на сайте?");

}

// проходим циклом по стоимости доп услуг
const getAllServicePrices = function () {
  let sum = 0
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен? (первый вопрос)");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен? (второй вопрос)");
    }

    sum += +prompt("Сколько это будет стоить?")
  }
  return sum
};

// узнаём тип
const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
}

// сумма стоимости верстки и стоимости дополнительных услуг
const getFullPrice = function () {
  return screenPrice + allServicePrices;
};

// проверка на число , NaN , Infinity
const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

// преобразуем title
const getTitle = () => {
  title = title.trim();
  title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();

  return title;
}

// итоговая стоимость за вычетом процента отката
function getServicePercentPrices() {
  return Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
}

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

asking()

allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrices = 'Итоговая стоимость ' + getServicePercentPrices()
title = getTitle()

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
console.log('стоимость верстки экранов ' + screenPrice + 'руб и стоимость разработки сайта ' + fullPrice + ' руб');


