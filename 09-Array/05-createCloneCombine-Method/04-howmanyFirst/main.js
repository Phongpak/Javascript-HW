let first = function(arr,n){
  let newArr=[];
  if(n==1||n==undefined){
    return arr[0];
  }
  else{
    newArr=arr.slice(0,n);
    return newArr
  }
}

console.log(first([1,2,3,4,5],10))