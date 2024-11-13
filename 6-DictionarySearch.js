const dictionary = ['dog', 'deer', 'deal'];
const query = 'de';

const search = (d, q) => {
  const foundedResults = [];

  d.forEach((word) => {
    if (word.includes(q)) foundedResults.push(word);
  });

  return foundedResults.length === 0 ? 'No Results Founded' : foundedResults;
};

const searchedData = search(dictionary, query);
console.log(searchedData);
