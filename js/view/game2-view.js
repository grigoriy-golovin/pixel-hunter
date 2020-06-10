import AbstractView from "./abstract-view.js";
import {resize} from "./../utilities.js";

export default class Game1View extends AbstractView {
  constructor(data, stats) {
    super();
    this.data = data;
    this.stats = stats;
    this.frame = {
      width: 705,
      height: 455,
    };

    this.givenArr = this.getGivenArr(this.data);
    this.resizeArr = this.givenArr.map((item) => resize(this.frame, item));
  }

  bind() {
    const form = this.element.querySelector(`.game__content`);

    form.onchange = () => {
      if (form.checkValidity()) {
        let answers = [form.elements.question1.value];
        answers = answers.join();
        this.onAnswer(answers);
      }
    };
  }

  onAnswer(answers) {}

  getGivenArr(data) {
    return data.answers.map((item) => {
      return {
        width: item.image.width,
        height: item.image.height,
      };
    });
  }

  get template() {
    return `<section class="game">
    <p class="game__task">${this.data.question}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src=${this.data.answers[0].image.url} alt="Option 1" width="${this.resizeArr[0].width}" height="${this.resizeArr[0].height}">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo" required>
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="painting" required>
          <span>Рисунок</span>
        </label>
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
