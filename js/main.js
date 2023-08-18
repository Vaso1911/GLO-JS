let title = 'Проект',
  screens = 'Простые, Сложные, Интерактивные',
  screenPrice = 10000,
  rollback = 15,
  fullPrice = 30000,
  adaptive = true;

console.log(typeof title, typeof fullPrice, typeof adaptive);

console.log(screens.length);

console.log(`Стоимость верстки экранов ${screenPrice} рублей`);

console.log(`Стоимость разработки сайта ${fullPrice} рублей`);

screens = screens.toLowerCase().split(','); // изменил переменную, а не сразу вывел в консоль, для последующего использования в функции calcPrice

console.log(screens);

console.log( fullPrice * (rollback / 100) );

const calcPrice = (a, b, c, d) => {

    if (a.includes('сложные')) {
      b = b * 2;
      c = c * 2;
    } else if (a.includes('интерактивные')) {
      b = b * 3;
      c = c * 3;
    }

  console.log(`Стоимость верстки экранов ${b} рублей`);
  console.log(`Стоимость разработки сайта ${c} рублей`);
  console.log(`Процент отката посреднику за работу: ${ c * ( d / 100) } рублей`);
};

calcPrice(screens[2], screenPrice, fullPrice, rollback);