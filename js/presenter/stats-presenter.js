import Application from "./../application.js";
import StatView from "./../view/stat-view.js";
import scoring from "./../business/scoring.js";

export default class StatsPresenter {
  constructor(model) {
    this.model = model;
    this.scoringData = scoring(this.model.currentStats, this.model.state.life)
    this.statView = new StatView(this.model.currentStats, this.scoringData);
    this.statView.onClickBack = () => Application.showWelcome();
  }

  get element() {
    return this.statView.element;
  }
}
