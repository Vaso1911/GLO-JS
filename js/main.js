'use strict';
const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 15,
  service1: '',
  service2: '',
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrices: 0,
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор вёрстки");
    appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");

    do {
      appData.screenPrice = +prompt("Сколько будет стоить данная работа?", ' 15000   ');
    } while (isNaN(appData.screenPrice))

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");

  },
  getAllServicePrices: function () {
    let sum = 0
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен? (первый вопрос)");
      } else if (i === 1) {
        appData.service2 = prompt("Какой дополнительный тип услуги нужен? (второй вопрос)");
      }

      sum += +prompt("Сколько это будет стоить?")
    }
    return sum
  },

  getFullPrice: function () {
    return appData.screenPrice + appData.allServicePrices;
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
  },
  getTitle: () => {
    appData.title = appData.title.trim();
    appData.title = appData.title.charAt(0).toUpperCase() + appData.title.slice(1).toLowerCase();

    return appData.title;
  },
  getServicePercentPrices: function () {
    return Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
  },

  getRollbackMessage: function (price) {
    if (price > 30000) {
      return "Даем скидку в 10%";
    } else if (price > 15000 && price <= 30000) {
      return "Даем скидку в 5%";
    } else if (price > 0 && price <= 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так";
    }
  },

  logger: () => {
    console.log(appData.servicePercentPrices);
    console.log('стоимость верстки экранов ' + appData.screenPrice + 'руб и стоимость разработки сайта ' + appData.fullPrice + ' руб');
    for (let key in appData) {
      console.log(key);
    }
  },

  start: () => {
    appData.asking()
    appData.allServicePrices = appData.getAllServicePrices()
    appData.fullPrice = appData.getFullPrice()
    appData.servicePercentPrices = 'Итоговая стоимость ' + appData.getServicePercentPrices()
    appData.title = appData.getTitle()
    appData.logger()
  }
}

appData.start()






