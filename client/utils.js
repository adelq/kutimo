Template.registerHelper('percentage', function () {
  return 100 * this.time / this.goal;
});

var fibonacci = function (n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};
