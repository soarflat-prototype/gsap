function promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000)
  });
}

promise().then(() => {
  alert('resolve native are');
});

class A {
  constructor(name) {
    this.name;
  }

  say() {
    console.log(22);
    console.log(this.name)
  }
}