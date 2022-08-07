let summary = (name, lastName, ...hobbies) => {
  return [name, lastName, ...hobbies, hobbies.length];
};

console.log(summary('John', 'Doe', 'swimming', 'reading', 'shopping')); //?
