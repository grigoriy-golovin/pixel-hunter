import RulesView from "./../view/rules-view";
import {switchAllElementInMain} from "./../utilities.js";
import greeting from "./greeting.js";
import {currentState, INIT_STATE, ResetState} from "./../data/game-data.js";

export default () => {
  const myRules = new RulesView();

  myRules.onClickBack = () => greeting();

  myRules.onClickGo = (name) => {
    ResetState();
    currentState.name = name;
    greeting(); //поменять на вызов игры!!!!!
    console.log(currentState);
  };

  switchAllElementInMain(myRules.element);
};
