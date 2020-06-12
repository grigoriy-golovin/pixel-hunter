export default class scoring  = (answers, lives) => {

  class lussResult  = {
    isVictiry: false,
    fullResult: -1,
    speedBonus: null,
    lifeBonus: null,
    slowPenalty: null,


  }

  if (answers.length !== 10) {
    return -1;
  }
  const correctNumber = answers.reduce((number, item) => {
    if (item.isCorrect) {
      number++;
    }
    return number;
  }, 0);

  if (correctNumber < 7) {
    return -1;
  }

  const balls = answers.reduce((sum, item) => {
    if (!item.isCorrect) {
      return sum;
    }
    if (item.timeSec < 10) {
      return sum + 150;
    }
    if (item.timeSec > 20) {
      return sum + 50;
    }
    return sum + 100;
  }, 0);

  const livesInEnd = lives - (10 - correctNumber);

  const ballsFull = balls + livesInEnd * 50;

  return ballsFull;
};

export default scoring;
