import getElement from "./../create-element.js";
import stat from './current-stats.js';
import gameRun from './../game-run.js';
import switchGameScreens from "./../switch-game-screens.js";
import game1 from "./game-1.js";
import {dataGame} from "./../data/game-data.js";


export default (data) => {

const gameScreen = `<section class="game">
    <p class="game__task">${data.task}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src=${data.image[0].url} alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src=${data.image[1].url} alt="Option 2" width="304" height="455">
      </div>
      <div class="game__option">
        <img src=${data.image[2].url} alt="Option 3" width="304" height="455">
      </div>
    </form>
    ${stat(data)}
  </section>`


const game3 = getElement(gameScreen);

const form = game3.querySelector(`.game__content`);

form.onclick = (evt) => {
   const response = evt.path[0].alt;
      gameRun(response);
      switchGameScreens(game1(dataGame[0]))

    };


return game3;
}

