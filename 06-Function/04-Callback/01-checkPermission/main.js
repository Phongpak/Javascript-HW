function access(role,yesFunc,noFunc){
  role=="ADMIN"? yesFunc():noFunc();
  
}

function granted(){
  alert("Access granted")
}

function denied(){
  alert("Access denied")
}

access(prompt("ID"),granted,denied)