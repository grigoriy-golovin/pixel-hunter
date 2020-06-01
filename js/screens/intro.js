import getElement from "./../create-element.js";
import switchScreens from "./../switch-screens.js";
import greeting from "./greeting.js";

const intro = getElement(
    `<section class="intro">
    <button class="intro__asterisk asterisk" type="button">
    <span class="visually-hidden">Продолжить</span>
    *
    </button>
    <p class="intro__motto">
      <sup>*</sup>
      Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.
    </p>
  </section>`
);

intro.querySelector(`.intro__asterisk`).onclick = () => switchScreens(greeting);

export default intro;
