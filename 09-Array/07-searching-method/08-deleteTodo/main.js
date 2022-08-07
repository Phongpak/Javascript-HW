const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];
function deletetask(id){

  let foundindex = tasks.findIndex((index)=>item.id==id)
  if(foundindex !=-1){
    tasks.splice(foundindex,1)
  }
}
deletetask(1)
console.log(tasks)
deletetask(2)
console.log(tasks)