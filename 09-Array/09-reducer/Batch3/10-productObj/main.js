const products = [
  { id: 1, name: 'Crystal' },
  { id: 4, name: 'Namthip' },
  { id: 5, name: 'Nestle' }
];
let newId;
let result = products.reduce((acc, object) =>{
  let newObj={};
  newObj.name = object.name;
  console.log(newObj);
  acc[object.id] = newObj;
  return acc;
},{})
console.log(result);