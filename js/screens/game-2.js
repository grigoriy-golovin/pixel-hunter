import getElement from "./../create-element.js";
import stat from "./current-stats.js";
import gameRun from "./../game-run.js";

export default (data) => {
  console.log(data);
  const gameScreen = `<section class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src=${data.image[0].url} alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo" required>
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="paint" required>
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    ${stat(data)}
  </section>`;

  const game2 = getElement(gameScreen);
  console.log(game2);
  const form = game2.querySelector(`.game__content`);

  form.onchange = () => {
    if (form.checkValidity()) {
      const response = {
        question1: form.elements.question1.value,
      };
      gameRun(response);
    }
  };

  return game2;
};
