let multiple = (...num) => {
  return num.reduce((acc, item) => acc * item, 1);
};

console.log(multiple(1, 2, 3, 4, 5));
