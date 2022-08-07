let cloneArray = (arr) => {
  let newArr = [...arr];
  return newArr;
};
let array = [1, 2, 3, 4, 5, 6];
console.log(cloneArray(array));
console.log(array);
