let filterOutodds = (...num) => {
  let result = num.reduce((acc, item) => {
    if (item % 2 == 0) {
      acc.push(item);
    }
    return acc;
  }, []);

  return result;
};

console.log(filterOutodds(1, 2, 3, 4, 5, 6, 7));
