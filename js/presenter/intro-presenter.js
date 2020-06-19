import IntroView from "./../view/intro-view.js";
import Application from "./../application.js";
import {setDataQuestion} from "./../data/game-data.js";

export default class IntroPresenter {
  constructor() {
    this.myIntro = new IntroView();
    this.myIntro.onClickStar = () => {
      window
        .fetch(
          `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/questions`
        )
        .then((response) => {
          if (response.ok) {
            return response;
          } else {
            return new Error(response.statysText);
          }
        })
        .then((response) => response.json())
        .then((data) => setDataQuestion(data))
        .then((data) => console.log(data))
        .then(Application.showWelcome())
        .catch((error) => console.error(error));
    };
  }

  get element() {
    return this.myIntro.element;
  }
}
