Template.dashboard.helpers({
  habits: function () {
    return Habits.find({});
  }
});

Template.habit.helpers({
  percentage: function () {
    return 100;
  }
});

Template.habit.events({
  'click .delete-habit': function () {
    Habits.remove(this._id);
  }
});
