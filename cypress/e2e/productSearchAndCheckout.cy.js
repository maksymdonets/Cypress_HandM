import Home from "../pages/Home";
import Buttons from "../pages/elements/buttons/Buttons";

describe("Test suite", () => {
  before(() => {
    // Set the browser resolution before all tests
    cy.setResolution(1920, 1080);
  });
  /**
   * @test #1
   *
   * Preconditions:
   * Open the page
   * Accept all cookies
   *
   * Verify that:
   * - logo is visible
   * - all main categories are visible
   * - “Fall's first layers are here!” is visible
   * - “Modern craft” is visible
   * - “Shop now” button is visible
   */
  it("Verify home page UI elements", () => {
    // Go to login page
    Home.visit();
    Buttons.button("Accept all cookies").click();
    // Verify that logo is visible
    Home.logo().should("be.visible");
    // Verify that all main categories are visible
    Home.tab("Women").should("be.visible");
    Home.tab("Men").should("be.visible");
    Home.tab("Divided").should("be.visible");
    Home.tab("Baby").should("be.visible");
    Home.tab("Kids").should("be.visible");
    Home.tab("Home").should("be.visible");
    Home.tab("Beauty").should("be.visible");
    Home.tab("Sport").should("be.visible");
    Home.tab("Sale").should("be.visible");
    Home.tab("Sustainability at HM").should("be.visible");
    // Verify that “Fall's first layers are here!” is visible
    Home.bannerTop()
      .should("contain.text", "Fall's first layers are here!")
      .and("be.visible");
    // Verify that “Captivating contrasts” is visible
    Home.bannerBottom()
      .should("contain.text", "Captivating contrasts")
      .and("be.visible");
    // Verify that “Shop now” button is visible
    Home.shopNowButton()
      .should("contain.text", "Shop now")
      .and("be.visible");
  });
  /**
   * @test #2
   *
   * Preconditions:
   * Open the page
   * Accept all cookies
   *
   * Steps:
   * Verify that logo is visible
   */
  it.skip("Empty test", () => {
    Home.visit();
  });
});
