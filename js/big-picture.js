const bigPicture = document.querySelector('.big-picture');
const bigPictureContainer = bigPicture.querySelector('.big-picture__img');
const bigPictureImg = bigPictureContainer.querySelector('img');
const commentsList = bigPicture.querySelector('.social__comments');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const renderPictureDetails = (data) => {
  bigPictureImg.src = data.url;
  likesCount.textContent = data.likes;
  commentsCount.textContent = data.comments.length;
  socialCaption.textContent = data.description;
};

const createComment = (comm) => {
  const comment = document.createElement('li', '.social__comments');
  comment.innerHTML = `
    <img class="social__picture" src="${comm.avatar}" alt="${comm.name}" width="35" height="35">
    <p class="social__text">${comm.message}</p>`;
  return comment;
};

const renderComments = (data) => {
  commentsList.innerHTML = '';
  const fragment = document.createDocumentFragment();
  data.forEach((el) => {
    fragment.append(createComment(el));
  });
  commentsList.append(fragment);
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPressEsc);
};

function onPressEsc (e) {
  if (e.key === 'Escape') {
    e.preventDefault();
    hideBigPicture();
  }
}

const onPressCloseButton = () => {
  hideBigPicture();
};

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onPressEsc);
  renderPictureDetails(data);
  renderComments(data.comments);
};

closeButton.addEventListener('click', onPressCloseButton);

export { showBigPicture };
