import Game1View from "./../view/game1-view";
import Game2View from "./../view/game2-view";
import Game3View from "./../view/game3-view";
import HeaderView from "./../view/game-header-view.js";
import {changeView} from "./../utilities.js";

export default class GamePresenter {
  constructor(model) {
    this.model = model;

    this.gameTypeMap = {
      "two-of-two": Game1View,
      "tinder-like": Game2View,
      "one-of-three": Game3View,
    };

    this.header = new HeaderView(this.model.life);
    this.gameView = new this.gameTypeMap[this.model.typeCurrentLeval](
      this.model.currentGameData,
      this.model.currentStats
    );
    this.root = document.createElement(`div`);
    this.root.append(this.header.element);
    this.root.append(this.gameView.element);

    this.gameView.onAnswer = (playerAnswer) => this.doNextLevel(playerAnswer);
  }

  get element() {
    return this.root;
  }

  doNextLevel(playerAnswer) {
    this.model.updatePlayerResponses(this.checkAnswer(playerAnswer));
    this.model.checkedNextLevel();
    this.showNextLevel();
  }

  checkAnswer(playerAnswer) {
    return {
      isCorrect: this.model.trueAnswer === playerAnswer,
      timeSec: 15,
    };
  }

  showNextLevel() {
    this.header = new HeaderView(this.model.life);
    this.gameView = new this.gameTypeMap[this.model.typeCurrentLeval](
      this.model.currentGameData,
      this.model.currentStats
    );
    this.root = document.createElement(`div`);
    this.root.append(this.header.element);
    this.root.append(this.gameView.element);

    changeView(this.element);
  }

  startGame() {}

  stopGame() {}
}
