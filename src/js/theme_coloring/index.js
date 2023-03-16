const refs = {
  colorsBtnEl: document.querySelector('.button__color'),
  containerEl: document.querySelector('.container'),
  colorsListEl: document.querySelector('.theme__list'),
  //   sessionBtnPallete: document.querySelector('.theme__session-palette'),
  //   bgcPallete: document.querySelector('.theme__bgc-palette'),
};

const { colorsBtnEl, colorsListEl, containerEl } = refs;

colorsBtnEl.addEventListener('click', palleteOpen);

function palleteOpen() {
  colorsListEl.style.transform = 'translateX(-160px)';

  containerEl.addEventListener('click', palleteClose);
}

// function palleteClose(event) {
//   if (
//     !event.target.nodeName === 'BUTTON' ||
//     !event.target.classList.contains('.theme__list')
//   ) {
//     colorsListEl.style.transform = 'translateX(160px)';
//     return containerEl.removeEventListener('click', palleteClose);
//   }
// }
