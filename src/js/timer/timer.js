import { refs } from '../theme_coloring';

const { timerRef, timerBtnRef, wrapperEl } = refs;

console.log(timerRef, timerBtnRef);
timerBtnRef.addEventListener('click', timerOpen);

function timerOpen(e) {
  e.stopPropagation();

  timerRef.style.transform = 'translate(-50%, 80px)';

  wrapperEl.addEventListener('click', timerClose);
  timerBtnRef.addEventListener('click', timerClose);
}

function timerClose(e) {
  const validClick = e.composedPath().includes(timerRef);

  if (validClick) {
    return;
  }

  timerRef.style.transform = 'translate(-50%, -80px)';

  wrapperEl.removeEventListener('click', timerClose);
  timerBtnRef.removeEventListener('click', timerClose);
}
