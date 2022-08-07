let input = "background-color-pattern";
let newArr = [];
let inputArr = input.split("-");
for (item of inputArr) {
  newArr.push(item.slice(0,1).toUpperCase()+item.slice(1));
}

console.log(newArr.join(""));
