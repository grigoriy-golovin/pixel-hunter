import IntroView from "./../view/intro-view.js";
import switchScreens from "./../switch-screens.js";
import greeting from "./greeting.js";

export default () => {
  const myIntro = new IntroView();

  myIntro.onClickStar = () => {
    switchScreens(greeting);
  };

  switchScreens(myIntro.element);
};
