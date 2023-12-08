// debounce : 짧은 시간 간격으로 연속해서 이벤트가 발생하면 이벤트 핸들러를 호출하지 않다가 마지막 이벤트로부터 일정 시간(delay)이 지난 후에 경과한 후에 한 번만 호출하도록 하는 것

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
