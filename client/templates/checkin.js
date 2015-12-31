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
    $('.checkin-image').attr('src', checkinImage(e.target.textContent));
  }
});
