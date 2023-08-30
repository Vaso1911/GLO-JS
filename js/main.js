'use strict';
const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 15,
  services: {},
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrices: 0,

  isText: function (text) {
    return typeof text === "string" && text.trim().length > 0 && /\D/.test(text);
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор вёрстки");

    for (let i = 0; i < 2; i++) {
      let name
      do {
        name = prompt("Какие типы экранов нужно разработать?");
      } while (!appData.isText(name));

      let price = 0;

      do {
        price = +prompt("Сколько будет стоить данная работа?", ' 15000   ');
      } while (isNaN(price))

      appData.screens.push({ id: i, name: name, price: price })

    }

    for (let i = 0; i < 2; i++) {
      let name

      do {
        name = prompt("Какой дополнительный тип услуги нужен?");
      } while (!appData.isText(name));

      name += `_${i + 1}`
      let price = 0;

      do {
        price = prompt("Сколько это будет стоить?")
      } while ((!appData.isNumber(price)))

      appData.services[name] = +price

    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");

  },

  addPrices: () => {
    appData.screenPrice = appData.screens.reduce((el, screen) => el + screen.price, 0);

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key]
    }
  },

  getFullPrice: function () {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },

  getTitle: () => {
    appData.title = appData.title.trim();
    appData.title = appData.title.charAt(0).toUpperCase() + appData.title.slice(1).toLowerCase();

    appData.title = appData.title;
  },

  getServicePercentPrices: function () {
    appData.servicePercentPrices = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
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
    console.log(appData.screens);
    console.log(appData.services);
  },

  start: () => {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  }
}

appData.start()






