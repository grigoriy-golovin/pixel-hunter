import Application from "./../application.js";
import StatView from "./../view/stat-view.js";
import scoring from "./../business/scoring.js";

export default class StatsPresenter {
  constructor() {
      this.stat = new StatView();
    this.stat.onClickBack = () => Application.showWelcome();

  }

  get element() {
    return this.stat.element;
  }
};
