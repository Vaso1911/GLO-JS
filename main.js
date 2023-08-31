const $body = document.querySelector('body')
const $lists = document.querySelectorAll('ul')
const $book = document.querySelector('.books')
const $books = document.querySelectorAll('.book')
const link = $book.querySelectorAll('a')
const $adv = document.querySelector('.adv')

$adv.remove() // удаляем рекламу
$body.classList.add('bg-img') //добавляем класс для боди , что бы изменить фон 

// пробегаемя по всем ссылкам, находим первую цифру в тексте и даём соответсвующий id для родителя>родителя (div)
link.forEach((e, i) => {
  const num = parseInt(e.textContent.match(/\d+/))
  i = num
  const parentDiv = e.parentElement.parentElement
  parentDiv.setAttribute('id', `${i}`)
})

// функция сортировки по тексту 
const sorted = (e) => {
  return e.sort((a, b) => {
    const textA = a.textContent
    const textB = b.textContent
    return textA.localeCompare(textB)
  })
}

// находим по id блок №6 , в нём ul, создаём li , добавляем текст и апендим в ul
const divIdUl = document.getElementById('6')
const ulContent = divIdUl.querySelector('ul')
const liContent = document.createElement('li')
liContent.textContent = 'Глава 8: За пределами ES6'
ulContent.append(liContent)

// находим по id блок №3, а по нему ссылку и меняем ей текст
const divIdLink = document.getElementById('3')
const linkHead = divIdLink.querySelector('h2 > a')
linkHead.textContent = "Книга 3. this и Прототипы Объектов"

// создаём массив на основе нодлиста , что бы применить метод sort , а после пробегаемся по нему и апендим элементы в $book
const booksArray = [...$books].sort((a, b) => a.id > b.id ? 1 : -1)
booksArray.forEach(el => {
  $book.append(el)
})


// пробегаемся по ul и вкаждо собираем li в массивы , после  фильтруем , сортируем , апендим и используем метод after 
// фильтруем по первому слову в тексте так как при сортировке эти элементы переместятся ниже "Глав", поэтому их кидаем после элемента[0]
$lists.forEach(el => {
  const listELement = [...el.querySelectorAll('li')]

  const elementForeword = listELement.filter(el => el.textContent.startsWith('Предисловие'))
  const sortedElement = sorted(listELement)

  sortedElement.forEach(e => el.append(e));
  elementForeword.forEach(e => listELement[0].after(e))
});

const btn = document.querySelector('button')
const ul = document.querySelector('ul')
const input = document.querySelector('input')
btn.addEventListener('click', () => {
  if (input.value != '') {
    const li = document.createElement('li')
    li.textContent = input.value
    ul.append(li)
    input.value = ''
  }
})
