const num = [5, 1, 1, 5];

let result = 0;

if (num.length === 0) result = 0;
else if (num.length === 1) result = Math.max(0, num[0]);
else {
  let include = 0;
  let exclude = 0;

  for (let i = 0; i < num.length; i++) {
    let newInclude = exclude + num[i];
    exclude = Math.max(include, exclude);
    include = newInclude;
  }

  result = Math.max(include, exclude);
}

console.log(result);
