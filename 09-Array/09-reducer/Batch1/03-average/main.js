const scores = [
  { score: 90, subject: 'HTML', weight: 0.2 },
  { score: 95, subject: 'CSS', weight: 0.3 },
  { score: 85, subject: 'JavaScript', weight: 0.5 }
];
let result = scores.reduce((acc, sw)=>sw.score*sw.weight+acc,0)
console.log(result);