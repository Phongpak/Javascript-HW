let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
];
let newArr=[];
let result=[];
for (i=0;i<flattened.length;i++){
  newArr = flattened[i]
    for(j=0;j<newArr.length;j++){
     result.push(newArr[j])
    }
}
console.log(result);

// let result = flattened.reduce((acc,item)=>{
//   acc.push(...item)
//   return acc
// },[])

// console.log(result)

// let result = flattened.reduce((acc,item,index)=>acc.concat(item),[])
// console.log(result);