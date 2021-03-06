import AbstractView from "./abstract-view.js";

export default class StatView extends AbstractView {
  constructor(scoringData) {
    super();
    this.scoringData = scoringData;
    this.message = this.scoringData.isVictiry ? `Победа !` : `Вы проиграли )=`;
  }

  get template() {
    return `<header class="header">
    <button class="back">
      <span class="visually-hidden">Вернуться к началу</span>
      <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-left"></use>
      </svg>
      <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
        <use xlink:href="img/sprite.svg#logo-small"></use>
      </svg>
    </button>
  </header>
  <section class="result">
    <h2 class="result__title">${this.message}</h2>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
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
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${this.scoringData.speedNumber} <span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">${this.scoringData.speedBonus}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${this.scoringData.lifeInEnd} <span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">${this.scoringData.lifeBonus}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${this.scoringData.slowNumber} <span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">${this.scoringData.slowPenalty}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${this.scoringData.fullResult}</td>
      </tr>
    </table>
  </section>`;
  }

  bind() {
    this.element.querySelector(`.back`).onclick = (evt) => {
      evt.preventDefault();
      this.onClickBack();
    };
  }

  onClickBack() {}

}


    // <table class="result__table">
    //   <tr>
    //     <td class="result__number">2.</td>
    //     <td>
    //       <ul class="stats">
    //         <li class="stats__result stats__result--wrong"></li>
    //         <li class="stats__result stats__result--slow"></li>
    //         <li class="stats__result stats__result--fast"></li>
    //         <li class="stats__result stats__result--correct"></li>
    //         <li class="stats__result stats__result--wrong"></li>
    //         <li class="stats__result stats__result--unknown"></li>
    //         <li class="stats__result stats__result--slow"></li>
    //         <li class="stats__result stats__result--wrong"></li>
    //         <li class="stats__result stats__result--fast"></li>
    //         <li class="stats__result stats__result--wrong"></li>
    //       </ul>
    //     </td>
    //     <td class="result__total"></td>
    //     <td class="result__total  result__total--final">fail</td>
    //   </tr>
    // </table>
    // <table class="result__table">
    //   <tr>
    //     <td class="result__number">3.</td>
    //     <td colspan="2">
    //       <ul class="stats">
    //         <li class="stats__result stats__result--wrong"></li>
    //         <li class="stats__result stats__result--slow"></li>
    //         <li class="stats__result stats__result--fast"></li>
    //         <li class="stats__result stats__result--correct"></li>
    //         <li class="stats__result stats__result--wrong"></li>
    //         <li class="stats__result stats__result--unknown"></li>
    //         <li class="stats__result stats__result--slow"></li>
    //         <li class="stats__result stats__result--unknown"></li>
    //         <li class="stats__result stats__result--fast"></li>
    //         <li class="stats__result stats__result--unknown"></li>
    //       </ul>
    //     </td>
    //     <td class="result__points">× 100</td>
    //     <td class="result__total">900</td>
    //   </tr>
    //   <tr>
    //     <td></td>
    //     <td class="result__extra">Бонус за жизни:</td>
    //     <td class="result__extra">2 <span class="stats__result stats__result--alive"></span></td>
    //     <td class="result__points">× 50</td>
    //     <td class="result__total">100</td>
    //   </tr>
    //   <tr>
    //     <td colspan="5" class="result__total  result__total--final">950</td>
    //   </tr>
    // </table>
