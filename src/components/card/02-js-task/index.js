import Card from './card.js';
import Pagination from './pagination.js';

const product = {
  id: '76w0hz7015kkr9kjkav',
  images: [
    'https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg',
    'https://content.rozetka.com.ua/goods/images/big_tile/163399633.jpg',
  ],
  title: 'Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black',
  rating: 2.89,
  price: 15999,
  category: 'laptops',
  brand: 'acer',
};

export default class OnlineStorePage {
  constructor() {
    this.components = {};
    this.initComponents();
    this.render();
    this.renderСomponents();
  }
  getTemplate() {
    return `
      <div>
        <div data-element="card">
          <!-- Card component -->
        </div>
        <div data-element="pagination">
          <!-- Pagination component -->
        </div>
      </div>
    `;
  }
  initComponents() {
    const card = new Card(product);
    const pagination = new Pagination({
      // totalElements: 35,
      activePageIndex: 2,
      // pageSize: 8,
    });
    this.components.card = card;
    this.components.pagination = pagination;
  }

  renderСomponents() {
    const cardConteiner = this.element.querySelector('[data-element="card"]');
    const paginationConteiner = this.element.querySelector(
      '[data-element="pagination"]',
    );
    cardConteiner.append(this.components.card.element);
    paginationConteiner.append(this.components.pagination.element);
  }
  render() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper.firstElementChild;
  }
}
