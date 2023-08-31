const btn = document.getElementById('btn')
const square = document.getElementById('square')
const circle = document.getElementById('circle')
const btnE = document.getElementById('e_btn')
const inputText = document.querySelector('[type=text]')
const inputRange = document.querySelector('[type=range]')


btnE.style.display = 'none'

btn.addEventListener('click', () => {
  if (inputText.value != '') {
    square.style.backgroundColor = inputText.value
  }
})

inputRange.addEventListener('input', () => {
  circle.style.width = inputRange.value + '%'
  circle.style.height = inputRange.value + '%'
})





