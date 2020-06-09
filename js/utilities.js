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
