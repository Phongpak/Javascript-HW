const a = [1, 5, 7, 11];
const b = [2, 3, 6];

// let arr = a.concat(b)
let arr = [...a,...b]
console.log(arr)