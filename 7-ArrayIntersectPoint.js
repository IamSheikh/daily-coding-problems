const a = [3, 7, 8];
const b = [88, 1, 8];
const result = [];

a.forEach((i) => {
  if (b.includes(i)) {
    result.push(i);
  }
});

console.log(result);
