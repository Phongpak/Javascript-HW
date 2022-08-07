function doubleAndReturnArgs(arr, ...num) {
  let double = num.map((item) => item * 2);
  let newArr = [...arr, ...double];

  return newArr;
}
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); //?
