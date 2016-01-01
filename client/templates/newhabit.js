Template.newhabit.events({
  'submit .habit-form': function (e) {
    e.preventDefault();
    var title = e.target.title.value;
    var description = e.target.description.value;
    Habits.insert({
      title,
      description,
      user: Meteor.userId(),
      goal: 21,
      time: 0,
      createdAt: new Date(),
      lastUpdated: new Date()
    });
    Router.go('/dashboard');
  }
});
