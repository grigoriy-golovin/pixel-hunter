import {gameData} from "./game-data.js";

export default class gameModel {
  constructor(name) {
    this.name = name;

    this.state = 23;
  }

  get state() {
    return this.state;
  }

  get life() {
    const life = new Array(3 - !!!!!!!!!!!!!!!)
      .fill({
        src: "img/heart__empty.svg",
        alt: "Missed Life",
      })
      .concat(
        new Array(!!!!!!!!!!!!!!!!!!!!!!).fill({
          src: "img/heart__full.svg",
          alt: "Life",
        })
      );
    return life;
  }
}
