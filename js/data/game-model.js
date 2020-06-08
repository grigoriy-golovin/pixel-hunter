import {dataQuestion, INIT_STATE} from "./game-data.js";

export default class gameModel {
  constructor(name) {
    this.name = name;
    this.playerResponses = [];
    this.restart();
  }

  get state() {
    return this._state;
  }

  get life() {
    return new Array(3 - this._state.life)
      .fill({
        src: `img/heart__empty.svg`,
        alt: `Missed Life`,
      })
      .concat(
        new Array(this._state.life).fill({
          src: "img/heart__full.svg",
          alt: "Life",
        })
      );
  }

  get currentLeval() {
    return this._state.level;
  }

  get typeCurrentLeval() {
    return dataQuestion[this.currentLeval].type;
  }

  get currentGameData() {
    return dataQuestion[this.currentLeval];
  }

  get currentStats() {
    return this.playerResponses
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
      .concat(new Array(10 - this.playerResponses.length).fill("unknown"));
  }

  get trueAnswer() {
    if (this.currentGameData.type === `one-of-three`) {
      return this.currentGameData.answers.findIndex((item) => item.type === `painting`)
    }
    return this.currentGameData.answers.map((item) => item.type).join();
  }

  get PlayerResponsesFull() {
    return this.playerResponses.length === 10
  }

  restart() {
    this._state = Object.assign({}, INIT_STATE);
  }

  checkedNextLevel() {
    this._state.level++;
  }

  updatePlayerResponses(response) {
    this.playerResponses.push(response);
  }
}
