const pet = () => {
  const domString = `<div id= 'petContainer'>
              <h2 id='badger'>Honey Badger</h2>
              <img  id='badgerImg' src='https://i.pinimg.com/originals/73/cc/77/73cc77c0a7f6ab837e56c8456d2633ab.jpg'>
              <div id='cares'>
              <h6>Honey Badger don't give a %@#$</h6></div>          
            </div>`;
  $('#pet').html(domString);
};

export default { pet };
