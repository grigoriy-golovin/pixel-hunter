import Application from "./../application.js";
import StatView from "./../view/stat-view.js";
import OldStatView from "./../view/old-stat-view.js";
import Scoring from "./../business/scoring.js";

export default class StatsPresenter {
  constructor(serverData) {
    this.serverData = serverData;
    this.scoringData = new Scoring(this.serverData[0]);
    this.statView = new StatView(this.scoringData);
    this.statView.onClickBack = () => Application.showIntro();
    this.root = this.statView.element;
    this.container = this.root.querySelector(`.result`);
    this.addOldStat();

  }

  get element() {
    return this.root;
  }

  addOldStat() {
    for (let i = 1; i < this.serverData.length; i++) {
      const scoring = new Scoring(this.serverData[i]);
      this.oldStst = new OldStatView(scoring, i+1);
      this.container.append(this.oldStst.element)
    }
  }
}

