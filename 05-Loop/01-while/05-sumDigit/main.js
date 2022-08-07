let num = prompt("Enter the number")
let sum = 0;
let remainder;

while (num){
  remainder = num%10;
  num = (num - remainder)/10;
  sum = sum + remainder;
}
alert(`${sum}`)