import { refs } from '../variables';
import { paletteClose } from '../theme_coloring';

const { timerRef, timerBtnRef, wrapperEl, colorsListEl, colorsBtnEl } = refs;

timerBtnRef.addEventListener('click', timerOpen);

function timerOpen(e) {
  e.stopPropagation();
  colorsListEl.classList.remove('theme__list--shown');
  timerRef.classList.add('timer__shown');
  //   timerRef.style.transform = 'translate(-50%, 80px)';
  wrapperEl.removeEventListener('click', paletteClose);
  colorsBtnEl.removeEventListener('click', paletteClose);
  wrapperEl.addEventListener('click', timerClose);
  timerBtnRef.addEventListener('click', timerClose);
}

export function timerClose(e) {
  const validClick = e.composedPath().includes(timerRef);

  if (validClick) {
    return;
  }
  colorsListEl.classList.remove('theme__list--shown');
  timerRef.classList.remove('timer__shown');

  wrapperEl.removeEventListener('click', timerClose);
  timerBtnRef.removeEventListener('click', timerClose);
}
