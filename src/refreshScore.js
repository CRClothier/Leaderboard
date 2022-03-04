import scoreList from './scoreList.js';

const refreshScore = () => {
  let scoreTable = '';
  scoreList.forEach((score) => {
    scoreTable += `<p class="scores">${score.name}: ${score.score} points</p>`;
  });
  const container = document.getElementById('container');
  container.innerHTML = scoreTable;
};

export default refreshScore;