describe("The Home Page", function() {
    it("successfully loads", function() {
        cy.visit("/#contact");
        cy.contains("h2", "Contact Loren");
    });
});
