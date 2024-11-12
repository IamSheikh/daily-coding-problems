// Solution by Dr. Taha J. Green

const input = [1, 2, 3, 4, 5];
const output = [];

for (let i = 0; i < input.length; i++) {
  let result = 1;
  let clonedArray = [...input];
  clonedArray.splice(i, 1);

  clonedArray.forEach((num) => {
    result *= num;
  });

  output.push(result);
}

console.log(output);

// Solution by Mufti Chat GPT

const input2 = [1, 2, 3, 4, 5];
const output2 = [];

for (let i = 0; i < input2.length; i++) {
  let result = 1;

  for (let j = 0; j < input2.length; j++) {
    if (i !== j) {
      result *= input2[j];
    }
  }

  output2.push(result);
}

console.log(output2);
