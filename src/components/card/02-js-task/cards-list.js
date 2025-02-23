import Card from './card.js';

export default class CardsList {
  constructor(data = []) {
    this.data = data;
    this.render();
    this.renderCards();
  }

  getTemplate() {
    return `
    <div>
      <ul class="os-products-list" data-element="body">
      <--Card list-->
      </ul>
    </div>
    `;
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper.firstElementChild;
  }

  renderCards() {
    const cards = this.data.map(item => {
      const card = new Card(item);

      return card.element;
    });
    const body = this.element.querySelector('[data-element="body"]');
    body.innerHTML = '';
    body.append(...cards);
    // console.log('cards', cards);
  }
  update(productsList = []) {
    this.data = productsList;
    this.renderCards();
  }
}
