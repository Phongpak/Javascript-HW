const array = [29, 17, 13, 47, 23, 31];
let sum=0;
// array.forEach((item,index,array)=>{
//   sum +=item;
// })

// for(let item of array){
//   sum += item
// }

for(let index in array){
  console.log(array[index]);
  sum+=array[index];
}
console.log(sum);