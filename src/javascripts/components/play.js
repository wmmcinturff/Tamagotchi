const playQuad = () => {
  const domString = `<div id= 'playContainer'>
            <h2 id='playName'>Play</h2>
            <div id='playScore'>
              <h6>Your fun level is</h6></div>
            <div id='playBtnContainer'>
              <button type='button' id='amusingBtn' class='amusing-button'>Amusing</button>
              <button type='button' id='funBtn' class='fun-button'>Fun-to-the-Max</button></div>
          </div>`;
  $('#play').html(domString);
};

export default { playQuad };
