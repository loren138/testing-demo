exports.config = {
    tests: "./tests/visual/**/*.vis.js",
    output: "./output",
    helpers: {
        WebDriver: {
            url: "http://localhost:8080",
            browser: "chrome",
            windowSize: "1280x800",
            desiredCapabilities: {
                chromeOptions: {
                    args: [ "--headless", "--disable-gpu", "--window-size=1280,800" ]
                }
            },
        },
        ResembleHelper: {
            require: "codeceptjs-resemblehelper",
            screenshotFolder: "./output/",
            baseFolder: "./tests/visual/",
            diffFolder: "./output/visual-tests-diff/"
        }
    },
    include: {},
    bootstrap: null,
    mocha: {},
    name: "testing-demo"
};
