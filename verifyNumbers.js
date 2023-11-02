const numbers = (arr) => {
  for (let index = 0; index < arr.length; index += 1) {
    if (typeof arr[index] !== "number") return false;
  }
  return true;
};

module.exports = numbers;
