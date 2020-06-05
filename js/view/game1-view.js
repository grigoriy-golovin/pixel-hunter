import AbstractView from "./abstract-view.js";

export default class Game1View extends AbstractView {
  constructor(dataGame) {
    super();
    this.data = dataGame;
  }

  bind() {

  }

  stat() {}

  get template() {
    return `<section class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src=${this.data.image[0].url} alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo" required>
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="paint" required>
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src=${this.data.image[1].url} alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question2" type="radio" value="photo" required>
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question2" type="radio" value="paint" required>
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <ul class="stats">
      <li class="stats__result stats__result--${this.data.stat[0]}"></li>
      <li class="stats__result stats__result--${this.data.stat[1]}"></li>
      <li class="stats__result stats__result--${this.data.stat[2]}"></li>
      <li class="stats__result stats__result--${this.data.stat[3]}"></li>
      <li class="stats__result stats__result--${this.data.stat[4]}"></li>
      <li class="stats__result stats__result--${this.data.stat[5]}"></li>
      <li class="stats__result stats__result--${this.data.stat[6]}"></li>
      <li class="stats__result stats__result--${this.data.stat[7]}"></li>
      <li class="stats__result stats__result--${this.data.stat[8]}"></li>
      <li class="stats__result stats__result--${this.data.stat[9]}"></li>
    </ul>
  </section>`;
  }
}
