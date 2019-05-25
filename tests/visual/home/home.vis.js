Feature("Home Page");

const subfolder = "home/";
const outputFolder = "output/";

Scenario("Home Page", (I) => {
    const imageName = subfolder + "home.png";
    I.amOnPage("/");
    // Make sure the page has loaded
    I.waitForElement("#home");

    I.saveScreenshot(outputFolder + imageName);
    I.seeVisualDiff(imageName, { tolerance: 2, prepareBaseImage: false });
});
