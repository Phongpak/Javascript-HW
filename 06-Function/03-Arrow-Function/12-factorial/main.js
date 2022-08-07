let result =1;
let calFac = num =>{
  for(i=2;i<=num;i++){
    result *=i
  }
  return result
}
console.log(calFac(10))