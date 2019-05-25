describe("The Contact Page", function() {
    it("shows errors", function() {
        cy.visit("/#contact");
        cy.contains("h2", "Contact Loren");
        cy.get("#sendBtn").click();
        cy.contains("#nameError", "Required");
        cy.contains("#emailError", "Required");
        cy.contains("#messageError", "Required");
    });
    it("submits", function() {
        cy.visit("/#contact");
        cy.contains("h2", "Contact Loren");
        cy.get("#name").type("Loren");
        cy.get("#email").type("email@email.com");
        cy.get("#message").type("Hello From Cypress");
        cy.get("#sendBtn").click();
        cy.contains("#thanks", "Thanks");
    });
});
