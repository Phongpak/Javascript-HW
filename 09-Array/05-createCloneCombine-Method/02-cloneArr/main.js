arr = [1,2,3,4,5]
// let clone = (arr) => [...arr]
let clone = (arr) => arr.slice()
let newArr = clone(arr)
console.log(newArr)
