let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

function getAverageAge(array){
  let result = array.reduce((sum,current) =>sum+current.age,0)
  return result/array.length;
}



console.log(getAverageAge(arr));