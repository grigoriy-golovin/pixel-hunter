import IntroView from "./../view/intro-view.js";
import Application from "./../application.js";
import {setDataQuestion} from "./../data/game-data.js";

export default class IntroPresenter {
  constructor() {
    this.myIntro = new IntroView();
    this.myIntro.onClickStar = () => {
      window.fetch(`https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/questions`).
      then((response) => response.json()).
      then((data) => setDataQuestion(data)).
      then(Application.showWelcome())
    }
  }

  get element() {
    return this.myIntro.element;
  }
}
