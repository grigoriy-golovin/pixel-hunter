import Application from "./../application.js";
import RulesView from "./../view/rules-view.js";


export default class RulesPresenter {
  constructor() {
    this.rules = new RulesView();
    this.rules.onClickBack = () => Application.showWelcome();

    this.rules.onClickGo = (name) => {
      Application.showGame(name);
    };
  }

  get element() {
    return this.rules.element;
  }
}
