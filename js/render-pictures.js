import { showBigPicture } from './big-picture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const containerPictures = document.querySelector('.pictures');

const createPictureElement = (picture) => {
  const photoElem = pictureTemplate.cloneNode(true);
  photoElem.querySelector('.picture__img').src = picture.url;
  photoElem.querySelector('.picture__likes').textContent = picture.likes;
  photoElem.querySelector('.picture__comments').textContent = picture.comments.length + 1;

  photoElem.addEventListener('click', () => {
    showBigPicture(picture);
  });
  return photoElem;
};

const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((el) => {
    fragment.append(createPictureElement(el));
  });
  containerPictures.append(fragment);
};

export { renderPictures };
