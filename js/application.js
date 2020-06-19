import IntroPresenter from "./presenter/intro-presenter.js";
import WelcomePresenter from "./presenter/greeting-presenter.js";
import GamePresenter from "./presenter/game-presenter.js";
import StatsPresenter from "./presenter/stats-presenter.js";
import {changeView} from "./utilities.js";
import gameModel from "./data/game-model.js";
import {setDataQuestion} from "./data/game-data.js";


export default class Application {
  static showIntro() {
    const intro = new IntroPresenter();
    changeView(intro.element);
  }

  static start() {
    window
        .fetch(
          `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/questions`
        )
        .then((response) => {
          if (response.ok) {
            return response;
          } else {
            throw new Error(response.statysText);
          }
        })
        .then((response) => response.json())
        .then((data) => setDataQuestion(data))
        .then((data) => console.log(data))
        .then(() => Application.showWelcome())
        .catch((error) => console.error(error));
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
      .then(Application.loader(model))
      .catch((error) => console.error(error));
  }

  static loader(model) {
    window
      .fetch(
        `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/stats/:57943689-:${model.name}`
      )
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          throw new Error(response.statysText);
        }
      })
      .then((response) => response.json())
      .then((data) => data = data.reverse())
      .then((data) => Application.showStats(data))
      .catch((error) => console.error(error));
  }
}
