import eat from './eat';
import fight from './fight';
import play from './play';
import sleep from './sleep';

const quadInit = () => {
  eat.eatQuad();
  fight.fightQuad();
  play.playQuad();
  sleep.sleepQuad();
};

export default { quadInit };
