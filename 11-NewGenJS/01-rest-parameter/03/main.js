function mergeObjects(...obj) {
  let reObj = obj.reverse();
  let result = reObj.reduce((acc, item) => {
    acc = { ...acc, ...item };
    return acc;
  }, {});
  return result;
}

console.log(
  mergeObjects({ key1: 2 }, { key2: 3 }, { key3: 4 }, { key4: 2 }, { key3: 10 })
);

// const mergeObjects = (...objs) => {
//   let reObj = objs.reverse();
//   let newObj = {};

//   newObj = reObj.reduce((acc, item) => {
//     Object.assign(acc, item);
//     return acc;
//   }, {});

//   return newObj; //?
// };

// const obj1 = { num1: 1 };
// const obj2 = {
//   num2: 2,
//   num3: 3,
//   num1: 4,
// };
// console.log(mergeObjects(obj1, obj2));
