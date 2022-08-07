const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
let newArr=[];
for(i=0;i<alphabets.length;i++){
  let location = alphabets.indexOf("a",i)
  if(location!=-1){
    newArr.push(location)
  }
  alphabets.splice(location,1,0)
}
console.log(newArr)