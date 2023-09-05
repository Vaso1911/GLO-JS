const title = document.getElementsByTagName('h1')[0]
const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]
const btnScreen = document.querySelector('.screen-btn')
const itemsPercent = document.querySelectorAll('.other-items.percent')
const itemsNumber = document.querySelectorAll('.other-items.number')
const inputRange = document.querySelector('.rollback > .main-controls__range > [type=range]')
const span = document.querySelector('.rollback > .main-controls__range > span')
const rightDiv = document.querySelector('main-total')
const rightDivInputs = document.getElementsByClassName('total-input')
const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fulltotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]
const screens = document.querySelectorAll('.screen')

//добавляем кнопке визуалный эффект ненажатия
startBtn.setAttribute('disabled', 'disabled')
startBtn.style.background = "gray"
startBtn.style.cursor = "initial"

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  servicesPercent: {},
  servicesNumber: {},
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrices: 0,

  init: function () {
    appData.addTitle()
    appData.showBtnStart()
    startBtn.addEventListener('click', appData.start)
    btnScreen.addEventListener('click', appData.addScreenBlock)
    inputRange.addEventListener('input', () => {
      const newValue = inputRange.value;
      appData.rollback = newValue;
      span.textContent = `${newValue}%`;
    });

  },

  start: () => {
    appData.addScreens()
    appData.addServices()
    appData.addPrices()
    appData.logger()
    appData.showResult()
  },

// проверяем выбран ли тип экранов и внесено ли кол-во , если так то добавляем ей визуала
  showBtnStart: () => {
    const screens = document.querySelectorAll('.screen')
    screens.forEach(el => {
      const select = el.querySelector('select')
      const input = el.querySelector('input')
      const checkInputs = () => {
        if (input.value !== '' && select.selectedIndex !== 0) {
          startBtn.removeAttribute('disabled');
          startBtn.style.backgroundColor = "#A52A2A";
          startBtn.style.cursor = "pointer";
        } else {
          startBtn.setAttribute('disabled', 'disabled');
          startBtn.style.backgroundColor = "gray";
          startBtn.style.cursor = "initial";
        }
      };
      input.addEventListener('input', checkInputs);
      select.addEventListener('change', checkInputs);
    })
  },

  // добавляем вывод значений в инпуты справа
  showResult: function () {
    total.value = appData.screenPrice
    totalCount.value = appData.screenNumber
    totalCountOther.value = appData.servicePercentPrices + appData.servicePricesNumber
    fulltotalCount.value = appData.fullPrice

    if (appData.rollback > 0) {
      const calculatedRollback = (appData.fullPrice * appData.rollback) / 100
      totalCountRollback.value = (appData.fullPrice - calculatedRollback).toFixed(0)
    } else if (appData.rollback == 0) {
      totalCountRollback.value = appData.fullPrice
    }

  },

  addTitle: function () {
    document.title = title.textContent
  },

  isText: function (text) {
    return typeof text === "string" && text.trim().length > 0 && /\D/.test(text);
  },

  addScreens: function () {
    const screens = document.querySelectorAll('.screen')
    screens.forEach((el, i) => {
      const select = el.querySelector('select')
      const input = el.querySelector('input')
      const selectName = select.options[select.selectedIndex].textContent

      appData.screens.push({
        id: i,
        name: selectName,
        price: +select.value * +input.value,
        number: +input.value
      })
    })
    console.log(appData.screens);
  },

  addServices: function () {
    itemsPercent.forEach(el => {
      const check = el.querySelector('[type=checkbox]')
      const input = el.querySelector('[type=text]')
      const label = el.querySelector('label')

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value
      }
    })

    itemsNumber.forEach(el => {
      const check = el.querySelector('[type=checkbox]')
      const input = el.querySelector('[type=text]')
      const label = el.querySelector('label')

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value
      }
    })

  },

  addRollback: () => {
    const showValue = inputRange.value;
    appData.rollback = showValue;
    span.textContent = `${showValue}%`;

  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true)
    screens[screens.length - 1].after(cloneScreen)
  },

  // добавил подсчёт кол-во экранов
  addPrices: () => {
    appData.screenPrice = appData.screens.reduce((el, screen) => el + screen.price, 0);
    appData.screenNumber = appData.screens.reduce((el, screen) => el + screen.number, 0);

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key]
    }
    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
    }

    appData.fullPrice = appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;
  },

  logger: () => {
    console.log(appData.rollback);
    console.log(appData.servicePercentPrices);
    console.log('стоимость верстки экранов ' + appData.screenPrice + 'руб и стоимость разработки сайта ' + appData.fullPrice + ' руб');
  },

}

appData.init()
