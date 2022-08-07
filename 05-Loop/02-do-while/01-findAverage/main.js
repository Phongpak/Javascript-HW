let num=0;
let sum=0;
let count=-1;
do{
  sum += +num;
  count++;
  num = prompt("Enter the number")
}while(+num>0||+num<0)
if(count>0){
  console.log(`sum:${sum}, average:${sum/count}`)
}
else{
  alert(`No input`)
}