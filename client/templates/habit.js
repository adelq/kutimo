Template.habitdetails.events({
  'submit .habit-form': function (e) {
    e.preventDefault();
    var title = e.target.title.value;
    var description = e.target.description.value;
    Habits.update(this._id, {
      $set: {title, description}
    });
  }
});
