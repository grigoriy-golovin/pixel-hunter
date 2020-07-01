import AbstractView from "./abstract-view.js";

export default class OldStatView extends AbstractView {
  constructor(scoringData, namber) {
    super();
    this.scoringData = scoringData;
    this.namber = namber;
  }

  get template() {
    return `<table class="result__table">
      <tr>
        <td class="result__number">${this.namber}.</td>
        <td colspan="2">
          <ul class="stats">
            <li class="stats__result stats__result--${this.scoringData.currentStats[0]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[1]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[2]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[3]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[4]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[5]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[6]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[7]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[8]}"></li>
            <li class="stats__result stats__result--${this.scoringData.currentStats[9]}"></li>
       </ul>
        </td>
        <td class="result__points">× 100</td>
        <td class="result__total">${this.scoringData.baseResult}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${this.scoringData.lifeInEnd} <span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">${this.scoringData.lifeBonus}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${this.scoringData.fullResult}</td>
      </tr>
    </table>`;
  }
}
