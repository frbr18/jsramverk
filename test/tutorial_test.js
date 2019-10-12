const test = require("selenium-webdriver/testing");
const assert = require("assert");
const webdriver = require("selenium-webdriver");
const By = require("selenium-webdriver").By;

let browser;

test.describe("ME-Client", function () {
    test.beforeEach(function (done) {
        this.timeout(20000);
        browser = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
        browser.get("https://me-client.frbr18-jsramverk.me/");
        done();
    });

    function goToNavLink(target) {
        browser.findElement(By.linkText(target)).then(function (element) {
            element.click();
        });
        //browser.sleep(500);
    }

    test.afterEach(function (done) {
        browser.quit();
        done();
    });

    test.it("test go to about", function (done) {
        goToNavLink("Om");
        done();
    });

    test.it("test go to register", function (done) {
        goToNavLink("Registrera");
        done();
    });
    test.it("test go to login", function (done) {
        goToNavLink("Logga in");
        done();
    });
    test.it("test go to rapports", function (done) {
        goToNavLink("Rapporter");
        done();
    });
});