export default class Pagination {
  constructor({ actinePageIndex = 0 } = {}) {
    this.actinePageIndex = actinePageIndex;
    this.defaultPageSize = 12;
    this.render();
    this.addEventListeners();
  }
  getTemplate() {
    return `
    <nav class="card-pagination font-montserrat-400">
      <a href="#" class="panigation-arrow-left" data-element="nav-prev" ><i class="bi bi-chevron-left"></i></a>
        <div>${this.getPages()}</div>
      <a href="#" class="panigation-arrow-right" data-element="nav-next" ><i class="bi bi-chevron-right"></i></a>
    </nav>
    `;
  }
  getPages() {
    return `
            <ul class="pagination-block" data-element="pagination">

           ${new Array(this.defaultPageSize)
             .fill(1)
             .map((item, index) => {
               return this.getPageTemplate(index);
             })
             .join('')}
        </ul>
    `;
  }
  getPageTemplate(pageIndex = 0) {
    const isActive = pageIndex === this.actinePageIndex ? 'active' : '';
    return `<li class="pagination-item ">
    <a href="#"
    class="page-link ${isActive}"
    data-page-index="${pageIndex}"> ${pageIndex + 1} </a></li>`;
  }
  setPage(pageIndex = 0) {
    if (pageIndex === this.actinePageIndex) return;
    if (pageIndex > this.defaultPageSize - 1 || pageIndex < 0) return;

    const activePage = this.element.querySelector('.card-pagination .active');
    if (activePage) {
      activePage.classList.remove('active');
    }
    const page = this.element.querySelector(`[data-page-index="${pageIndex}"]`);
    if (page) {
      page.classList.add('active');
    }

    this.actinePageIndex = pageIndex;
  }
  nextPage() {
    const nextPage = this.actinePageIndex + 1;
    this.setPage(nextPage);
  }
  prevPage() {
    const prevPage = this.actinePageIndex - 1;
    this.setPage(prevPage);
  }

  render() {
    const wraper = document.createElement('div');
    wraper.innerHTML = this.getTemplate();
    this.element = wraper;
  }

  addEventListeners() {
    const prevPageBtn = this.element.querySelector('[data-element="nav-prev"]');
    const nextPageBtn = this.element.querySelector('[data-element="nav-next"]');
    const pageList = this.element.querySelector('[data-element="pagination"]');

    prevPageBtn.addEventListener('click', event => {
      this.prevPage();
    });

    nextPageBtn.addEventListener('click', event => {
      this.nextPage();
    });

    pageList.addEventListener('click', event => {
      const pageItem = event.target.closest('.page-link');

      if (!pageItem) return;

      const pageIndex = pageItem.dataset.pageIndex;
      //або
      // const {pageIndex} = pageItem.dataset; //todo виконали const pageIndex = pageItem.dataset.pageIndex; через диструктуризацію
      // console.log('pageIndex', pageIndex);
  //*---
      // this.setPage(+pageIndex);  //* переводимо стрічку в число
      //або
      this.setPage(parseInt(pageIndex, 10)); //* переводимо стрічку в число
    });
  }
}
