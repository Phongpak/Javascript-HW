const array1 = [1, 2, 3, 4, 5, 6];
let square = (arr) => {
  let newArr = [...arr];
  newArr.splice(3, 1, arr[3] ** 2);
  return newArr;
};
console.log(square(array1));
console.log(array1);
