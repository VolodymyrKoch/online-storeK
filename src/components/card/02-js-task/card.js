export default class Card {
  constructor(someProduct) {
    this.state = someProduct;
    this.myRender();
  }

  getTemplate() {
    const result = `
   <li class="card_item">

    <div class="card_wrapper">
      <picture class="picture">
        <img src='${this.state.images[0]}' alt="product_foto">
        </picture>
        <div class="product_wrapper">
          <div class="product_content">
            <p class="product_rating">${this.state.rating}</p>
            <p class="product_price">${this.state.price}</p>
          </div>
          <h5 class="product_name">${this.state.title}</h5>
          <p class="product_category">${this.state.category}</p>
        </div>
    </div>
    <button class="product_btn">Add To Cart</button>
   </li>
     `;
    return result;
  }

  update(data = {}) {
    this.state = data;
    element.componetElement.innerHTML = this.getTemplate(); // =>this.componetElement.innerHTML
  }

  myRender() {
    const element = document.createElement('ul');
    element.innerHTML = this.getTemplate();
    this.element = element;
  }
}

