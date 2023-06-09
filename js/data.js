import {
  getRandomIntFromRange,
  createArray,
  createRandomIdFromRangeGenerator,
} from './utils.js';

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

const uniqueIdItem = createRandomIdFromRangeGenerator(1, ITEMS_NUMBER);
const uniqueIdComment = createRandomIdFromRangeGenerator(1, MAX_COMMENT_ID_NUMBER);
const uniquePhotosUrl = createRandomIdFromRangeGenerator(1, ITEMS_NUMBER);

const createComment = () => ({
  id: uniqueIdComment(),
  avatar: `img/avatar-${getRandomIntFromRange(1, AVATARS_NUMBER)}.svg`,
  message: MESSAGE_EXAMPLES[getRandomIntFromRange(0, MESSAGE_EXAMPLES.length - 1)],
  name: NAMES_EXAMPLES[getRandomIntFromRange(0, NAMES_EXAMPLES.length - 1)],
});

const createPhotoDescription = () => ({
  id: uniqueIdItem(),
  url: `photos/${uniquePhotosUrl()}.jpg`,
  description: DESCRIPTIONS_EXAMPLES[getRandomIntFromRange(0, DESCRIPTIONS_EXAMPLES.length - 1)],
  likes: getRandomIntFromRange(MIN_LIKES_NUMBER, MAX_LIKES_NUMBER),
  comments: createArray(getRandomIntFromRange(1, MAX_COMMENTS_NUMBER), (elem, index) => createComment(index)),
});

const simularPhotos = createArray(ITEMS_NUMBER, (elem, index) => createPhotoDescription(index));
export { simularPhotos };
