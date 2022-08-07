let num = prompt("Enter the number")
let i=1;
  while (num>10){
    if(num/10>1){
      num/=10
      i++
    }
  }
  alert(`${i}`)