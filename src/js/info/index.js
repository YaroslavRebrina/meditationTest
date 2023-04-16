const infoBtnEl = document.querySelector('.button__info');
const sessionWrapperEl = document.querySelector('.session__wrapper');
const formEl = document.querySelector('.form');
const profileEl = document.querySelector('.profile');
const musicEl = document.querySelector('.music__wrapper');

function showInfo() {
  sessionWrapperEl.classList.toggle('session__wrapper__hidden--right');
  formEl.classList.toggle('form__show');
  musicEl.classList.toggle('session__wrapper__hidden--right');
  
}
// transform: translateX(210px);
const colorBtnEl = document.querySelector('.button__color');

colorBtnEl.addEventListener('click', showProfile);

function showProfile() {
  sessionWrapperEl.classList.toggle('session__wrapper__hidden--left');
  profileEl.classList.toggle('profile__show');
  musicEl.classList.toggle('session__wrapper__hidden--left');
}
