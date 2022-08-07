let truncate = (str,n)=>{
  if(str.length>n) {
    return str = str.slice(0,n-1)+"...";
  }
  return str;
}

console.log(truncate("What I'd like to tell on this topic is:",20))