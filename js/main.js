const heroes = {
  sonic: {
    power: ['HTML', 'CSS', 'FIGMA'],
    trait: ['бегать', 'прыгать', 'крутиться'],
    friend: ['Таилс', 'Кнуклес', 'Наставник'],
  },
  dp: {
    power: ['ASSEMBLER', 'BASIC'],
    trait: ['хулиганить', 'тусовки', 'пушки'],
    friend: ['Паук', 'Расомаха'],
  },
  front: {
    power: ['JS', 'VUE'],
    trait: ['писать код', 'красиво одеваться', 'пить кофе'],
    friend: ['Бэкендер', 'Клавиатура'],
  },
  beck: {
    power: ['Java', 'C#'],
    trait: ['НЕНАВИДИТЬ фронта', 'спать', 'шоколад )'],
    friend: ['Дизайнер', 'ЗП'],
  },
}
const wrapperRadio = document.getElementById('radio-wrapper')
const list = document.querySelector('.list')
const radioBtns = document.querySelectorAll('[type=radio]')
const power = document.getElementById('power')
const trait = document.getElementById('trait')
const friend = document.getElementById('friend')
const textarea = document.getElementById('textarea')
const btn = document.getElementById('btn')
let liHtml = ''
let powerHtml = ''
let traitHtml = ''
let friendHtml = ''
let textareaHtml = ''
let idHero = 1;
class Hero {
  constructor(title, power, trait, friend, textarea, img) {
    this.title = title;
    this.power = power;
    this.trait = trait;
    this.friend = friend;
    this.textarea = textarea;
    this.img = img;
  }

  deleteCard() {

    const listItem = document.querySelector(`[data-title="${this.title}"]`);
    if (listItem) {
      listItem.parentNode.remove(listItem);
    }

    const savedCards = loadHeroCards();
    const updatedCards = savedCards.filter((card) => card.title !== this.title);
    localStorage.setItem('heroCards', JSON.stringify(updatedCards));
  }



  isReadyToCreate() {

    const li = document.createElement('li')
    li.classList.add('list__item')

    liHtml = `
  <li class="list__item" data-title="${this.title}">
  <article class="card">
    <div class="card__about">
      <img src='/img/${this.img}' alt="Аватарка ${this.title}" class="card__ava" width="165" height="244">
      <div class="card__descr">
        <h2 class="card__title">${this.title}</h2>
        <p class="card__text">
          ${this.textarea}
        </p>
      </div>
    </div>
    <div class="card__skills">
      <ul class="card-list list-reset">
        <li class="card-list__item">Знаю ${this.power}</li>
        <li class="card-list__item">Люблю ${this.trait}</li>
        <li class="card-list__item">Лучший друг ${this.friend}</li>
      </ul>
      <button class="card__btn btn-reset">
        <svg class="svg-lid" width="30" height="12" viewBox="0 0 30 12" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.5 4.375V7.5H28.125C28.6223 7.5 29.0992 7.69755 29.4508 8.04918C29.8025 8.4008 30 8.87772 30 9.375C30 9.87228 29.8025 10.3492 29.4508 10.7008C29.0992 11.0525 28.6223 11.25 28.125 11.25H1.875C1.37772 11.25 0.900805 11.0525 0.549175 10.7008C0.197544 10.3492 0 9.87228 0 9.375C0 8.87772 0.197544 8.4008 0.549175 8.04918C0.900805 7.69755 1.37772 7.5 1.875 7.5H7.5V4.375C7.5 1.96001 9.46 0 11.875 0H18.125C20.54 0 22.5 1.96001 22.5 4.375ZM11.25 4.375V7.5H18.75V4.375C18.75 4.20924 18.6842 4.05027 18.5669 3.93306C18.4497 3.81585 18.2908 3.75 18.125 3.75H11.875C11.7092 3.75 11.5503 3.81585 11.4331 3.93306C11.3158 4.05027 11.25 4.20924 11.25 4.375Z"
            fill="#1E1E1E" />
        </svg>
        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.2943 2.68751L5.9443 19.1875C5.9598 19.3418 6.0321 19.4848 6.14714 19.5887C6.26218 19.6927 6.41175 19.7502 6.5668 19.75H19.5418C19.6968 19.7502 19.8464 19.6927 19.9615 19.5887C20.0765 19.4848 20.1488 19.3418 20.1643 19.1875L21.8143 2.68751C21.8763 2.2032 22.1248 1.76217 22.5069 1.45821C22.889 1.15425 23.3746 1.01133 23.8604 1.05985C24.3463 1.10837 24.7941 1.3445 25.1085 1.71802C25.423 2.09155 25.5793 2.573 25.5443 3.06001L23.8943 19.56C23.7875 20.6399 23.2827 21.6415 22.4782 22.3698C21.6737 23.098 20.627 23.5009 19.5418 23.5H6.5668C5.48232 23.4999 4.43654 23.097 3.63232 22.3694C2.82809 21.6419 2.32275 20.6416 2.2143 19.5625L0.564299 3.06251C0.532988 2.81426 0.551681 2.56226 0.619277 2.32135C0.686873 2.08044 0.802005 1.85549 0.957887 1.65976C1.11377 1.46404 1.30725 1.30149 1.52693 1.18171C1.74661 1.06192 1.98804 0.987315 2.237 0.962286C2.48596 0.937256 2.73741 0.96231 2.97654 1.03597C3.21567 1.10963 3.43763 1.23041 3.62936 1.39119C3.82108 1.55196 3.97869 1.74949 4.09288 1.97212C4.20708 2.19476 4.27557 2.438 4.2943 2.68751Z"
            fill="#1E1E1E" />
        </svg>
      </button>
    </div>
  </article>
  `

    li.innerHTML = liHtml

    const deleteButton = li.querySelector('.card__btn');
    deleteButton.addEventListener('click', () => {
      this.deleteCard(); // Вызов метода deleteCard текущего объекта Hero
    });

    list.append(li)
  }
}

