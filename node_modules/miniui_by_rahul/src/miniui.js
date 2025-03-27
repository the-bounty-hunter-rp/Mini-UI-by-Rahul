export function setSignal(initialValue) {
  let value = initialValue;
  const subscribers = new Set();

  function get() {
    return value;
  }

  function set(newValue) {
    value = newValue;
    subscribers.forEach((fn) => fn());
  }

  function subscribe(fn) {
    subscribers.add(fn);
  }

  return [get, set, subscribe];
}

export function render(Component, container) {
  container.innerHTML = "";
  container.appendChild(Component());
}
