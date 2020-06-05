import IntroView from "./../view/intro-view.js";
import {switchAllElementInMain} from "./../utilities.js";
import greeting from "./greeting.js";

export default () => {
  const myIntro = new IntroView();

  myIntro.onClickStar = () => {
    greeting();
  };

  switchAllElementInMain(myIntro.element);
};
