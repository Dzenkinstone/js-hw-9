import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';
refs = {
  button: document.querySelector('button[data-start]'),
  input: document.querySelector('#datetime-picker'),
  spanDays: document.querySelector('span[data-days]'),
  spanHours: document.querySelector('span[data-hours]'),
  spanMinutes: document.querySelector('span[data-minutes]'),
  spanSeconds: document.querySelector('span[data-seconds]'),
};
let date = Date.now();
refs.button.disabled = true;
flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < date) {
      refs.button.disabled = true;
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
    refs.button.disabled = false;

    refs.button.addEventListener('click', () => {
      refs.button.disabled = true;
      refs.input.disabled = true;
      const countdown = setInterval(() => {
        date = Date.now();
        let decrementDate = selectedDates[0] - date;
        const { days, hours, minutes, seconds } = convertMs(decrementDate);
        if (decrementDate < 70) {
          return clearInterval(countdown);
        }
        refs.spanDays.textContent = days;
        refs.spanHours.textContent = hours;
        refs.spanMinutes.textContent = minutes;
        refs.spanSeconds.textContent = seconds;
      }, 5);
    });
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minaddLeadingZeroutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
