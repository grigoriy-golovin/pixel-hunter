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

  static showStats(model) {
    const statistics = new StatsPresenter(model);
    changeView(statistics.element);
  }

  static post(model) {
    window
      .fetch(
        `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/stats/:57943689-:${model.name}`,
        {
          method: `POST`,
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(model.playerResponses),
        }
      )
      .then(Application.loader(model));
  }

  static loader(model) {
    window
      .fetch(
        `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/stats/:57943689-:${model.name}`
      )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data = data.reverse();
        console.log(data);
        Application.showStats(data);
      });
  }
}
