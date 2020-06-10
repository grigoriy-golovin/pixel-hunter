import AbstractView from "./abstract-view.js";
import {resize} from "./../utilities.js";

export default class Game1View extends AbstractView {
  constructor(data, stats) {
    super();
    this.data = data;
    this.stats = stats;
    this.frame = {
      width: 304,
      height: 455,
    };

    this.givenArr = this.getGivenArr(this.data);
    this.resizeArr = this.givenArr.map((item) => resize(this.frame, item));
  }

  onAnswer(answer) {}

  getGivenArr(data) {
    return data.answers.map((item) => {
      return {
        width: item.image.width,
        height: item.image.height,
      };
    });
  }

  bind() {
    const form = this.element.querySelector(`.game__content`);

    form.onclick = (evt) => {
      // console.log(form);
      // const response = evt.path[0].alt;
      // const response = evt.target.alt;
      const divAnswer = evt.path[1];
      const answer = Array.from(form.children).indexOf(divAnswer);
      this.onAnswer(answer);
    };
  }

  get template() {
    return `<section class="game">
    <p class="game__task">${this.data.question}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src=${this.data.answers[0].image.url} alt="Option 1" width="${this.resizeArr[0].width}" height="${this.resizeArr[0].height}">
      </div>
      <div class="game__option  game__option--selected">
        <img src=${this.data.answers[1].image.url} alt="Option 2" width="${this.resizeArr[1].width}" height="${this.resizeArr[1].height}">
      </div>
      <div class="game__option">
        <img src=${this.data.answers[2].image.url} alt="Option 3" width="${this.resizeArr[2].width}" height="${this.resizeArr[2].height}">
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
