"use strict";

let templateArr = document.querySelectorAll(`template`);
templateArr = Array.from(templateArr);
templateArr = templateArr.map((item) => item.content);

const main = document.querySelector(`#main`);

const switchScreens = (index) => {
  const startLength = main.children.length;
  for (let i = 0; i < startLength; i++) {
    main.children[0].remove();
  }

  const node = templateArr[index].cloneNode(true);
  main.append(node);
};

let currentScreen = 0;
const MAX_SCREEN = 6;
switchScreens(currentScreen);

const switchNext = () => {
  if (currentScreen === MAX_SCREEN) {
    currentScreen = 0;
  }
  currentScreen++;
  switchScreens(currentScreen);
};

const switchPrev = () => {
  if (currentScreen === 0) {
    currentScreen = MAX_SCREEN;
  }
  currentScreen--;
  switchScreens(currentScreen);
};

const keyupHandler = (evt) => {
  if (evt.keyCode === 39) {
    switchNext();
  }
  if (evt.keyCode === 37) {
    switchPrev();
  }
};

document.addEventListener(`keyup`, keyupHandler);

const arrows = document.querySelector(`#arrows`).content;
document.body.append(arrows);

const butPrev = document.querySelector(`.arrows__btn--prev`);
const butNext = document.querySelector(`.arrows__btn--next`);

butPrev.addEventListener(`click`, switchPrev);
butNext.addEventListener(`click`, switchNext);
