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

    test.it("test go to week 2", function (done) {
        goToNavLink("Rapporter");
        goToNavLink("Week 2");
        done();
    });
    test.it("test go to week 3", function (done) {
        goToNavLink("Rapporter");
        goToNavLink("Week 3");
        done();
    });
    test.it("test go to week 1", function (done) {
        goToNavLink("Rapporter");
        goToNavLink("Week 1");
        done();
    });
});