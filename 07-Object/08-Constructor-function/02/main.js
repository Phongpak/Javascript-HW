function accumulator (startingValue){
  this.currentValue = startingValue
  this.read = function (){ 
    this.currentValue += +prompt("Inpput the number")
  }
  this.show = function(){ 
    alert(this.currentValue)
  }
}
let acc1 = new accumulator(5);
let acc2 = new accumulator(10);
let acc3 = new accumulator(0);
acc1.read()
acc1.show()
console.log(acc1)
console.log(acc2)
console.log(acc3)
