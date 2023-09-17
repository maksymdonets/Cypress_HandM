import Home from "../pages/Home";
import Search from "../pages/Search";
import Buttons from "../pages/elements/buttons/Buttons";
import tabsHomepageName from "../pages/tabs/tabsHomepage";

describe("Test suite", () => {
  const product = "T-shirt";
  beforeEach(() => {
    // Set the browser resolution before all tests
    cy.setResolution(1920, 1080);
    // Open the page
    Home.visit();
    // Accept all cookies
    Buttons.button("Accept all cookies").click();
  });
  /**
   * @test #1
   *
   * Verify that:
   * - logo is visible
   * - all main categories are visible
   * - “Fall's first layers are here!” is visible
   * - “Modern craft” is visible
   * - “Shop now” button is visible
   */
  it("Home page UI elements", () => {
    // Verify that logo is visible
    Home.logo().should("be.visible");
    // Verify that all main categories are visible
    cy.wrap(tabsHomepageName).each((tabName) => {
      Home.tab(tabName).should("be.visible");
    });
    // Verify that “Fall's first layers are here!” is visible
    Home.bannerTop()
      .should("contain.text", "Member Prices\nUp to 30% off new fall faves")
      .and("be.visible");
    // Verify that “Captivating contrasts” is visible
    Home.bannerBottom()
      .should("contain.text", "Elevate your fall wardrobe")
      .and("be.visible");
    // Verify that “Shop now” button is visible
    Home.shopNowButton().should("contain.text", "Shop now").and("be.visible");
  });
  /**
   * @test #2
   *
   * Steps:
   * Type “T-shirt” into `Search products` field
   * Verify that the listbox with the search result is visible
   * Verify the first result - “t-shirt"
   * Click on the “t-shirt” option
   * Showing results for “t-shirt” should be visible
   * Verify 3 items that have “T-shirt” in their name
   */
  it("User can search the product", () => {
    // Type “T-shirt” into `Search products` field
    // Verify that the listbox with the search result is visible
    // Verify the first result - “t-shirt"
    // Click on the “t-shirt” option
    Home.selectProductTypeByName(product);
    // Verify 3 items that have “T-shirt” in their name
    Search.productItem().each(($el, index) => {
      if (index < 1) {
        cy.wrap($el).should("include.text", product);
      }
    });
  });
});
