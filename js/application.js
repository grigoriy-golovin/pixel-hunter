import IntroPresenter from "./presenter/intro-presenter.js";
import WelcomePresenter from "./presenter/greeting-presenter.js";
import GamePresenter from "./presenter/game-presenter.js";
import StatsPresenter from "./presenter/stats-presenter.js";
import {changeView} from "./utilities.js";
import gameModel from "./data/game-model.js";

export default class Application {
  static showIntro() {
    const intro = new IntroPresenter();
    changeView(intro.element);
  }

  static showWelcome() {
    const welcome = new WelcomePresenter();
    changeView(welcome.element);
  }

  static showGame(userName) {
    const model = new gameModel(userName);
    const gamePresenter = new GamePresenter(model);
    changeView(gamePresenter.element);
    gamePresenter.startTimer();
  }

  static showStats(stats) {
    const statistics = new StatsPresenter(stats);
    changeView(statistics.element);
  }
}
