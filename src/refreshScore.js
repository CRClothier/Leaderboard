import { getScores } from './api.js';

const refreshScore = () => {
  let scoreTable = '';
  getScores().then((data) => {
    data.result.forEach((score) => {
      scoreTable += `<p class="scores">${score.user}: ${score.score} points</p>`;
    });
    const container = document.getElementById('container');
    container.innerHTML = scoreTable;
  });
};

export default refreshScore;