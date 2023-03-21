
const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    bodyColor: document.querySelector('body'),
  };
  
  let timerId = null;
  
  let PROMPT_DELAY = 1000;
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  refs.startBtn.addEventListener('click', handleStartColor);
  
  refs.stopBtn.addEventListener('click', handleStopColor);
  
  function handleStartColor() {
    refs.startBtn.disabled = true;
    timerId = setInterval(() => {
      refs.bodyColor.style.background = getRandomHexColor();
    }, PROMPT_DELAY);
  }
  
  function handleStopColor() {
    refs.startBtn.disabled = false;
    clearInterval(timerId);
  }
  