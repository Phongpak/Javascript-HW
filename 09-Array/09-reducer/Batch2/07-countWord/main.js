let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
let innitial ={}
let result = names.reduce((acc,item) =>{

  // if(item in acc){
  //   acc[item]++
  // }
  // else{
  //   acc[item] = 1
  // }

  acc[item] = acc[item] ? acc[item]+1 :1

  return acc;
},innitial)
console.log(result)