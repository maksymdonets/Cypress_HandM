import Buttons from "./elements/buttons/Buttons";

export default {
  ...Buttons,
  url: "/productpage",
  productName: () => cy.xpath('//*[@id="js-product-name"]/div/h1'),
  productPrice: () => cy.xpath('//*[@id="product-price"]/div/span'),
  selectSizeDropdown: () => cy.xpath('//*[@id="picker-1"]/button/span'),
  selectSizeDropdownList: (option) =>
    cy.xpath('//*[@id="picker-1"]/ul').contains(option),
  productImage: () =>
    cy.xpath(
      '//*[@id="main-content"]/div[1]/div[2]/div[1]/div[1]/div/figure[2]/img'
    ),
  productPurpleColor: () =>
    cy.xpath(
      '//*[@id="main-content"]/div[1]/div[2]/div[1]/div[2]/div/div/div[1]/div[1]/ul/li[1]/ul/li[5]'
    ),
  cart: () => cy.xpath('//*[@id="nav-mini-cart"]/span[1]'),
  cartQt: () => cy.get('[class*="MiniCart"]'),
  selectProductSize(productSize) {
    const allowedSizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];
    if (!allowedSizes.includes(productSize)) {
      throw new Error(`productSize must be one of ${allowedSizes.join(", ")}`);
    }
    this.selectSizeDropdownList(productSize).should(
      "not.have.class",
      "out-of-stock"
    );

    this.selectSizeDropdown().click();
    this.selectSizeDropdownList(productSize).click();
    this.selectSizeDropdown().should("have.text", productSize);
  },
};
