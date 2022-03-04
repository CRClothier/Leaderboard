import Score from './classScore.js';
import scoreList from './scoreList.js';

const addScore = () => {
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  const newScore = new Score(name, score);
  scoreList.push(newScore);
};

export default addScore;