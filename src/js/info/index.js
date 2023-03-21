const infoBtnEl = document.querySelector('.button__info');
const sessionWrapperEl = document.querySelector('.session__wrapper');
const formEl = document.querySelector('.form');

infoBtnEl.addEventListener('click', showInfo);

function showInfo() {
  sessionWrapperEl.classList.toggle('session__wrapper__hidden');
  formEl.classList.toggle('form__show');
}
// transform: translateX(210px);
