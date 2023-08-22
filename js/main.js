'use strict'
const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать? (Простые, Сложные, Интерактивные)");
const screenPrice = parseFloat(prompt("Сколько будет стоить данная работа?"));
const rollback = 15;
const adaptiveInput = prompt("Нужен ли адаптив на сайте?");
const adaptive = Boolean(adaptiveInput);

const service1 = prompt("Какой дополнительный тип услуги нужен? (первый вопрос)");
const servicePrice1 = parseFloat(prompt("Сколько это будет стоить? (первый вопрос)"));
const service2 = prompt("Какой дополнительный тип услуги нужен? (второй вопрос)");
const servicePrice2 = parseFloat(prompt("Сколько это будет стоить? (второй вопрос)"));
const zeroServicePrice1 = !isNaN(servicePrice1) ? servicePrice1 : 0;
const zeroServicePrice2 = !isNaN(servicePrice2) ? servicePrice2 : 0;
const fullPrice = screenPrice + zeroServicePrice1 + zeroServicePrice2;
console.log(fullPrice);
const servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));

console.log("Название проекта:", title);
console.log("Типы экранов:", screens);
console.log("Стоимость работы:", screenPrice);
console.log("Адаптив на сайте:", adaptive);
console.log("Итоговая стоимость после отката:", servicePercentPrice);

if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice <= 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice > 0 && fullPrice <= 15000) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что-то пошло не так");
}



