// функция для определения случайного целого (по умолчанию) значения из заданного диапазона
// для определения случайного значения с плавающей точкой третьим параметром
// необходимо указывать количество знаков после запятой
const getRandomIntFromRange = (from, to, decimalPlaces = 0) => {
  const lower = Math.min(from, to);
  const upper = Math.max(from, to);
  return +(Math.random() * (upper - lower) + lower).toFixed(decimalPlaces);
};

// Функция для проверки максимальной длины строки, равна ли она указанной длине
const isStringLengthMatches = (str, length) => (str.length === length);
isStringLengthMatches('12', '12');

// Функция для перемешивания массива случайным образом
// взята из https://learn.javascript.ru/task/shuffle
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// Функция для создания массива, параметрами принимает длину и функцию-коллбэк
const createArray = (length, func) => {
  const arr = new Array(length).fill(null).map(func);
  return arr;
};


// Функция, генерирующая уникальные (неповторяющиеся) id в заданном диапазоне
// используется замыкание
const createRandomIdFromRangeGenerator = (min, max) => {
  const prevArr = [];
  return () => {
    let currentVal = getRandomIntFromRange(min, max);
    if (prevArr.length >= (max - min + 1)) {
      return null;
    }
    while (prevArr.includes(currentVal)) {
      currentVal = getRandomIntFromRange(min, max);
    }
    prevArr.push(currentVal);
    return currentVal;
  };
};

export {
  createRandomIdFromRangeGenerator,
  getRandomIntFromRange,
  isStringLengthMatches,
  createArray,
  shuffle,
};
