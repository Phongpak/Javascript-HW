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
console.log(`${leapYear(1900)}`)