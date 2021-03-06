export const throttle = (fn, delay = 500) => {
  let timer = null
  return function() {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.call(this, ...arguments)
    }, delay)
  }
}
