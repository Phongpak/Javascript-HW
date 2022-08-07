const sale = [1000,500,100]
const discount = [0.1,0.05]

let discountCal = function(arr,discount){
  let netPrice =[];
  arr.forEach((item,index,array)=>{
        netPrice[index] = arr[index]*(1-(discount[index]??0));
    }
    )
    return netPrice;
  
}

console.log(discountCal(sale,discount))