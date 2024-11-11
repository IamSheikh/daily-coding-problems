const number_lists = [10, 15, 3, 7];
const k = 17;

for (let i = 0; i < number_lists.length; i++) {
  for (let j = 0; j < i; j++) {
    const equation = number_lists[i] + number_lists[j];
    if (equation === k) console.log(true);
  }
}
