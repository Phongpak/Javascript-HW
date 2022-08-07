const arr = [2, 3, 5, 7, 11];
let squareArr = function (arr){
  arr.forEach((item,index,array)=>{
    arr[index] = item**2
  })
  return arr;
} 
console.log(arr)
console.log(squareArr(arr))