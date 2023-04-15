export const refs = {
  colorsBtnEl: document.querySelector('.button__color'),
  wrapperEl: document.querySelector('.wrapper'),
  colorsListEl: document.querySelector('.theme__list'),
  sessionButtonEl: document.querySelector('.button__session'),
  timerRef: document.querySelector('.timer__wrapper'),
  timerBtnRef: document.querySelector('.button__timer'),
  settingBtnRef: document.querySelector('.button__settings'),
  iconBtnRef: document.querySelector('.button__icon'),
};
import { timerClose } from '../timer/timer';
const {
  timerBtnRef,
  colorsBtnEl,
  colorsListEl,
  wrapperEl,
  sessionButtonEl,
  timerRef,
  settingBtnRef,
  iconBtnRef,
} = refs;
settingBtnRef.addEventListener('click', showSettings);
function showSettings() {
  timerBtnRef.classList.toggle('button__timer--shown');
  iconBtnRef.classList.toggle('button__icon--shown');
}
colorsBtnEl.addEventListener('click', palleteOpen);

function palleteOpen(e) {
  e.stopPropagation();
  timerRef.classList.remove('timer__shown');
  colorsListEl.classList.add('theme__list--shown');
  // colorsListEl.style.transform = 'translateX(-190px)';

  wrapperEl.removeEventListener('click', timerClose);
  timerBtnRef.removeEventListener('click', timerClose);
  wrapperEl.addEventListener('click', paletteClose);
  colorsBtnEl.addEventListener('click', paletteClose);
}

export function paletteClose(e) {
  const validClick = e.composedPath().includes(colorsListEl);

  if (validClick) {
    return;
  }
  timerRef.classList.remove('timer__shown');
  colorsListEl.classList.remove('theme__list--shown');
  // colorsListEl.style.transform = 'translateX(190px)';

  wrapperEl.removeEventListener('click', paletteClose);
  colorsBtnEl.removeEventListener('click', paletteClose);
}

// bg paintning

colorsListEl.addEventListener('click', changeColor);

function changeSessionBtnColor(e) {
  if (e.target.classList.contains('session-palette__button')) {
    let btnColor = e.target.dataset.color;
    let sessionBtnColorData = sessionButtonEl.dataset.color;

    sessionButtonEl.classList.replace(`${sessionBtnColorData}`, `${btnColor}`);
    sessionButtonEl.dataset.color = btnColor;
    return localStorage.setItem(
      'sessionButtonColor',
      sessionButtonEl.dataset.color
    );
  }

  return;
}

function changeBgc(e) {
  if (e.target.classList.contains('bgc-palette__button')) {
    let bgcColor = e.target.dataset.color;
    let wrapperColorData = wrapperEl.dataset.color;

    wrapperEl.classList.replace(`${wrapperColorData}`, `${bgcColor}`);
    wrapperEl.dataset.color = bgcColor;
    return localStorage.setItem('bgcColor', wrapperEl.dataset.color);
  }
}

function changeColor(e) {
  changeSessionBtnColor(e);
  changeBgc(e);

  return;
}
