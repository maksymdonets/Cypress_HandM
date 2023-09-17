import Buttons from "./elements/buttons/Buttons";

export default {
  ...Buttons,
  url: "/productpage",
  visit() {
    cy.visit(this.url);
  },
  productName: () => cy.xpath('//*[@id="js-product-name"]/div/h1'),
  productPrice: () => cy.xpath('//*[@id="product-price"]/div/span'),
  selectSizeDropdown: () => cy.xpath('//*[@id="picker-1"]/button/span'),
  productImage: () => cy.xpath('//*[@id="main-content"]/div[1]/div[2]/div[1]/div[1]/div/figure[2]/img'),
};
