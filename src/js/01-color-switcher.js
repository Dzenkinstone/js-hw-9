const body = document.querySelector('body');
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
console.log(start);
console.log(stop);

const bcgSet = {
  intervalId: null,
  isActive: false,

  start() {
    console.log(this.isActive);
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    start.disabled = true;
    stop.disabled = false;

    this.intervalId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
  },

  stop() {
    this.isActive = false;
    start.disabled = false;
    stop.disabled = true;
    clearInterval(this.intervalId);
  },
};

start.addEventListener('click', () => {
  bcgSet.start();
});

stop.addEventListener('click', () => {
  bcgSet.stop();
});
