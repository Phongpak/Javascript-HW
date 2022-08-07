let firstplayer = prompt("Input the number between 1-99");
let secondplayer;
let count = 1;
if(firstplayer>=1 && firstplayer<=99){

  do{
    secondplayer = prompt("Guess the number")
    if(secondplayer>=1 && secondplayer<=99){

      if(secondplayer==firstplayer){
        alert(`Congratulation, the answer is ${firstplayer}, round:${count}`)
        break;
      }
      else if(secondplayer>firstplayer){
        alert("too big");
        count++;
      }
      else if(secondplayer<firstplayer){
        alert("too small");
        count++;
      }
    }
    else{
      alert("invalid number")
      break;
    }
  }while(secondplayer>=1 && secondplayer<=99)
}
else{
  alert("invalid number")
}