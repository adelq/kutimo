Template.registerHelper('percentage', function () {
  return 100 * this.time / this.goal;
});

var fibonacci = (function () {
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
