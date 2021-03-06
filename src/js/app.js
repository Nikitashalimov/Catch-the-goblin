const holes = document.querySelectorAll('.hole');

// присваиваем переменной html-код с картинкой
const goblin = '<div class="goblin"></div>';

// массив с индексами
const arrIndex = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// переменная для массива
let index;

function addGoblin() {
  // перемешиваем массив
  arrIndex.sort(() => Math.random() - 0.5);
  // берем первое число из массива и записываем в переменную, если повторяется, берем следующее
  if (index === arrIndex[0]) {
    index = arrIndex[1];
  } else {
    index = arrIndex[0];
  }
  // вставляем гоблина в HTML
  holes[index].insertAdjacentHTML('beforeend', goblin);
  // создаем новую переменную (наш созданный гоблин)
  const remGoblin = document.querySelector('.goblin');
  // массив с вариациями время на удаление 'гоблина'
  const remTime = [500, 750, 1000];
  // удаляем 'гоблина'
  setTimeout(() => remGoblin.remove(), remTime[Math.floor(Math.random() * remTime.length)]);
}

function start() {
  setInterval(() => addGoblin(), 1300);
}
start();
