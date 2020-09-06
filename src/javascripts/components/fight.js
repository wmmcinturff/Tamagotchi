const fightQuad = () => {
  const domString = `
          <div id= 'fightContainer'>
            <h2 id='fightName'>Fight</h2>
            <div id='fightScore'>
              <h6>Your strength is</h6></div>
            <div id='fightBtnContainer'>
              <button type='button' id='runBtn' class='button run-button'>Run Away!</button>
              <button type='button' id='battleBtn' class='battle-button'>Ready to Rumble!</button></div>
           </div>`;
  $('#fight').html(domString);
};

export default { fightQuad };
