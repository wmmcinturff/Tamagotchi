import '../styles/main.scss';
import petData from './data/petData';
import quadrant from './components/quadrant';
import pet from './data/pet';

const init = () => {
  pet.pet();
  petData.getArray();
  quadrant.tamagotchiQuadCards();
};

init();
