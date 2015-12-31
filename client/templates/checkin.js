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

var within24hours = function (lastUpdated) {
  var now = new moment();
  var diff = moment.duration(now.subtract(moment(lastUpdated)));
  return diff < moment.duration(1, 'days');
};

Template.checkinhabit.events({
  'click .checkin-button': function (e) {
    e.preventDefault();
    var img = e.target.parentElement.parentElement.children[0];
    $(img).attr('src', checkinImage(e.target.textContent));
    if (e.target.textContent === 'Yes' && !within24hours(this.lastUpdated)) {
      Habits.update(this._id, {
        $inc: {time: 1},
        $set: {lastUpdated: new Date()}
      });
    }
  }
});
