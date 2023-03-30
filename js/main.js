// ********************** ФУНКЦИИ-УТИЛИТЫ **********************************************
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

// ************************************************************************
const ITEMS_NUMBER = 25;
const MIN_LIKES_NUMBER = 15;
const MAX_LIKES_NUMBER = 200;
const MAX_COMMENTS_NUMBER = 3;
const MAX_COMMENT_ID_NUMBER = 400;
const AVATARS_NUMBER = 6;
const NAMES_EXAMPLES = [
  'Иван',
  'Антон',
  'Анна',
  'Светлана',
  'Моника',
  'Дмитрий'
];
const DESCRIPTIONS_EXAMPLES = [
  'Мое фото на пляже.',
  'Как я провел лето у бабушки.',
  'Первая фотография лета.',
  'Первая фотография на новый фотоаппарат.',
  'Я в отпуске. Фото на телефон.',
  'Фотка сделана на тапок, сильно не ругайте.'
];
const MESSAGE_EXAMPLES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Создаем перемешанный массив неповторяющихся id от 1 до ITEMS_NUMBER
// Создаем перемешанный массив неповторяющихся id комментариев от 1 до MAX_COMMENT_ID_NUMBER
const shuffledIdArray = createArray(ITEMS_NUMBER, (elem, index) => (elem += index));
const shuffledIdCommentArray = createArray(MAX_COMMENT_ID_NUMBER, (elem, index) => (elem += index));
shuffle(shuffledIdArray);
shuffle(shuffledIdCommentArray);

const createComment = (i) => ({
  id: shuffledIdCommentArray[i],
  avatar: `img/avatar-${getRandomIntFromRange(1, AVATARS_NUMBER)}.svg`,
  message: MESSAGE_EXAMPLES[getRandomIntFromRange(0, MESSAGE_EXAMPLES.length - 1)],
  name: NAMES_EXAMPLES[getRandomIntFromRange(0, NAMES_EXAMPLES.length - 1)],
});

const createPhotoDescription = (i) => ({
  id: shuffledIdArray[i],
  url: `photos/${getRandomIntFromRange(0, ITEMS_NUMBER)}.jpg`,
  description: DESCRIPTIONS_EXAMPLES[getRandomIntFromRange(0, DESCRIPTIONS_EXAMPLES.length - 1)],
  likes: getRandomIntFromRange(MIN_LIKES_NUMBER, MAX_LIKES_NUMBER),
  comments: createArray(getRandomIntFromRange(1, MAX_COMMENTS_NUMBER), (elem, index) => createComment(index)),
});

// eslint-disable-next-line no-unused-vars
const simularPhotos = createArray(ITEMS_NUMBER, (elem, index) => createPhotoDescription(index));
