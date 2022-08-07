function cloneObject(obj) {
  let newObj = { ...obj };
  return newObj;
}

input = {
  a: 2,
  b: 3,
  c: 4,
};
console.log(input);
console.log(cloneObject(input));
