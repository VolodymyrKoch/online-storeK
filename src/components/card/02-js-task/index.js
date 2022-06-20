import Pagination from './pagination.js';
import CardsList from './cards-list.js';

const BACKEND_URL = 'https://online-store.bootcamp.place/api/';
// `products?_page=1&_limit=20`;
export default class OnlineStorePage {
  constructor() {
    this.pageSize = 9;
    this.products = [];

    this.url = new URL('products', BACKEND_URL);
    this.url.searchParams.set('_limit', this.pageSize);

    this.components = {};
    this.initComponents();
    this.render();
    this.renderСomponents();
    this.initEventlisteners();
    this.update(1);
  }
  async loadData(pageNumber) {
    this.url.searchParams.set('_page', pageNumber);

    const responce = await fetch(this.url);
    const products = await responce.json();
    return products;
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
    const totalElements = 100;
    const totalPages = Math.ceil(totalElements / this.pageSize);

    const cardsList = new CardsList(this.products);
    // const cardsList = new CardsList(this.products.slice(0, this.pageSize));
    // console.log('cardsList', cardsList);
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
        this.update(pagIndex + 1);
      },
    );
  }
  async update(pageNumber) {
    // const start = pagIndex * this.pageSize;
    // const end = start + this.pageSize;
    // const productsList = this.products.slice(start, end);

    const productsList = await this.loadData(pageNumber);

    this.components.cardsList.update(productsList);
  }
}
