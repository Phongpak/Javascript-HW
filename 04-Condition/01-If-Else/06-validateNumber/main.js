let firstNum = prompt('Input first num');
let secondNum = prompt('Input second num');
if(firstNum===null || firstNum.trim()==""|| isNaN(firstNum)||secondNum===null || secondNum.trim()==""|| isNaN(secondNum)){
  alert('Invalid number')
}else{
  alert(+firstNum + +secondNum);
}