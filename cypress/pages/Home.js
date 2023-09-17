export default {
  url: "/",
  visit() {
    cy.visit(this.url);
  },
  logo: () => cy.xpath('//*[@id="id-hm-logo-xlarge"]').parent(),
  tab: (option) =>
    cy.get(
      `a[href="/en_us/${Cypress._.kebabCase(
        option
      )}.html"][class*="CTA-module--action"]`
    ),
  bannerTop: () => cy.xpath("//*/div/article/header/h3"),
  bannerBottom: () => cy.xpath("//*/div/article/div/div/div/div/h2"),
  shopNowButton: () => cy.xpath("//*/div/article/div/div/div/div/ul/li/a"),
  searchInput: () =>
    cy.xpath(
      "/html/body/hm-header/div/header/nav/div[3]/div/div[2]/div[1]/div/div/div[2]/div/input"
    ),
  searchListbox: () => cy.xpath('//*[@id="searchbar-autocomplete"]'),
  selectProductTypeByName(productTypeName) {
    this.searchInput().click().type(productTypeName);
    this.searchListbox().first().contains(productTypeName.toLowerCase()).click();
  },
};
