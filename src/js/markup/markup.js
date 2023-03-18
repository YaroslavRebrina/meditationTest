import { refs } from '../theme_coloring/index';
const { wrapperEl, sessionButtonEl } = refs;

const BGC_KEY = 'bgcColor';
const BUTTON_SESSION_KEY = 'sessionButtonColor';

const colorInfo = {
  bgcColor: localStorage.getItem(BGC_KEY),
  buttonSessionColor: localStorage.getItem(BUTTON_SESSION_KEY),
};

// function setItems() {
//   if (
//     localStorage.getItem(BGC_KEY) === null &&
//     localStorage.getItem(BUTTON_SESSION_KEY) === null
//   ) {
//     console.log(1);
//     localStorage.setItem(BGC_KEY, 'green');
//     localStorage.setItem(BUTTON_SESSION_KEY, 'pink');

//     colorInfo.bgcColor = localStorage.getItem(BGC_KEY);
//     colorInfo.buttonSessionColor = localStorage.getItem(BUTTON_SESSION_KEY);
//   }
// }

// setItems();
markup(colorInfo.bgcColor, colorInfo.buttonSessionColor);

function markup(bgcColorParam, buttonSessionColor) {
  buttonMarkup(buttonSessionColor);
  bgcMarkup(bgcColorParam);

  return;
}

function buttonMarkup(buttonSessionColor) {
  if (localStorage.getItem(BUTTON_SESSION_KEY) === null) {
    buttonSessionColor = 'pink';
  }

  let btnColor = buttonSessionColor;
  let sessionBtnColorData = sessionButtonEl.dataset.color;

  sessionButtonEl.classList.replace(`${sessionBtnColorData}`, `${btnColor}`);
  sessionButtonEl.dataset.color = btnColor;
  localStorage.setItem('sessionButtonColor', sessionButtonEl.dataset.color);
}

function bgcMarkup(bgcColorParam) {
  if (localStorage.getItem(BGC_KEY) === null) {
    bgcColorParam = 'green';
  }
  let bgcColor = bgcColorParam;
  let wrapperColorData = wrapperEl.dataset.color;

  wrapperEl.classList.replace(`${wrapperColorData}`, `${bgcColor}`);
  wrapperEl.dataset.color = bgcColor;
  localStorage.setItem('bgcColor', wrapperEl.dataset.color);
}
