const arrayInt = [1, 2, 30, 400];
const resultInt = arrayInt.map((item)=>item*2)
console.log(resultInt)
// result: [2, 4, 60, 800]

const arrayNum = [1, 2, 3, 4];
const resultNum = arrayNum.map((item)=>String(item))
console.log(resultNum)
// // result: ["1", "2", "3", "4"]

const arrayType = [1, '1', 2, {}];
const resultType = arrayType.map((item)=>typeof(item))
console.log(resultType)
// // result: ["number", "string", "number", "object"]

const arrayUpper = ['apple', 'banana', 'orange'];
const resultUpper = arrayUpper.map((item)=>item.toUpperCase())
console.log(resultUpper)
// // result: ["APPLE", "BANANA", "ORANGE"]

const arrayNumType = [1, 3, 4, 5, 6, 7, 8];
const resultNumType = arrayNumType.map((item)=>{
  if(item%2==0){
    return "even"
  }
  else{
    return "odd"
  }
})
console.log(resultNumType)

// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]

const arrayToPositive = [1, -3, 2, 8, -4, 5];
const resultToPositive = arrayToPositive.map((item)=>{
  if(item<0){
    return item*-1
  }
  else{
    return item
  }
})
console.log(resultToPositive)
// // result: [1, 3, 2, 8, 4, 5]

const arrayToString = [100, 200.25, 300.84, 400.3];
const resultToString = arrayToString.map((item)=>String(item.toFixed(2)))
console.log(resultToString)
// // result: ["100.00", "200.25", "300.84", "400.30"]

const arrayMonth = [0, 5, 10, 7, 6, 5, 0];
const month = ["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"]
const resultMonth = arrayMonth.map((item)=>month[item])
console.log(resultMonth)
// // result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

const arraySqrt = [1, 16, 81, 256, 625, 1296];
const resultSqrt = arraySqrt.map((item)=>Math.sqrt(Math.sqrt(item)))
console.log(resultSqrt)
// // result: [1, 2, 3, 4, 5, 6]

const arrayFruit = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
const resultFruit = arrayFruit.map((item)=>item.name)
console.log(resultFruit)
// // result: ["apple", "banana", "watermelon"]

const arrayFruitValue = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
const resultFruitValue = arrayFruitValue.map((item)=>item.age)
console.log(resultFruitValue)
// // result: [14, 18, 32]

const arrayFruitPlace = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];
const resultFruitPlace = arrayFruitPlace.map((item)=>`${item.name} ${item.surname}`)
console.log(resultFruitPlace)
// // result: ["apple London", "banana Bangkok", "watermelon Singapore"]

const arrayFruitAge = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];
const currentYear = "2021"
const resultFruitAge = arrayFruitAge.map((item)=>{
    let age = currentYear - item.birth.slice(0,4)
    return {...item,age:age}
    // item.age = age;
    // return item;
})
console.log(resultFruitAge)
// // result: [
// //   { name: "apple", birth: "2000-01-01", age: 21 },
// //   { name: "banana", birth: "1990-10-01", age: 31 },
// //   { name: "watermelon", birth: "1985-12-01", age: 36 },
// // ]

const array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];

const display = array.map(function(item,index,arr){

  date = item.birth.slice(-2)
  Month = month[item.birth.slice(5,7)-1].toLowerCase()
  year = item.birth.slice(0,4)

  return `<tr><td>${item.name}</td><td>${date} ${Month} ${year}</td></tr>`
})
console.log(display)