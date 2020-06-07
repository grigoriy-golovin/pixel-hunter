import IntroView from "./../view/intro-view.js";
import Application from "./../application.js";

export default class IntroPresenter {
  constructor() {
    this.myIntro = new IntroView();
    this.myIntro.onClickStar = () => Application.showWelcome();
  }

  get element() {
    return this.myIntro.element;
  }
}
