let extractCurrencyValue = (str,rate) => {
  str = str.slice(1)*rate
  return "THB"+str
}
console.log(extractCurrencyValue("$120",30))