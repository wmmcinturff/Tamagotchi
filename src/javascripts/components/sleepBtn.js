let energy = 50;

const nap = () => {
  if (energy < 100) {
    energy += 50;
  } else if (energy > 100) {
    energy = 100;
  }
  return energy;
};

const slumber = () => {
  if (energy < 100) {
    energy += 60;
  } else if (energy > 100) {
    energy = 100;
  }
  return energy;
};

const sleepButton = () => {
  $('#btn1-nap').click(() => {
    $('sleep-score').html('');
    $('#sleep-score').html(`<div>${nap()}</div>`);
  });
  $('#btn2-slumber').click(() => {
    $('#sleep-score').html('');
    $('#sleep-score').html(`<div>${slumber()}</div>`);
  });
};
export default { sleepButton };
