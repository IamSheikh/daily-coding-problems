let arr = [3, 4, -1, 1];

function removeTheTheNegativeMinimum() {
  const min = Math.min(...arr);
  const indexOfMin = arr.indexOf(min);
  if (min <= 0) arr.splice(indexOfMin, 1);
}

for (let i = 0; i < arr.length; i++) {
  arr.filter((item, index) => {
    arr.find((value, idx) => {
      if (
        value === item &&
        index !== idx &&
        value === Math.min(...arr) &&
        Math.min(...arr) <= 0
      ) {
        removeTheTheNegativeMinimum();
      } else if (
        value === item &&
        index === idx &&
        value === Math.min(...arr) &&
        Math.min(...arr) <= 0
      ) {
        removeTheTheNegativeMinimum();
      } else if (value === item && index !== idx) {
        arr.splice(index, 1);
      }
    });
  });
}

let result = Math.floor(((arr.length + 1) * (arr.length + 2)) / 2);
for (let i = 0; i < arr.length; i++) {
  if (result <= 0) break;
  result -= arr[i];
}

console.log(result);
