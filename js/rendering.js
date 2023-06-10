import { simularPhotos } from './data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const sectionPictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

simularPhotos.forEach(({url, likes, comments}) => {
  const photoElem = pictureTemplate.cloneNode(true);
  photoElem.querySelector('.picture__img').src = url;
  photoElem.querySelector('.picture__likes').textContent = likes;
  photoElem.querySelector('.picture__comments').textContent = comments.length + 1;
  fragment.append(photoElem);
});

sectionPictures.append(fragment);
