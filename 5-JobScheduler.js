const jobScheduler = (f, n) => {
  setTimeout(f, n);
};

jobScheduler(() => {
  console.log('Hey, Clown!');
}, 1000);
