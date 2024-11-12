const input = [1, 2, 3, 4, 5];
const output = [];

for (let i = 0; i < input.length; i++) {
  let result = 1;
  let clonedArray = [...input];
  delete clonedArray[i];

  clonedArray.forEach((num) => {
    result *= num;
  });

  output.push(result);
}

console.log(output);
