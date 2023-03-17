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

getRandomIntFromRange(1, 100);
isStringLengthMatches('строка', 6);
