Template.habitdetails.events({
  'submit .habit-form': function (e) {
    e.preventDefault();
    var title = e.target.title.value;
    var description = e.target.description.value;
    var goal = parseInt(e.target.goal.value);
    Habits.update(this._id, {
      $set: {title, description, goal}
    });
  }
});

Template.habitdetails.helpers({
  'nextReminder': function () {
    return fibonacci(this.time);
  }
});
