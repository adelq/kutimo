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
