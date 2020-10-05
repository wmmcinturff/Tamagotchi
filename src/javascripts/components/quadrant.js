import petData from '../data/petData';
import eatBtn from './eatBtn';
import fightBtn from './fightBtn';
import playBtn from './playBtn';
import sleepBtn from './sleepBtn';

const buildPetCards = (item) => {
  const domString = `
    <div class="card-${item.activity}">
    <div class="container">
    <h4><b>${item.activity.toUpperCase()}</b></h4>
    <div id="${item.id}">
    <h5 id="${item.activity}-score">${item.score}</h5>
    </div>
    <button id="btn1-${item.button1}">${item.button1}</button>
    <button id="btn2-${item.button2}">${item.button2}</button>
    </div>
    </div>`;
  return domString;
};

const tamagotchiQuadCards = () => {
  $('#eat').html('');
  $('#fight').html('');
  $('#play').html('');
  $('#sleep').html('');

  const data = petData.getArray();
  data.forEach((item, index) => {
    if (item.activity === 'eat') {
      $('#eat').append(buildPetCards(item, index));
    }
    if (item.activity === 'play') {
      $('#play').append(buildPetCards(item, index));
    }
    if (item.activity === 'fight') {
      $('#fight').append(buildPetCards(item, index));
    }
    if (item.activity === 'sleep') {
      $('#sleep').append(buildPetCards(item, index));
    }
  });
  eatBtn.eatButton();
  fightBtn.fightButton();
  playBtn.playButton();
  sleepBtn.sleepButton();
};

export default { buildPetCards, tamagotchiQuadCards };
