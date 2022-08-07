let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
let initial =[];
let result = alphabets.reduce((acc,item)=>{

  if(!acc.includes(item)){
    acc.push(item);
  }
  return acc;

},initial)
console.log(result)