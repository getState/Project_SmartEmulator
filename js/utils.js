export function qs(selector, scope = document) {
  if (!selector) throw "no selector";

  return scope.querySelector(selector);
}
  
export function qsAll(selector, scope = document) {
  if (!selector) throw "no selector";

  return Array.from(scope.querySelectorAll(selector));
}

export function on(target, eventName, handler) {
  target.addEventListener(eventName, handler);
}

export function delegate(target, eventName, selector, handler) {
  const emitEvent = (event) => {
    const potentialElements = qsAll(selector, target);

    for (const potentialElement of potentialElements) {
      if (potentialElement === event.target) {
        return handler.call(event.target, event);
      }
    }
  };

  on(target, eventName, emitEvent);
}

export function emit(target, eventName, detail) {
  const event = new CustomEvent(eventName, { detail });
  target.dispatchEvent(event);
}
  

export function createNextId(list = []) {
  if(list.length === 0){
    return 1;
  }
  return Math.max(...list.map((item) => item.id)) + 1;
}


export function formatRelativeDate(date = new Date()) {
  const TEN_SECOND = 10 * 1000;
  const A_MINUTE = 60 * 1000;
  const A_HOUR = 60 * A_MINUTE;
  const A_DAY = 24 * A_HOUR;

  const diff = date - new Date();

  console.log(diff);

  if (diff < 0 ) return `완료`;
  if (diff < TEN_SECOND) return `10초 이내`;
  if (diff < A_MINUTE) return `${Math.floor(diff / 1000)}초 후`;
  if (diff < A_HOUR) return `${Math.floor(diff / 1000 / 60)}분 후`;
  if (diff < A_DAY) return `${Math.floor(diff / 1000 / 60 / 60)}시간 후`;
  return date.toLocaleString("ko-KR", {
    hour12: false,
    dateStyle: "medium",
  });
}