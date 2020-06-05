
import Game1View from "./../view/game1-view";
import {switchAllElementInMain} from "./../utilities.js";
import greeting from "./greeting.js";
import {currentState, ResetState, dataGame} from "./../data/game-data.js";


export default (data) => {
  const myGame = new Game1View(dataGame[0]);

  switchAllElementInMain(myGame.element);
};


  // const game1 = getElement(gameScreen);
  // console.log(game1);
  // const form = game1.querySelector(`.game__content`);

  // form.onchange = (evt) => {
  //   if (form.checkValidity()) {
  //     const response = {
  //       question1: form.elements.question1.value,
  //       question2: form.elements.question2.value,
  //     };
  //     gameRun(response);
  //     switchGameScreens(game2(dataGame[1]))
  //   }
  // };
