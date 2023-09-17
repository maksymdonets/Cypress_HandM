import Buttons from "./elements/buttons/Buttons";

export default {
  ...Buttons,
  url: "/cart",
  productList: () =>
    cy.xpath('//*[@id="sidebar-sticky-boundary"]/section[1]/div/ul').next(),
  productListName: () =>
    cy.xpath(
      '//*[@id="sidebar-sticky-boundary"]/section[1]/div/ul/li[1]/article/div[1]/a/h2'
    ),
  productQt: () =>
    cy.xpath(
      '//*[@id="sidebar-sticky-boundary"]/section[1]/div/ul/li/article/div[2]/div/div/div/div/select'
    ),
  productColor: () =>
    cy.xpath(
      '//*[@id="sidebar-sticky-boundary"]/section[1]/div/ul/li/article/div[1]/ul/li[2]/span[2]'
    ),
  productPrice: () =>
    cy.xpath(
      '//*[@id="sidebar-sticky-boundary"]/section[1]/div/ul/li/article/div[1]/ul/li[4]/span[2]'
    ),
  orderValue: () =>
    cy.xpath(
      '//*[@id="sidebar-sticky-boundary"]/section[2]/div/div/div[1]/div[2]/table/tbody/tr[1]/td'
    ),
  shippingValue: () =>
    cy.xpath(
      '//*[@id="sidebar-sticky-boundary"]/section[2]/div/div/div[1]/div[2]/table/tbody/tr[1]/td'
    ),
  totalValue: () =>
    cy.xpath(
      '//*[@id="sidebar-sticky-boundary"]/section[2]/div/div/div[1]/div[2]/table/tfoot/tr/td'
    ),
};
