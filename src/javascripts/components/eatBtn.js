let full = 100;

const healthyFood = () => {
  if (full >= 0 && full <= 100) {
    full += 10;
  }
  return full;
};

const junkFood = () => {
  if (full >= 0) {
    full -= 3;
  } else if (full <= 0) {
    full = 0;
  }
  return full;
};

const eatButton = () => {
  $('#btn1-healthy').click(() => {
    $('#eat-score').html('');
    $('#eat-score').html(`<div>${healthyFood()}</div>`);
  });
  $('#btn2-junk food').click(() => {
    $('#eat-score').html('');
    $('#eat-score').html(`<div>${junkFood()}</div>`);
  });
};
export default { eatButton };
