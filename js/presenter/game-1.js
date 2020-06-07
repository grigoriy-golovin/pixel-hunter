
import game2 from "./game-2.js";
import RulesView from "./../view/rules-view";
import {switchAllElementInMain} from "./../utilities.js";
import greeting from "./greeting.js";
import {currentState, ResetState, dataGame} from "./../data/game-data.js";


export default (data) => {



};


  const game1 = getElement(gameScreen);

  const form = game1.querySelector(`.game__content`);

  form.onchange = (evt) => {
    if (form.checkValidity()) {
      const response = {
        question1: form.elements.question1.value,
        question2: form.elements.question2.value,
      };
      gameRun(response);
      switchGameScreens(game2(dataGame[1]))
    }
  };
