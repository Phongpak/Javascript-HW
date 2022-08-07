let isPrime = num => {
  a = true;
  for(i=2;i<num;i++){
    if(num%i==0){
      a = false;
      break;
    }
  }
  return a;

}

if(isPrime(5)==true){
  console.log("Prime")
}
else{
  console.log("Not Prime")
}
