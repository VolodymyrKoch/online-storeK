export default class Pagination {
  constructor() {
    this.defaultPageSize = 12;
    this.render();
  }
  getTemplate() {
    return `
    <nav class="card-pagination font-montserrat-400">
      <a class="panigation-arrow-left" href="#"><i class="bi bi-chevron-left"></i></a>
        <div>${this.getPages()}</div>
      <a class="panigation-arrow-right" href="#"><i class="bi bi-chevron-right"></i></a>
    </nav>
    `;
  }
  getPages() {
    return `
            <ul class="pagination-block">

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
    return `<li class="pagination-item active">
    <a href="#" data-page-index="${pageIndex}">${pageIndex+1}</a></li>`;
  }
  // getPageTemplate(pageInd = 0, isActive = false) {
  //   let activeCls = '';
  //   if (isActive) {
  //     activeCls = 'active'
  //   }
  // ....... ${activeCls}...........
  // }

  render() {
    const wraper = document.createElement('div');
    wraper.innerHTML = this.getTemplate();
    this.element = wraper;
  }
}
