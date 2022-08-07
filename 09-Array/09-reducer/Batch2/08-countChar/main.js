let str = 'I live in Thailand';
let arr = str.toLowerCase().split('');
console.log(arr)
let innitial ={}
let result = arr.reduce((acc,item) =>{

  if(item ==" "){
      return acc
  }
  else if(item in acc){
    acc[item]++
  }
  else{
    acc[item] = 1
  }
  return acc;
},innitial)
console.log(result)