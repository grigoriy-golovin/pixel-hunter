const main = document.querySelector(`#main`);

const switchScreensInMain = (screen) => {
  main.innerHTML = ``;
  main.append(screen);
};

export default switchScreensInMain;
