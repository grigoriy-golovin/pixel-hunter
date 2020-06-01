const main = document.querySelector(`#main`);


const switchGameScreens = (screen) => {
  main.lastChild.remove();
  main.append(screen.cloneNode(true));
};

export default switchGameScreens;
