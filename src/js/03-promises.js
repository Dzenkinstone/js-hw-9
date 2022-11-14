import Notiflix from 'notiflix';

const form = document.querySelector('.form');

const refs = {
  delay: form.elements.delay.value,
  step: form.elements.step.value,
  amount: form.elements.amount.value,
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  refs.delay = e.currentTarget.delay.value;
  refs.step = e.currentTarget.step.value;
  refs.amount = e.currentTarget.amount.value;

  for (let i = 1; i <= refs.amount; i += 1) {
    createPromise(i, refs.delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      });
  }
});
