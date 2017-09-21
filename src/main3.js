import Promise from 'es6-promise';

function promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000)
  });
}

promise().then(() => {
  alert('resolve');
});