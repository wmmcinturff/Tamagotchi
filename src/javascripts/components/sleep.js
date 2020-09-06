const sleepQuad = () => {
  const domString = `<div id= 'sleepContainer'>
            <h2 id='sleepName'>Sleep</h2>
            <div id='sleepScore'>
              <h6>Your energy is</h6></div>
            <div id='sleepBtnContainer'>
              <button type='button' id='napBtn' class='nap-button'>Nap Time</button>
              <button type='button' id='slumberBtn' class='slumber-button'>Deep Slumber</button></div>
          </div>`;
  $('#sleep').html(domString);
};

export default { sleepQuad };
