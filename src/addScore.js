import Score from './classScore.js';
import { postScore } from './api.js';

const addScore = () => {
  const user = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  const newScore = new Score(user, score);
  postScore(newScore);
  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
};

export default addScore;