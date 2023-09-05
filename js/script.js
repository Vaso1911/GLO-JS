const title = document.getElementsByTagName('h1')[0]
const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]
const btnScreen = document.querySelector('.screen-btn')
const itemsPercent = document.querySelectorAll('.other-items.percent')
const itemsNumber = document.querySelectorAll('.other-items.number')
const inputRange = document.querySelector('.rollback > .main-controls__range > [type=range]')
const span = document.querySelector('.rollback > .main-controls__range > span')
const rightDiv = document.querySelector('main-total')
const rightDivInputs = document.querySelectorAll('.total-input')
const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fulltotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]
const screens = document.querySelectorAll('.screen')
const leftContainer = document.querySelector('.elements')
const allInputsText = leftContainer.querySelectorAll('[type=text]')
const allInputs = leftContainer.querySelectorAll('input')
const allCheckbox = leftContainer.querySelectorAll('label')



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
    this.addTitle()
    this.showBtnStart()
    startBtn.addEventListener('click', this.start)
    resetBtn.addEventListener('click', this.reset)
    btnScreen.addEventListener('click', this.addScreenBlock)
    inputRange.addEventListener('input', this.range)

  },

  range: function () {
    const newValue = inputRange.value
    this.rollback = newValue
    span.textContent = `${newValue}%`
  },

  start: function () {
    appData.showIntput()
    appData.addScreens()
    appData.addServices()
    appData.addPrices()
    appData.logger()
    appData.showResult()
  },

  //добавляем кнопке визуалный эффект ненажатия\
addBtnAtr: function () {
startBtn.setAttribute('disabled', 'disabled')
startBtn.style.background = "gray"
startBtn.style.cursor = "initial"
},

// запускаем все сбросы
reset: function () {
appData.resetShowIntput()
appData.resetInputValue()
appData.showBtnStart() 
appData.addBtnAtr()
},


showIntput: function () {
  screens.forEach(e => {
    const select = e.querySelector('select')
    select.setAttribute('disabled', 'disabled')
    select.style.opacity = '0.5'
    select.style.backgroundColor = "gray"
    select.style.borderColor = "gray"
    select.style.cursor = "initial"
  })

  allInputsText.forEach(e => {
    e.style.opacity = '0.5'
    e.style.backgroundColor = "gray"
    e.style.borderColor = "gray"
    e.style.cursor = "initial"
  })

  allInputs.forEach(e => {
    e.setAttribute('disabled', 'disabled')
  })

  btnScreen.setAttribute('disabled', 'disabled')
  btnScreen.style.opacity = '0.5'
  btnScreen.style.backgroundColor = "gray"
  btnScreen.style.cursor = "initial"

  allCheckbox.forEach( e => {
    e.style.opacity = '0.3'
    e.style.cursor = "initial"
  })

startBtn.style.display = 'none'
resetBtn.style.display = 'block'
},

resetInputValue: function () {
  const screens = document.querySelectorAll('.screen')
  screens.forEach(e => {
    const select = e.querySelector('select')
    const input = e.querySelector('input')
    select[0].selected = true
    input.value= ''
  })

  allInputs.forEach(e => {
    if (e.checked) {
      e.checked = false
    }
  })

  rightDivInputs.forEach(e => {
    e.value = 0
  })

  inputRange.value = 0;
  span.textContent = `0%`;
},


resetShowIntput: function () {
  screens.forEach(e => {
    const select = e.querySelector('select')
    select.removeAttribute('disabled')
    select.style.opacity = '1'
    select.style.backgroundColor = "field"
    select.style.borderColor = "#A52A2A"
    select.style.cursor = "pointer"
  })

  allInputsText.forEach(e => {
    e.style.opacity = '1'
    e.style.backgroundColor = "rgba(239, 239, 239, 0.3)"
    e.style.borderColor = "#A52A2A"
    e.style.cursor = "pointer"
  })

  allInputs.forEach(e => {
    e.removeAttribute('disabled')
  })

  inputRange.style.backgroundColor = "#A52A2A"
  btnScreen.removeAttribute('disabled')
  btnScreen.style.opacity = '1'
  btnScreen.style.backgroundColor = "#A52A2A"
  btnScreen.style.cursor = "pointer"

  allCheckbox.forEach( e => {
    e.style.opacity = '1'
    e.style.cursor = "pointer"
  })

startBtn.style.display = 'block'
resetBtn.style.display = 'none'
},

  // проверяем выбран ли тип экранов и внесено ли кол-во , если так то добавляем ей визуала
  showBtnStart: function () {
    const screens = document.querySelectorAll('.screen')
    screens.forEach(el => {
      const select = el.querySelector('select')
      const input = el.querySelector('input')
      const checkInputs = () => {
        if (input.value !== '' && select[0].selected != true) {
          startBtn.removeAttribute('disabled')
          startBtn.style.backgroundColor = "#A52A2A"
          startBtn.style.cursor = "pointer"
        } else {
          startBtn.setAttribute('disabled', 'disabled')
          startBtn.style.backgroundColor = "gray"
          startBtn.style.cursor = "initial"
        }
      };
      input.addEventListener('input', checkInputs);
      select.addEventListener('change', checkInputs);

    })
  },

  // добавляем вывод значений в инпуты справа
  showResult: function () {
    total.value = this.screenPrice
    totalCount.value = this.screenNumber
    totalCountOther.value = this.servicePercentPrices + this.servicePricesNumber
    fulltotalCount.value = this.fullPrice

    if (this.rollback > 0) {
      const calculatedRollback = (this.fullPrice * this.rollback) / 100
      totalCountRollback.value = (this.fullPrice - calculatedRollback).toFixed(0)
    } else if (this.rollback == 0) {
      totalCountRollback.value = this.fullPrice
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

      this.screens.push({
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
        this.servicesPercent[label.textContent] = +input.value
      }
    })

    itemsNumber.forEach(el => {
      const check = el.querySelector('[type=checkbox]')
      const input = el.querySelector('[type=text]')
      const label = el.querySelector('label')

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value
      }
    })

  },

  addRollback: function () {
    const showValue = inputRange.value;
    this.rollback = showValue;
    span.textContent = `${showValue}%`;

  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true)
    screens[screens.length - 1].after(cloneScreen)
  },

  // добавил подсчёт кол-во экранов
  addPrices: function () {
    this.screenPrice = this.screens.reduce((el, screen) => el + screen.price, 0);
    this.screenNumber = this.screens.reduce((el, screen) => el + screen.number, 0);

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key]
    }
    for (let key in this.servicesPercent) {
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
    }

    this.fullPrice = this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;
  },

  logger: function () {
    console.log(this.rollback);
    console.log(this.servicePercentPrices);
    console.log('стоимость верстки экранов ' + this.screenPrice + 'руб и стоимость разработки сайта ' + this.fullPrice + ' руб');
  },

}

appData.init()
