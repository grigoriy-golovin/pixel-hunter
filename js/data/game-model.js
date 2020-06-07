import {dataQuestion, INIT_STATE} from "./game-data.js";

export default class gameModel {
  constructor(name) {
    this.name = name;
    this.userResponses = [];
    this.restart();
  }

  get state() {
    return this._state;
  }

  get life() {
    return new Array(3 - this._state.life)
      .fill({
        src: "img/heart__empty.svg",
        alt: "Missed Life",
      })
      .concat(
        new Array(this._state.life).fill({
          src: "img/heart__full.svg",
          alt: "Life",
        })
      );
  }

  restart() {
    this._state = INIT_STATE;
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
  return  this.userResponses.map((item) => {
if (!item.isCorrect) {
  return 'wrong';
};
if (item.timeSec < 10) {
  return 'fast';
};
if (item.timeSec > 20) {
  return 'slow';
};
return 'correct';
}).concat(new Array(10 - this.userResponses.length).fill('unknown'));
  }
}
