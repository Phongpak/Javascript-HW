let userName = prompt("Please enter username");
if (userName == "") {
  alert("username is required")
}else if(userName===null){
    alert('Invalid username')
}else{
    let password = prompt("Please enter password")
    if( password == "" ){
      alert("password is required")
    }
    else if(password===null){
      alert('Invalid password')
    }
    else if((userName == "admin"&&password == "1234")||(userName == "john"&&password == "qwerty")){
      alert(`Hello ${userName}`)
    }
    else{
      alert("invalid username or password")
    }
   }