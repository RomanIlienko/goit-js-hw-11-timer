const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
}

const INTERVAL_VALUE = 1000;

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate
  }

  intervalId = setInterval(() => {
    const time = this.targetDate - Date.now();
    this.getTimeBy(time);
  }, INTERVAL_VALUE)

  getTimeBy(time) {
  const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
  };

  pad(value) {
  return String(value).padStart(2, '0')
  };


}


new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
});





