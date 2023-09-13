import Buttons from "./elements/buttons/Buttons";

export default {
  ...Buttons,
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
};
