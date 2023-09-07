const container = document.querySelector('.container')

const DomElement = function (element) {
  this.selector = element
  this.height = '200px'
  this.width = '200px'
  this.bg = 'rgb(165, 63, 70)'
  this.fontSiz = '20px'
  this.position = 'absolute'
  this.createElement = function () {

    const div = document.createElement('div')
    
    this.styleDiv = function (e) {
      e.style.height = this.height
      e.style.width = this.width
      e.style.background = this.bg
      e.style.fontSize = this.fontSiz
    }

    this.styleDiv(div)

    if (this.selector[0] === '.') {
      div.classList.add(element)
      div.textContent = 'Это блок с классом'

    } else if (this.selector[0] === '#') {
      div.setAttribute('id', element)
      div.textContent = 'Это блок с айди'
    } else {
      div.textContent = 'Not id. Not class'
    }

    container.append(div)
  }

}

const el1 = new DomElement('#best')
const el2 = new DomElement('.block')

el1.createElement()
el2.createElement()


const Elem = function (element) {
  DomElement.call(this, element)
  this.bg = '#3333eb'
  this.height = '100px'
  this.width = '100px'
  this.fontSiz = '14px'
  this.position = 'absolute'
  this.data = 'key-block'
  this.addPosition = function () {
    const div = document.querySelectorAll('div > div')
    div.forEach((e, i) => {
      if (i == 2) {
        e.style.position = this.position
        e.setAttribute('data-set', this.data)
      }
    })
  }
}

const el3 = new Elem('class-id')
el3.createElement()
el3.addPosition()

const keyBlock = document?.querySelector('[data-set="key-block"]')

document.addEventListener('keydown', (e) => {
  if (e.code == 'ArrowUp') {
    keyBlock.style.top = `${keyBlock.offsetTop - 10}px`
  } else if (e.code == 'ArrowDown') {
    keyBlock.style.top = `${keyBlock.offsetTop + 10}px`
  } else if (e.code == 'ArrowRight') {
    keyBlock.style.left = `${keyBlock.offsetLeft + 10}px`
  } else if (e.code == 'ArrowLeft') {
    keyBlock.style.left = `${keyBlock.offsetLeft - 10}px`
  }

})

