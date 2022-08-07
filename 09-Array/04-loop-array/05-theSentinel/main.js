let arr = [];
let sum =0;
let input;
  do{
     input = prompt("Enter input")
    if(input==null||input.trim()==""||isNaN(input)){
      break;
    }
    else{
      arr.push(+input);
    }
    console.log(input);
  }while(!isNaN(input)||input.trim!==""||input!=null)

arr.forEach(item => {
  sum+=item
});
console.log(sum)