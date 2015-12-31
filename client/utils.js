Template.registerHelper('percentage', function () {
  return 100 * this.time / this.goal;
});
