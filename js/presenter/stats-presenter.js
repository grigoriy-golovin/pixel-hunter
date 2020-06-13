import Application from "./../application.js";
import StatView from "./../view/stat-view.js";
import Scoring from "./../business/scoring.js";

export default class StatsPresenter {
  constructor(model) {
    this.model = model;

    this.scoringData = new Scoring(this.model.playerResponses);
    this.statView = new StatView(this.scoringData);
    this.statView.onClickBack = () => Application.showIntro();
  }

  get element() {
    return this.statView.element;
  }
}
