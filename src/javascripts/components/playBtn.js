let fun = 50;

const superFun = () => {
  if (fun < 100) {
    fun += 50;
  }
  return fun;
};

const sortaFun = () => {
  if (fun < 100) {
    fun += 2;
  } else if (fun >= 0) {
    fun = 100;
  }
  return fun;
};

const playButton = () => {
  $('#btn1-super-fun-time').click(() => {
    $('#play-score').html('');
    $('#play-score').html(`<div>${superFun()}</div>`);
  });
  $('#btn2-sorta-fun').click(() => {
    $('#play-score').html('');
    $('#play-score').html(`<div>${sortaFun()}</div>`);
  });
};
export default { playButton };
