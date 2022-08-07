const arrayNum = [9, 17, 23, 5];
// ค่าที่มากกว่า 10
const resultNum = arrayNum.filter(item=>item>10)
console.log(resultNum)
const arrayInt = [1, 2, 3, 4];
const resultInt = arrayInt.filter(item=>item%2!=0)
console.log(resultInt)
// // ค่าที่เป็นเลขคี่

const arrayMix = [1, '1', 2, {}];
const resultMix = arrayMix.filter(item=>typeof(item)=="number")
console.log(resultMix)

// // ค่าที่ประเภทข้อมูลเป็น Number

const arrayfruit = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];

const resultfruit = arrayfruit.filter(item=>(item.length)>6)
console.log(resultfruit)
// // ค่าที่มีตัวอักษรมากกว่า 6 ตัว


const arrayPositive = [1, -3, 2, 8, -4, 5];
const resultPositive = arrayPositive.filter(item=>item>6)
console.log(resultPositive)
// // ค่าที่เป็นเลขบวก

// const array = [1, 3, 4, 5, 6, 7, 8];
// // ค่าที่หาร 3 ลงตัว

// const array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// // ค่าที่ขึ้นต้นด้วยตัว E

// const array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// // ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด

// const array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
// // ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่

// const array = [
//   { name: 'Ben', age: 14 },
//   { name: 'Phil', age: 18 },
//   { name: 'John', age: 32 },
//   { name: 'Ann', age: 16 },
//   { name: 'Paul', age: 24 }
// ];
// // อายุไม่น้อยกว่า 18 


// const array = [
//   { id: 1, name: 'Pepsi' },
//   { id: 2, name: 'Mirinda' },
//   { id: 3, name: 'Coke' },
//   { id: 4, name: 'Fanta' },
//   { id: 5, name: 'Sprite' }
// ];
// // id ไม่เท่ากับ 4

// const array = [
//   { name: 'John', birth: '2001-07-31' },
//   { name: 'Jack', birth: '1990-06-24' },
//   { name: 'Jim', birth: '1984-12-13' },
//   { name: 'Jeff', birth: '1996-02-05' },
//   { name: 'Joe', birth: '2002-06-13' }
// ];