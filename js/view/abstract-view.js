export default class AbstractView {
  constructor() {

  }

  render() {
    this._element = document.createElement(`div`);
    this._element.innerHTML = this.template;
  }

  bind() {}

  get template() {
    if (new.target === AbstractView) {
      throw new Error(
        `метод template у класса AbstractView является абстрактным,
        он должен быть переоределен у потомков класса`
      );
    }
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this.render();
    this.bind();
    return this._element;
  }
}
