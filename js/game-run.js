import {currentState, userResponses, dataGame} from "./data/game-data.js";
import switchGameScreens from "./switch-game-screens.js";




export default (response) => {

  currentState.level++;
  currentState.typeGame = dataGame[currentState.typeGame].nextGame;

  // switchGameScreens(
  //   game2(dataGame[currentState.typeGame])
    // dataGame[currentState.typeGame].showScreen(dataGame[currentState.typeGame])
  // );
};
