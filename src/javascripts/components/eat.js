const eatQuad = () => {
  const domString = `<div id= 'eatContainer'>
            <h2 id='eatName'>Eat</h2>
            <div id='eatScore'>
            <h6>You are full</h6></div>
            <div id='eatBtnContainer'>
              <button type='button' id='healthyBtn' class='healthy-button'>Healthy Food</button>
              <button type='button' id='junkBtn' class='junk-button'>Junk Food</button></div>
          </div>`;
  $('#eat').html(domString);
};

export default { eatQuad };
