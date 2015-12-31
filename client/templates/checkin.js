Template.checkin.helpers({
  habits: function () {
    return Habits.find({});
  }
});

var checkinImage = function (checked) {
  if (checked === 'No') {
    return '/img/notok.png';
  } else if (checked === 'Yes') {
    return '/img/ok.png';
  } else if (checked === 'Maybe') {
    return '/img/attention.png';
  } else {
    return '/img/rating.png';
  }
};

Template.checkinhabit.events({
  'click .checkin-button': function (e) {
    e.preventDefault();
    var img = e.target.parentElement.parentElement.children[0];
    $(img).attr('src', checkinImage(e.target.textContent));
    if (e.target.textContent === 'Yes') {
      Habits.update(this._id, {
        $inc: {time: 1}
      });
    }
  }
});
