const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const $list = document.querySelector('.list');
let listHtml = '';

const currentDate = new Date();
const currentDayIndex = currentDate.getDay();

week.forEach((day, index) => {
  let dayHtml = '<li class="list__item"><h2>';
  
  if (index === 0 || index === 6) {
    dayHtml += '<span class="text-italic">';
  }
  
  if (index === currentDayIndex) {
    dayHtml += '<span class="text-bold">';
  }
  
  dayHtml += day;
  
  if (index === 0 || index === 6 || index === currentDayIndex) {
    dayHtml += '</span>';
  }
  
  dayHtml += '</h2></li>';
  
  listHtml += dayHtml;
});

$list.innerHTML = listHtml;
