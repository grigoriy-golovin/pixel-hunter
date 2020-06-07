import GreetingView from "./../view/greeting-view.js";
import Application from "./../application.js";
import RulesPresenter from "./rules-presenter.js";
import {changeView} from "./../utilities.js"

export default class GreetingPresenter {
  constructor() {
    this.myGreeting = new GreetingView();
    this.myGreeting.onClick = () => {
      this.rulesPresenter = new RulesPresenter();
      changeView(this.rulesPresenter.element);
    };
  }

  get element() {
    return this.myGreeting.element;
  }
}
