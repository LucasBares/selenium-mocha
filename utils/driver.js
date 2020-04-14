var sw = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');

/**
 * @function driver generates webDriver object,
 * adding all the capabilities necessaries for 
 * the automation.
 * @see https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/capabilities_exports_Capabilities.html
 * @see https://peter.sh/experiments/chromium-command-line-switches/#load-extension
 * @see https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Options.html
 */

function driver() {
    const screen = {
        width: 1800,
        height: 900
        };

    let driver = new sw.Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless().windowSize(screen).addArguments('--mute-audio'))
    .build();

    return driver
}

exports.driver = driver