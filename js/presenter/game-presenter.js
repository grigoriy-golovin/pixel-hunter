
// import Game1View from "./../view/game1-view";
// import Game2View from "./../view/game2-view";
// import Game3View from "./../view/game3-view";
import HeaderView from "./../view/game-header-view.js";
import {changeView} from "./../utilities.js";


export default class GamePresenter {
  constructor(model) {
    this.model = model;

    this.header = new HeaderView(this.model.life);
  }

get element() {};

startGame() {};

stopGame() {};




};

