import getElement from "./../create-element.js";
import greeting from "./greeting.js";
import switchScreens from "./../switch-screens.js";
import game2 from "./game-2.js";
import{life} from "./../data/game-data.js";



const gameHeader = getElement(
    `<header class="header">
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
      <img src=${life[0].src} class="game__heart" alt=${life[0].alt} width="31" height="27">
      <img src=${life[1].src} class="game__heart" alt=${life[1].alt} width="31" height="27">
      <img src=${life[2].src} class="game__heart" alt=${life[2].alt} width="31" height="27">
    </div>
  </header>`
);

gameHeader.querySelector(`.back`).onclick = () => switchScreens(greeting);


export default gameHeader;
