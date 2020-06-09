import Game1View from "./../view/game1-view";
import Game2View from "./../view/game2-view";
import Game3View from "./../view/game3-view";
import HeaderView from "./../view/game-header-view.js";
import {changeView, changeFierstInMain} from "./../utilities.js";
import Application from "./../application.js";

export default class GamePresenter {
  constructor(model) {
    this.model = model;

    this.gameTypeMap = {
      "two-of-two": Game1View,
      "tinder-like": Game2View,
      "one-of-three": Game3View,
    };

    this.createLevel();
  }

  get element() {
    return this.root;
    this.startTimer();
  }

  doNextLevel(playerAnswer) {
    this.model.updatePlayerResponses(this.checkAnswer(playerAnswer));
    if (this.model.PlayerResponsesFull) {
      this.stopTimer();
      Application.showStats(this.model.PlayerResponses);
    } else {
      this.stopTimer()
      this.model.checkedNextLevel();
      this.showNextLevel();
    }
  }

  checkAnswer(playerAnswer) {
    return {
      isCorrect: this.model.trueAnswer === playerAnswer,
      timeSec: 30 - this.model.time,
    };
  }

  createLevel() {
    this.header = new HeaderView(this.model.life, this.model.time);
    this.gameView = new this.gameTypeMap[this.model.typeCurrentLeval](
      this.model.currentGameData,
      this.model.currentStats
    );
    this.root = document.createElement(`div`);
    this.root.append(this.header.element);
    this.root.append(this.gameView.element);
    this.header.onBack = () => Application.showWelcome();
    this.gameView.onAnswer = (playerAnswer) => this.doNextLevel(playerAnswer);
  }

  showNextLevel() {
    this.createLevel();
    changeView(this.element);
    this.startTimer();
  }

  startTimer() {
    this.model.restartTimer();
    this.runTimer();
  }

  updateHeader() {
    this.header = new HeaderView(this.model.life, this.model.time);
    changeFierstInMain(this.header.element);
    this.header.onBack = () => Application.showWelcome();
  }

  runTimer() {
    if (this.model.isTimeOver) {
      this.doNextLevel({isCorrect: false, timeSec: 30});
      return;
    }
    this._timer = setTimeout(() => {
      this.model.tick();
      this.updateHeader();
      this.runTimer();
    }, 1000);
  }

  stopTimer() {
    clearTimeout(this._timer);
  }
}
