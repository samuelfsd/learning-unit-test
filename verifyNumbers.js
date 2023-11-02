const numbers = (arr) => {
  for (let index = 0; index < arr.length; index += 1) {
    if (typeof arr[index] !== "number") return false;
  }
  return true;
};

console.log(numbers([1, "2", 3]));

module.exports = numbers;
