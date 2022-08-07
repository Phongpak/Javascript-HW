let count =0;
let leapYear = year => {
  if(year%100==0&&year%400==0){
    return "leapYear";
  }
  else if(year%100==0&&year%4==0){
    return "Not leapYear";
  }
  else if(year%4==0){
    return "leapYear";
  }
  else{
    return "Not leapYear";
  }
}

let birthyear = (y) => {
  for(i=y;i<=2020;i++){
    if(leapYear(i)=="leapYear"){
      count +=366
    }
    else{
      count +=365
    }
  }
  return count;
}

console.log(birthyear(1996))
