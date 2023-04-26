import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

startBtn.addEventListener('click', onTimer);

startBtn.disabled = true;

let leftTime;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      startBtn.disabled = true;
      alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      leftTime = selectedDates[0];
    }
  },
};

const fp = flatpickr(input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function onTimer() {

 const timerId = setInterval(() => {
    if (leftTime.getTime() >= new Date().getTime()) {
      const timer = convertMs(leftTime.getTime() - new Date().getTime());

      days.textContent = addLeadingZero(timer.days);
      hours.textContent = addLeadingZero(timer.hours);
      minutes.textContent = addLeadingZero(timer.minutes);
      seconds.textContent = addLeadingZero(timer.seconds);
    } else {
      clearInterval(timerId);
    }
  }, 1000);
}
