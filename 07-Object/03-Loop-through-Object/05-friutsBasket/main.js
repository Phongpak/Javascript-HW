function Basket(){
  this.key = prompt("Name")
  this.value = prompt("Amount") 
  if(this.value>1){
    this.key += "s"
  }
}
let basket = new Basket()
console.log(basket)