let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

const multiplyNumeric = (obj,num)=>{
  const result={}
  for(let key in obj){

    // result[key] = key;
    if(typeof obj[key]==='number'){
      result[key] = obj[key]*num;
    }
    else{
      result[key] = obj[key];
    }
  }
  return result;
}

console.log(multiplyNumeric(menu,3))