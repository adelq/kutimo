Template.checkin.helpers({
  habits: function () {
    return Habits.find({});
  }
});

Template.checkinhabit.helpers({
  image: function (checked) {
    if (checked === false) {
      return '/img/notok.png';
    } else if (checked === true) {
      return '/img/ok.png';
    } else if (checked === 'maybe') {
      return '/img/attention.png';
    } else {
      return '/img/rating.png';
    }
  }
});
