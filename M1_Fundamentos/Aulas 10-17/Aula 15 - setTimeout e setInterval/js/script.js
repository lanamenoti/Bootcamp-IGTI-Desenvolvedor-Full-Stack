window.addEventListener('load', function () {
  const timer = document.querySelector('#timer');
  let count = 0;

  const interval = setInterval(() => {
    timer.textContent = ++count;

    if (count === 10) {
      clearInterval(interval);
      return;
    }

    if (count % 5 === 0) {
      setTimeout(() => {
        timer.textContent = count + ',5';
      }, 700);
    }
  }, 1000);
});
