let strength = 100;

const bravelyBuggerOff = () => {
  if (strength >= 0 && strength <= 100) {
    strength += 1;
  }
  return strength;
};

const mortalCombat = () => {
  if (strength >= 0) {
    strength -= 10;
  } else if (strength <= 0) {
    strength = 0;
  }
  return strength;
};

const fightButton = () => {
  $('#btn1-bravely-bugger-off').click(() => {
    $('fight-score').html('');
    $('#fight-score').html(`<div>${bravelyBuggerOff()}</div>`);
  });
  $('#btn2-mortal-combat').click(() => {
    $('#fight-score').html('');
    $('#fight-score').html(`<div>${mortalCombat()}</div>`);
  });
};
export default { fightButton };
