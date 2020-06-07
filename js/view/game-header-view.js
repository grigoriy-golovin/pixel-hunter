import AbstractView from "./abstract-view.js";

export default class HeaderView extends AbstractView {
  constructor(life) {
    super();
    this.life = life;
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
    <div class="game__timer">NN</div>
    <div class="game__lives">
      <img src=${this.life[0].src} class="game__heart" alt=${this.life[0].alt} width="31" height="27">
      <img src=${this.life[1].src} class="game__heart" alt=${this.life[1].alt} width="31" height="27">
      <img src=${this.life[2].src} class="game__heart" alt=${this.life[2].alt} width="31" height="27">
    </div>
  </header>`;
  }

  bind() {
    gameHeader.querySelector(`.back`).onclick = () => onBack();
  }
}
