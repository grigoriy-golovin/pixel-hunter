const main = document.querySelector(`#main`);

export const switchAllElementInMain = (screen) => {
  main.innerHTML = ``;
  main.append(screen);
};

export const changeView = (screen) => {
  main.innerHTML = ``;
  main.append(screen);
};

export const switchLastElementInMain = (screen) => {
  main.lastChild.remove();
  main.append(screen);
};

export const changeFierstInMain = (screen) => {
  main.children[0].firstChild.replaceWith(screen);
}

export const resize = (frame, given) => {
  let mainCoeff;
  const heightCoeff = given.height / frame.height;
  const widthCorff = given.width / frame.width;

  if (widthCorff > heightCoeff) {
    mainCoeff = widthCorff;
  } else {
    mainCoeff = heightCoeff;
  }

  return {
    width: given.width / mainCoeff,
    height: given.height / mainCoeff,
  };
};
