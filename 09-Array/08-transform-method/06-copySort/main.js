let arr = ['React', 'Vue', 'Angular'];
let copySorted = (arr)=>{
  let newArr = [...arr]
  return newArr.sort()
}
let sorted = copySorted(arr);
console.log(sorted); 
console.log(arr);