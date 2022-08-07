let firstNum, secondNum, thirdNum;
firstNum = prompt("Input 1st number");
if(firstNum===null || firstNum.trim()==""|| isNaN(firstNum)){
  alert('Invalid number')
}
else
{
   secondNum = prompt("Input 2nd number")
   if(secondNum===null || secondNum.trim()==""|| isNaN(secondNum)){
    alert('Invalid number')
  }
   else{
      thirdNum = prompt("Input 3rd number")
      if(thirdNum===null || thirdNum.trim()==""|| isNaN(thirdNum)){
        alert('Invalid number')
      }
      else{
         if(firstNum==secondNum&&firstNum==thirdNum){
          alert(`${firstNum},${secondNum},${firstNum}`)
        }
        else if(firstNum==secondNum){
          if(firstNum>thirdNum){
            alert(`${firstNum},${secondNum},${thirdNum}`)
          }
          else{
            alert(`${thirdNum},${firstNum},${secondNum}`)
          }        
        }
        else if(firstNum==thirdNum){
          if(firstNum>secondNum){
            alert(`${firstNum},${thirdNum},${secondNum}`)
          }
          else{
            alert(`${secondNum},${firstNum},${thirdNum}`)
          }
        }
        else if(secondNum==thirdNum){
          if(secondNum>firstNum){
            alert(`${secondNum},${thirdNum},${firstNum}`)
          }
          else{
            alert(`${firstNum},${secondNum},${thirdNum}`)
          }

        }
        else if(firstNum>secondNum){
          if(firstNum>thirdNum){
            if(secondNum>thirdNum){
              alert(`${firstNum},${secondNum},${thirdNum}`)
            }
            else{
              alert(`${firstNum},${thirdNum},${secondNum}`)
            }
          }
          else{
            alert(`${thirdNum},${firstNum},${secondNum}`)
          }
        }
        else{
          if(secondNum>thirdNum){
            if(firstNum>thirdNum){
              alert(`${secondNum},${firstNum},${thirdNum}`)
            }
            else{
              alert(`${secondNum},${thirdNum},${firstNum}`)
            }
          }
          else{
            alert(`${thirdNum},${secondNum},${firstNum}`)
          }
        }

      }
  }
}