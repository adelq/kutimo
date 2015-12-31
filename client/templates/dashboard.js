Template.dashboard.helpers({
  habits: function () {
    return Habits.find({});
  }
});

Template.habit.events({
  'click .delete-habit': function () {
    Habits.remove(this._id);
  }
});
