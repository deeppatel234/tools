export const keyBy = (list, key) => {
  return list.reduce((memo, value) => {
    memo[value[key]] = value;
    return memo;
  }, {});
};

export const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
