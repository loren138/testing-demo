Feature("Contact Form");

const subfolder = "contact/";
const outputFolder = "output/";

Scenario("Initial Form", (I) => {
    const imageName = subfolder + "contact-form.png";
    I.amOnPage("#/contact");
    // Make sure the page has loaded
    I.waitForElement("#sendBtn");

    I.saveScreenshot(outputFolder + imageName);
    I.seeVisualDiff(imageName, { tolerance: 2, prepareBaseImage: false });
});

Scenario("Empty Form Errors", (I) => {
    const imageName = subfolder + "contact-form-invalid.png";
    I.amOnPage("#/contact");
    // Make sure the page has loaded
    I.waitForElement("#sendBtn");
    I.click("#sendBtn");
    // Make sure at least one error message has loaded
    I.waitForElement("#nameError");
    I.waitForText("Name is Required!");
    I.saveScreenshot(outputFolder + imageName);
    I.seeVisualDiff(imageName, { tolerance: 2, prepareBaseImage: false });
});

Scenario("Thank You", (I) => {
    const imageName = subfolder + "contact-form-thank-you.png";
    I.amOnPage("#/contact");
    // Make sure the page has loaded
    I.waitForElement("#sendBtn");

    // Fill Form
    I.fillField("#name", "Loren");
    I.fillField("#email", "email@email.com");
    I.fillField("#message", "Hello From Codecept");

    // Send
    I.click("#sendBtn");
    // Make sure at least one error message has loaded
    I.waitForElement("#thanks");
    I.waitForText("Thanks for contacting us", 1, "#thanks");

    I.saveScreenshot(outputFolder + imageName);
    I.seeVisualDiff(imageName, { tolerance: 2, prepareBaseImage: false });
});
