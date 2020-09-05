const fightQuad = () => {
  $('#fight').html(
    `<div id= 'fightContainer' class='container fight-container'>
          <h2 id='fightName' class='header fight-header'>Fight</h2>
          <div id='figthScore' class='fight-value'></div>
          <div id='fightBtnContainer'>
            <button type='button' id='runBtn' class='button run-button'>Run Away!</button>
            <button type='button' id='battleBtn' class='button battle-button>Ready to Rumble!</button></div>
        </div>`
  );
};

export default { fightQuad };
