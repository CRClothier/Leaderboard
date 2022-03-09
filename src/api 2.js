const link = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CE2RRFcjBgL0eJr6dSfR/scores/';

const postScore = async (score) => {
  const res = await fetch(link, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });
  const data = res.json();
  return data;
};

const getScores = async () => {
  const res = await fetch(link);
  const data = res.json();
  return data;
};

export { postScore, getScores };