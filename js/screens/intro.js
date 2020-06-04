import IntroView from "./../view/intro-view.js";
import switchScreens from "./../switch-screens.js";
import greeting from './greeting.js';



export default () => {
  const myIntro = new IntroView();

  myIntro.onClickStar = () => {
    console.log('aaaaaaa');
    switchScreens(greeting);
  };

  switchScreens(myIntro.element);
  console.log(myIntro);
}
