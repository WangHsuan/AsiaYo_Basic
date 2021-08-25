function debounce(func, delay=250) {
    let timer = null;
   
    return () => {
      let context = this;
      let args = arguments;
   
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay)
    }
}

module.exports = {
    debounce
}