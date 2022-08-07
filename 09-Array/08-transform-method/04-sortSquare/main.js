const arr = [-3, 2, 0, -7, 4, 6];
function compareSquare(a,b){
  return (a**2<b**2?-1:1);
}
console.log(arr.sort(compareSquare));