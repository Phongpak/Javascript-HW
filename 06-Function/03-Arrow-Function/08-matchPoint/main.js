let score = a =>{
  if(a=="win"){
    return 3;
  }
  else if(a=="draw"){
    return 1;
  }
  else if(a=="lose"){
    return 0;
  }
  else{
    return "invalid";
  }
}
console.log(`${score("lose")}`)