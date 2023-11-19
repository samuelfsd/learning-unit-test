const removeFlavor = (arr, remove) => {
  arr.splice(arr.indexOf(`${remove}`), 1);
  return arr;
};

module.exports = removeFlavor;