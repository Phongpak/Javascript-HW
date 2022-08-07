let str = '31 45 12 67 34 86 23 37 19 41';
let arr = str.split(" ")
let result = arr.reduce((acc,item)=>{
  if(item<40){
    acc+=+item
  }
  return acc
},0)
console.log(result)