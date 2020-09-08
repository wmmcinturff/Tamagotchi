import '../styles/main.scss';
import quadrant from './components/quadrant';
import pet from '../data/pet';

const init = () => {
  quadrant.quadInit();
  pet.pet();
};

init();
