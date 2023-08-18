const title = 'Проект',
  screens = 'Простые, Сложные, Интерактивные',
  screenPrice = 10000,
  rollback = 15,
  fullPrice = 30000,
  adaptive = true;

console.log(typeof title, typeof fullPrice, typeof adaptive);

console.log(screens.length);

console.log(`Стоимость верстки экранов ${screenPrice} рублей`);

console.log(`Стоимость разработки сайта ${fullPrice} рублей`);

console.log(screens.toLowerCase().split(','));

console.log( fullPrice * (rollback / 100) );

const calcPrice = (a, b, c, d) => {

    if (a.includes('Сложные')) {
      b = b * 2;
      c = c * 2;
    } else if (a.includes('Интерактивные')) {
      b = b * 3;
      c = c * 3;
    }

  console.log(`Стоимость верстки экранов ${b} рублей`);
  console.log(`Стоимость разработки сайта ${c} рублей`);
  console.log(`Процент отката посреднику за работу: ${ c * ( d / 100) } рублей`);
};

calcPrice(screens.split(',')[2], screenPrice, fullPrice, rollback); // это конечно кринж! ))) 
// Типа где-то мы создаём условие,что если пользователь выбрал тип вёрстки то мы пересчитываем стоимость:) 
// Вреали это будет выглядеть немного иначе)))
// Но так как вы попросили заменить переменные на константы ) это что бы консоль не ругалась))