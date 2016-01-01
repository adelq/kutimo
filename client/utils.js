Template.registerHelper('percentage', function () {
  return 100 * this.time / this.goal;
});

Template.registerHelper('round', function (n) {
  return Math.round(n);
});

Template.registerHelper('lowercase', function (n) {
  return n.toLowerCase();
});

fibonacci = (function () {
  var memo = {};

  var fib = function (n) {
    var result;

    if (n in memo) {
      result = memo[n];
    } else {
      if (n === 0 || n === 1) {
        result = n;
      } else {
        result = fib(n - 1) + fib(n - 2);
      }

      memo[n] = result;
    }

    return result;
  };

  return fib;
})();
