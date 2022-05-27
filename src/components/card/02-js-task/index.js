// import Card from './index.js';

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
// export default
class Card {
  constructor(someProduct) {
    this.componentTitle = someProduct;
    this.myRender();
  }

  getTemplate() {
    const result = `
   <li class="card_item">

    <div class="card_wrapper">
      <picture class="picture">
        <img src='${this.componentTitle.images[0]}' alt="product_foto">
        </picture>
        <div class="product_wrapper">
          <div class="product_content">
            <p class="product_rating">${this.componentTitle.rating}</p>
            <p class="product_price">${this.componentTitle.price}</p>
          </div>
          <h5 class="product_name">${this.componentTitle.title}</h5>
          <p class="product_category">${this.componentTitle.category}</p>
        </div>
    </div>
    <button class="product_btn">Add To Cart</button>
   </li>
     `;
    return result;
  }

  myRender() {
    const element = document.createElement('ul');
    element.innerHTML = this.getTemplate();
    this.element = element;
  }
}

const card = new Card(product);
const root = document.querySelector('#root');
root.append(card.element);
