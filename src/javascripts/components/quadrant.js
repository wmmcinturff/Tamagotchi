// import petData from './data/petData';

const buildPetCards = (item) => {
  const domString = `
    <div class="card-${item.action}">
  <div class="container">
    <h4><b>${item.action.toUpperCase()}</b></h4>
    <div id="${item.id}">
    <h5 id="${item.action}-score">${item.score}</h5>
    </div>
    <button id="btn1-${item.button1}">${item.button1}</button>
    <button id="btn2-${item.button2}">${item.button2}</button>
  </div>
  </div>`;
  return domString;
};

export default { buildPetCards };
