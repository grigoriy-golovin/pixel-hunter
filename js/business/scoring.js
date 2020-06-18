import {INIT_STATE} from "./../data/game-data.js";
export default class scoring {
  constructor(answers) {
    this.answers = answers;
    this.LIFE_IN_START = INIT_STATE.life;
    this.LEVELS_NUMBER = 10;
  }

  get isVictiry() {
    return !(
      this.answers.length !== this.LEVELS_NUMBER ||
      this.LEVELS_NUMBER - this.correctNumber > this.LIFE_IN_START ||
      this.answers === undefined
    )
  }

  get correctAnswers() {

    return this.answers.filter((item) => item.isCorrect);

  }

  get correctNumber() {
    return this.correctAnswers.length;
  }

  get baseResult() {
    if (!this.isVictiry) return 0;
    return this.correctNumber*100;
  }

  get speedNumber() {
    if (!this.isVictiry) return 0;
    return this.correctAnswers.reduce((sum, item) => {
      if (item.timeSec < 10) {
        return sum + 1;
      }
        return sum;
    }, 0);
  }

  get speedBonus() {
    return this.speedNumber*50;
  }

  get slowNumber() {
    if (!this.isVictiry) return 0;
    return this.correctAnswers.reduce((sum, item) => {
      if (item.timeSec > 20) {
        return sum - 1;
      }
        return sum;
    }, 0);
  }

  get slowPenalty() {
    return this.slowNumber*50;
  }

  get lifeInEnd() {
  if (!this.isVictiry) return 0;
    return this.LIFE_IN_START - (this.LEVELS_NUMBER - this.correctNumber);
  }

  get lifeBonus() {
    return this.lifeInEnd*50;
  }

  get fullResult() {
    if (!this.isVictiry) return `fail`;
    return this.baseResult + this.speedBonus + this.slowPenalty + this.lifeBonus;
  }

  get currentStats() {
    return this.answers
      .map((item) => {
        if (!item.isCorrect) {
          return "wrong";
        }
        if (item.timeSec < 10) {
          return "fast";
        }
        if (item.timeSec > 20) {
          return "slow";
        }
        return "correct";
      })
      .concat(new Array(10 - this.answers.length).fill("unknown"));
  }
}


  // const balls = answers.reduce((sum, item) => {
  //   if (!item.isCorrect) {
  //     return sum;
  //   }
  //   if (item.timeSec < 10) {
  //     return sum + 150;
  //   }
  //   if (item.timeSec > 20) {
  //     return sum + 50;
  //   }
  //   return sum + 100;
  // }, 0);

  // const livesInEnd = lives - (10 - correctNumber);

  // const ballsFull = balls + livesInEnd * 50;

  // return ballsFull;



