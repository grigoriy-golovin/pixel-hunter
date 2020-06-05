import RulesView from "./../view/rules-view";
import {switchAllElementInMain} from "./../utilities.js";
import greeting from "./greeting.js";
import game from "./game.js";
import {currentState, ResetState, stat} from "./../data/game-data.js";

export default () => {
  const myRules = new RulesView();

  myRules.onClickBack = () => greeting();

  myRules.onClickGo = (name) => {
    ResetState();
    currentState.name = name;
    game();
    console.log(currentState, stat);
  };

  switchAllElementInMain(myRules.element);
};
