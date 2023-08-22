const lang = 'ru';

const arrWeek = [
  ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'], 
  ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] 
];


if (lang === 'ru') {
  console.log( 'Дни недели:', arrWeek[0].join(', ') + '.' );
} else {
  console.log( 'Days of the week:', arrWeek[1].join(', ') + '.' );
}

const namePerson = 'Александр';

const role = namePerson === 'Артем' ? 'директор' :
  namePerson === 'Александр' ? 'преподаватель' : 'студент';

console.log(role);