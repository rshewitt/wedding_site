describe("Navigation", () => {
    it("should navigate the page", () => {
        cy.visit("http://localhost:3000/");

        cy.get('img[alt="home_img"]').should("be.visible");
        cy.get('button[id="welcome_button"]').click();
        cy.get('div[id="registry_button"]').should("be.visible");
        cy.get('button[id="react-burger-menu-btn"]').should("be.visible");

        // TODO: write more tests...
    });
});
