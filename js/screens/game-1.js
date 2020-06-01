import getElement from "./../create-element.js";
import stat from "./current-stats.js";
import gameRun from "./../game-run.js";

export default (data) => {
  const gameScreen = `<section class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src=${data.image[0].url} alt="Option 1" width="468" height="458">
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
        <img src=${data.image[1].url} alt="Option 2" width="468" height="458">
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
    ${stat(data)}
  </section>`;

  const game1 = getElement(gameScreen);
  console.log(game1);
  const form = game1.querySelector(`.game__content`);

  form.onchange = (evt) => {
    if (form.checkValidity()) {
      const response = {
        question1: form.elements.question1.value,
        question2: form.elements.question2.value,
      };
      gameRun(response);
    }
  };

  return game1;
};
