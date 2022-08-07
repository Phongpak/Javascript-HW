function Calculator(){

  this.num1 = 0;
  this.num2 = 0;
  
  this.sum = function(){
    return this.num1+this.num2
  }
  this.read = function(){
    this.num1 = +prompt("Enter value1")
    this.num2 = +prompt("Enter value2")
  }
  this.mul = function(){
    return this.num1*this.num2
  }
}

const calculator = new Calculator()
calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())
console.log(calculator)
