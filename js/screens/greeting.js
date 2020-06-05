import GreetingView from "./../view/greeting-view.js";
import {switchAllElementInMain} from "./../utilities.js";
import rules from "./rules.js";

export default () => {
  const myGreeting = new GreetingView();
  myGreeting.onClick = () => rules();

  switchAllElementInMain(myGreeting.element);
}
