let num = prompt('input number');

if(num===null || num.trim()==""|| isNaN(num)){
  alert('Invalid number')
}

else if(num>0){
  alert('positive number');
}
else if(+num==0){
  alert('zero');
}
else {
  alert('negative number');
}
// else{
//   alert('Invalid number');
// }