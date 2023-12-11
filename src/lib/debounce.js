const debounce = (handler, delay = 1000) => {
  let timerId = null;

  return function () {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = window.setTimeout(() => {
      handler();
      timerId = null;
    }, delay);
  };
};

export default debounce;
