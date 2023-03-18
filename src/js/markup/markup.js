import { refs } from '../theme_coloring/index';
const { wrapperEl, sessionButtonEl } = refs;

const BGC_KEY = 'bgcColor';
const BUTTON_SESSION_KEY = 'sessionButtonColor';  

createMarkup();
function createMarkup() {
  if (
    !localStorage.getItem(BGC_KEY) ||
    !localStorage.getItem(BUTTON_SESSION_KEY)
  ) {
    localStorage.setItem(BGC_KEY, 'green');
    localStorage.setItem(BUTTON_SESSION_KEY, 'pink');
  }
  markup(
    localStorage.getItem(BGC_KEY),
    localStorage.getItem(BUTTON_SESSION_KEY)
  );
}

function markup(bgcColorParam, buttonSessionColor) {
  buttonMarkup(buttonSessionColor);
  bgcMarkup(bgcColorParam);

  return;
}

function buttonMarkup(buttonSessionColor) {
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
