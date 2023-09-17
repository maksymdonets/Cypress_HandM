export default {
  url: "/search-results.html",
  visit() {
    cy.visit(this.url);
  },
  productItem: () => cy.xpath('//*[@id="page-content"]/div[1]/ul/li'),
};
