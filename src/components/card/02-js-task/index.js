import Pagination from './pagination.js';
import CardsList from './cards-list.js';

export default class OnlineStorePage {
  constructor(products) {
    this.pageSize = 3;
    this.products = products;
    this.components = {};
    this.initComponents();
    this.render();
    this.renderСomponents();
    this.initEventlisteners();
  }

  getTemplate() {
    return `
      <div>
        <div data-element="cardsList">
          <!-- Card component -->
        </div>
        <div data-element="pagination">
          <!-- Pagination component -->
        </div>
      </div>
    `;
  }
  initComponents() {
    const totalPages = Math.ceil(this.products.length / this.pageSize);

    const cardsList = new CardsList(this.products.slice(0, this.pageSize));
    console.log('cardsList', cardsList);
    const pagination = new Pagination({
      // totalElements: 35,
      activePageIndex: 0,
      totalPages: totalPages,
      // pageSize: 8,
    });
    this.components.cardsList = cardsList;
    this.components.pagination = pagination;
  }

  renderСomponents() {
    const cardsConteiner = this.element.querySelector(
      '[data-element="cardsList"]',
    );
    const paginationConteiner = this.element.querySelector(
      '[data-element="pagination"]',
    );
    cardsConteiner.append(this.components.cardsList.element);
    paginationConteiner.append(this.components.pagination.element);
  }
  render() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper.firstElementChild;
  }
  initEventlisteners() {
    this.components.pagination.element.addEventListener(
      'page-changed',
      event => {
        const pagIndex = event.detail;
        const start = pagIndex * this.pageSize;
        const end = start + this.pageSize;
        const productsList = this.products.slice(start, end);

        this.components.cardsList.update(productsList);
      },
    );
  }
}
