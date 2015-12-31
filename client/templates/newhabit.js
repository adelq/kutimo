Template.newhabit.events({
  'submit .habit-form': function (e) {
    e.preventDefault();
    var title = e.target.title.value;
    var description = e.target.description.value;
    Habits.insert({
      title,
      description,
      createdAt: new Date()
    });
    Router.go('/dashboard');
  }
});
