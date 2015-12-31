Router.route('/', function () {
  this.render('home');
});

Router.route('/dashboard');
Router.route('/checkin');
Router.route('/newhabit');
Router.route('/habit/:_id', function () {
  var habit = Habits.findOne({_id: this.params._id});
  this.render('habitdetails', {data: habit});
});
