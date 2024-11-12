// Solution By Dr. Taha J. Green

const number_lists = [10, 15, 3, 7];
const k = 17;
let isThereANumber = false;

for (let i = 0; i < number_lists.length; i++) {
  for (let j = 0; j < i; j++) {
    const condition = number_lists[i] + number_lists[j] === k;
    if (condition) {
      isThereANumber = true;
      break;
    }
  }
  if (isThereANumber) break;
}

console.log(isThereANumber);

// Solution By Mufti Chat GPT

let nums = [10, 15, 3, 7];

let found = false;

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === k) {
      found = true;
      break;
    }
  }
  if (found) break;
}

console.log(found);
