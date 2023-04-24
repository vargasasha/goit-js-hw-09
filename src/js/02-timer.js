import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

startBtn.addEventListener('click', onTimer);

startBtn.disabled = true;

let futureDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
 

    if (selectedDates[0] <= new Date()) {
      startBtn.disabled = true;
      alert('Please choose a date in the future');
    } else {
        startBtn.disabled = false;
        futureDate = selectedDates[0];
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


function onTimer() {

    console.log(futureDate);
    
}