power.addEventListener('change', (el) => {
  powerHtml = el.target.value

  const radioBtnsSelectd = document.querySelector('[type=radio]:checked').value
  power[0].style.display = 'none'
  trait.innerHTML = `<option>--Выберите предпочтения--</option>`
  friend.innerHTML = `<option>--Выберите друга--</option>`
  showSelect()
  heroes[radioBtnsSelectd].trait.forEach((e) => {
    const optionTrait = document.createElement('option')
    optionTrait.classList.add('option')
    trait.style.display = 'block'
    optionTrait.value = e
    optionTrait.textContent = e
    trait.append(optionTrait)
  });

  trait.addEventListener('change', (el) => {
    traitHtml = el.target.value

    trait[0].style.display = 'none'
    friend.innerHTML = `<option>--Выберите друга--</option>`
    showSelect()
    heroes[radioBtnsSelectd].friend.forEach(e => {
      const optionfriend = document.createElement('option')
      optionfriend.classList.add('option')
      friend.style.display = 'block'
      optionfriend.value = e
      optionfriend.textContent = e
      friend.append(optionfriend)
    })
  })
});

friend.addEventListener('change', (el) => {
  friendHtml = el.target.value
  friend[0].style.display = 'none'
  textarea.style.display = 'block'
  textarea.value = ''
  textarea.addEventListener('input', (el) => {
    textareaHtml = el.target.value
    if (textarea.value.length >= 10) {
      btn.style.display = 'block'
    } else {
      btn.style.display = 'none'
    }
  })
});

btn.addEventListener('click', () => {
  const radioBtnsSelectd = document.querySelector('[type=radio]:checked').value;
  let newHero;

  if (radioBtnsSelectd === 'sonic') {
    newHero = new Hero(
      title = 'Соник',
      powerHtml,
      traitHtml,
      friendHtml,
      textareaHtml,
      img = 'sonic.jpg'
    )
  }

  if (radioBtnsSelectd === 'dp') {
    newHero = new Hero(
      title = 'Дедпул',
      powerHtml,
      traitHtml,
      friendHtml,
      textareaHtml,
      img = 'dp.jpg'
    )
  }


  if (radioBtnsSelectd === 'front') {
    newHero = new Hero(
      title = 'Фронтендер',
      powerHtml,
      traitHtml,
      friendHtml,
      textareaHtml,
      img = 'Frontend.jpg'
    )
  }

  if (radioBtnsSelectd === 'beck') {
    newHero = new Hero(
      title = 'Бекэндер',
      powerHtml,
      traitHtml,
      friendHtml,
      textareaHtml,
      img = 'Beckend.jpg'
    )
  }

  newHero.isReadyToCreate()
  saveHeroCard(newHero);
  reset()
})

