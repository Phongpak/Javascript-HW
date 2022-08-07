function removeRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  console.log('random index: ', randomIndex);
  let result = [...arr];
  result.splice(randomIndex, 1);
  return result;
}
arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);
console.log(removeRandom(arr));
