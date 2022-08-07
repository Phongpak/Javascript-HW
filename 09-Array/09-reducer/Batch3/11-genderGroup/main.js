const persons = [
  { name: 'John', sex: 'M' },
  { name: 'Jody', sex: 'M' },
  { name: 'Susan', sex: 'F' },
  { name: 'Kate', sex: 'F' },
  { name: 'Sid', sex: 'M' },
];
let male = [];
let female = [];
let result = persons.reduce((acc, object) => {
  if (object.sex == 'M') {
    male.push(object.name);
    acc[object.sex] = male;
  } else {
    female.push(object.name);
    acc[object.sex] = female;
  }
  return acc;
}, {});
console.log(result); //?
console.log(persons.length);
