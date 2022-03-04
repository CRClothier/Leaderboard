import addScore from './addScore.js';
import refreshScore from './refreshScore.js';

const setOnClickEvents = () => {
  document.getElementById('submit-score').addEventListener('submit', (e) => {
    e.preventDefault();
    addScore();
  });
  document.getElementById('refresh').addEventListener('click', refreshScore);
};

export default setOnClickEvents;