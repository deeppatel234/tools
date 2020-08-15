export const keyBy = (list, key) => {
  return list.reduce((memo, value) => {
    memo[value[key]] = value;
    return memo;
  }, {});
};