wrapperRadio.addEventListener('change', (event) => {
  const radioBtnsSelectd = event.target.value;
  power.innerHTML = `<option>--Выберите--</option>`
  trait.innerHTML = `<option>--Выберите предпочтения--</option>`
  friend.innerHTML = `<option>--Выберите друга--</option>`

  showSelect();


  if (radioBtnsSelectd === 'sonic') {
    power.style.display = 'block';

    heroes[radioBtnsSelectd].power.forEach((e) => {
      const optionPowers = document.createElement('option');
      optionPowers.classList.add('option');
      optionPowers.value = e;
      optionPowers.textContent = e;
      power.append(optionPowers);
    });
  }

  if (radioBtnsSelectd === 'dp') {
    power.style.display = 'block';
    heroes[radioBtnsSelectd].power.forEach((e) => {
      const optionPowers = document.createElement('option');
      optionPowers.classList.add('option');
      optionPowers.value = e;
      optionPowers.textContent = e;
      power.append(optionPowers);
    });

  }

  if (radioBtnsSelectd === 'front') {
    power.style.display = 'block';
    heroes[radioBtnsSelectd].power.forEach((e) => {
      const optionPowers = document.createElement('option');
      optionPowers.classList.add('option');
      optionPowers.value = e;
      optionPowers.textContent = e;
      power.append(optionPowers);
    });
  }

  if (radioBtnsSelectd === 'beck') {
    power.style.display = 'block';
    heroes[radioBtnsSelectd].power.forEach((e) => {
      const optionPowers = document.createElement('option');
      optionPowers.classList.add('option');
      optionPowers.value = e;
      optionPowers.textContent = e;
      power.append(optionPowers);
    });
  }

});


window.addEventListener('load', () => {
  const savedCards = loadHeroCards();
  savedCards.forEach((cardData) => {

    const { title, power, trait, friend, textarea, img } = cardData;
    const newHero = new Hero(title, power, trait, friend, textarea, img);
    newHero.isReadyToCreate();
  });
});


function saveHeroCard(hero) {
  const storedCards = localStorage.getItem('heroCards') || '[]';
  const cards = JSON.parse(storedCards);
  cards.push({
    title: hero.title,
    power: hero.power,
    trait: hero.trait,
    friend: hero.friend,
    textarea: hero.textarea,
    img: hero.img,
  });
  localStorage.setItem('heroCards', JSON.stringify(cards));
}

function loadHeroCards() {
  const storedCards = localStorage.getItem('heroCards') || '[]';
  return JSON.parse(storedCards);
}

const showSelect = () => {
  const selects = document.querySelectorAll('select');
  selects.forEach((e) => {
    if (e.length < 1) {
      e.style.display = 'none';

    }
  });
};

const reset = () => {
  wrapperRadio.innerHTML = `
  <label class="radio-label">
    <input class="hidden" id="sonic" type="radio" value="sonic" name="hero">
    <span>Соник</span>
  </label>
  <label class="radio-label">
    <input class="hidden" id="dp" type="radio" value="dp" name="hero">
    <span>Дедпул</span>
  </label>
  <label class="radio-label">
    <input class="hidden" id="front" type="radio" value="front" name="hero">
    <span>Фронтендер</span>
  </label>
  <label class="radio-label">
    <input class="hidden" id="beck" type="radio" value="beck" name="hero">
    <span>Бэкендер</span>
  </label>
`
  power.style.display = 'none'
  trait.style.display = 'none'
  friend.style.display = 'none'
  textarea.style.display = 'none'
  textarea.value = ''
  btn.style.display = 'none'
}
