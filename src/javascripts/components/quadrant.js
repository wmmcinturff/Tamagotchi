const fightQuad = () => {
  $('#fight').html(
    `<div id= 'fightContainer' class='container fight-container'>
          <h2 id='fightName' class='header fight-header'>Fight</h2>
          <div id='fightScore' class='fight-value'></div>
          <div id='fightBtnContainer'>
            <button type='button' id='runBtn' class='button run-button'>Run Away!</button>
            <button type='button' id='battleBtn' class='battle-button'>Ready to Rumble!</button></div>
        </div>`
  );
};

const sleepQuad = () => {
  $('#sleep').html(
    `<div id= 'sleepContainer' class='container sleep-container'>
          <h2 id='sleepName' class='header sleep-header'>Sleep</h2>
          <div id='sleepScore' class='sleep-value'></div>
          <div id='sleepBtnContainer'>
            <button type='button' id='napBtn' class='nap-button'>Nap Time</button>
            <button type='button' id='slumberBtn' class='slumber-button'>Deep Slumber</button></div>
        </div>`
  );
};
const eatQuad = () => {
  $('#eat').html(
    `<div id= 'eatContainer' class='container eat-container'>
          <h2 id='eatName' class='header eat-header'>Eat</h2>
          <div id='eatScore' class='eat-value'></div>
          <div id='eatBtnContainer'>
            <button type='button' id='healthyBtn' class='healthy-button'>Healthy Food</button>
            <button type='button' id='junkBtn' class='junk-button'>Junk Food</button></div>
        </div>`
  );
};
const playQuad = () => {
  $('#play').html(
    `<div id= 'playContainer' class='container play-container'>
          <h2 id='playName' class='header play-header'>Play</h2>
          <div id='playScore' class='play-value'></div>
          <div id='playBtnContainer'>
            <button type='button' id='amusingBtn' class='amusing-button'>Moderately Amusing</button>
            <button type='button' id='funBtn' class='fun-button'>Fun-to-the-Max</button></div>
        </div>`
  );
};
export default {
  fightQuad, sleepQuad, playQuad, eatQuad
};
