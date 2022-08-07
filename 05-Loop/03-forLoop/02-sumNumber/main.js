let sumAll = 0;
let sumEven = 0;
let sumOdd = 0;
let sumPowerEven =0;
let sumPowerthree=0;
for(i=1;i<=9;i++){
  sumAll+=i
  if(i%2==0){
    sumEven +=i
    sumPowerEven = sumPowerEven + (i**2)
    if(i%3==0){
      sumPowerthree = sumPowerthree + (i**2)
    }
  }
  else if (i%2!=0){
    sumOdd += i
    if(i%3==0){
      sumPowerthree = sumPowerthree + (i**2)
    }
  }
}
console.log(`sumAll: ${sumAll}`)
console.log(`sumEven: ${sumEven}`)
console.log(`sumOdd: ${sumOdd}`)
console.log(`sumPowerEven: ${sumPowerEven}`)
console.log(`sumPowerthree: ${sumPowerthree}`)