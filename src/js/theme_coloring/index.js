const refs = {
  colorsBtnEl: document.querySelector('.button__color'),
  wrapperEl: document.querySelector('.wrapper'),
  colorsListEl: document.querySelector('.theme__list'),
  sessionButtonEl: document.querySelector('.button__session'),
  // sessionBtnPallete: document.querySelector('.theme__session-palette'),
  // bgcPallete: document.querySelector('.theme__bgc-palette'),
};

const { colorsBtnEl, colorsListEl, wrapperEl, sessionButtonEl } = refs;

colorsBtnEl.addEventListener('click', palleteOpen);

function palleteOpen(e) {
  e.stopPropagation();
  colorsListEl.style.transform = 'translateX(-190px)';

  wrapperEl.addEventListener('click', paletteClose);
  colorsBtnEl.addEventListener('click', paletteClose);
}

function paletteClose(e) {
  validClick = e.composedPath().includes(colorsListEl);

  if (validClick) {
    return;
  }

  colorsListEl.style.transform = 'translateX(190px)';

  wrapperEl.removeEventListener('click', paletteClose);
  colorsBtnEl.removeEventListener('click', paletteClose);
}

// bg paintning

colorsListEl.addEventListener('click', changeBgc);
colorsListEl.addEventListener('click', changeSessionBtnColor);

function changeSessionBtnColor(e) {
  if (e.target.classList.contains('session-palette__button')) {
    let btnColor = e.target.dataset.color;
    let sessionBtnColorData = sessionButtonEl.dataset.color;

    sessionButtonEl.classList.replace(`${sessionBtnColorData}`, `${btnColor}`);
    return (sessionButtonEl.dataset.color = btnColor);
  }

  return;
}

function changeBgc(e) {
  if (e.target.classList.contains('bgc-palette__button')) {
    let bgcColor = e.target.dataset.color;
    let wrapperColorData = wrapperEl.dataset.color;

    wrapperEl.classList.replace(`${wrapperColorData}`, `${bgcColor}`);
    return (wrapperEl.dataset.color = bgcColor);
  }

  return;
}
