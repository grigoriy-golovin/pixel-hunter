import AbstractView from "./abstract-view.js";

export default class Game1View extends AbstractView {
 constructor(data, stats) {
    super();
    this.data = data;
    this.stats = stats;
  }

  bind() {

  }

  stat() {}

  get template() {
    return `<section class="game">
    <p class="game__task">${this.data.question}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src=${this.data.answers[0].image.url} alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src=${this.data.answers[1].image.url} alt="Option 2" width="304" height="455">
      </div>
      <div class="game__option">
        <img src=${this.data.answers[2].image.url} alt="Option 3" width="304" height="455">
      </div>
    </form>
    <ul class="stats">
      <li class="stats__result stats__result--${this.stats[0]}"></li>
      <li class="stats__result stats__result--${this.stats[1]}"></li>
      <li class="stats__result stats__result--${this.stats[2]}"></li>
      <li class="stats__result stats__result--${this.stats[3]}"></li>
      <li class="stats__result stats__result--${this.stats[4]}"></li>
      <li class="stats__result stats__result--${this.stats[5]}"></li>
      <li class="stats__result stats__result--${this.stats[6]}"></li>
      <li class="stats__result stats__result--${this.stats[7]}"></li>
      <li class="stats__result stats__result--${this.stats[8]}"></li>
      <li class="stats__result stats__result--${this.stats[9]}"></li>
    </ul>
  </section>`;
  }
}
