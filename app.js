
const $dataOne = document.querySelector('.format-one');
const $dataTwo = document.querySelector('.format-two');

const formatTime = (num) => {
  return num < 10 ? '0' + num : num;
}

const getDeclination = (num, a, b, c) => {

  if (num == 1 || num % 10 == 1 && num != 11) {
    return a;
  } else if ((num >= 2 && num <= 4) || (num % 10 >= 2 && num % 10 <= 4 && (num < 10 || num > 20))) {
    return b;
  } else {
    return c;
  }
}
const getDeclinationHours = (hours) => {
  return getDeclination(hours, 'час', 'часа', 'часов')
}
const getDeclinationMinutes = (minutes) => {
  return getDeclination(minutes, 'минута', 'минуты', 'минут')
}
const getDeclinationSeconds = (seconds) => {
  return getDeclination(seconds, 'секунда', 'секунды', 'секунд')
}


const getTime = () => {
  const now = new Date();

  const arrayWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

  const formatOne = `Сегодня ${arrayWeek[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} года, ${now.getHours()} ${getDeclinationHours(now.getHours())} ${now.getMinutes()} ${getDeclinationMinutes(now.getMinutes())} ${now.getSeconds()} ${getDeclinationSeconds(now.getSeconds())}`;
  const formatTwo = `${formatTime(now.getDate())}.${formatTime(now.getMonth() + 1)}.${now.getFullYear()} - ${formatTime(now.getHours())}:${formatTime(now.getMinutes())}:${formatTime(now.getSeconds())}`;

  $dataOne.innerHTML = formatOne;
  $dataTwo.innerHTML = formatTwo;
}

getTime();
setInterval(getTime, 1000);