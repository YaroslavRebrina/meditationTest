import { sessionButtonEl } from '../theme_coloring';
import { wrapperEl } from '../theme_coloring';
git
const BGC_KEY = 'bgcColor';
const BUTTON_SESSION_KEY = 'sessionButtonColor';

const colorInfo = {
  bgcColor: localStorage.getItem(BGC_KEY),
  buttonSessionColor: localStorage.getItem(BUTTON_SESSION_KEY),
};

markup(colorInfo.bgcColor, colorInfo.buttonSessionColor);

function markup(bgcColorParam = 'pink', buttonSessionColor = 'green') {
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
  let bgcColor = bgcColorParam;
  let wrapperColorData = wrapperEl.dataset.color;

  wrapperEl.classList.replace(`${wrapperColorData}`, `${bgcColor}`);
  wrapperEl.dataset.color = bgcColor;
  localStorage.setItem('bgcColor', wrapperEl.dataset.color);
}
