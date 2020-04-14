var config = require('../config/config.json'); 
const {Builder, By, Key} = require('selenium-webdriver');
const baseDriver = require('../utils/driver.js');
const utils = require('../utils/utils.js');
var elements = require('./elements_discord.json');
let driver = baseDriver.driver();

/**
 * @function goToDiscord goes to the discord login.
 * @function fillInputs fill all the required inputs for the login.
 * @function goToServer goes directly into a server.
 * @function writeOwos finds the bottom text input, writes a text and
 * repeat it forever.
 */

async function goToDiscord(){
    await driver.get("https://discordapp.com/channels/@me");
    return this;
}

async function fillInputs(){
    await utils.sleep(3000);
    await driver.findElement(By.css(elements.input_email)).sendKeys(config.username);
    await driver.findElement(By.css(elements.input_password)).sendKeys(config.password);
    await driver.findElement(By.xpath(elements.login_button)).click();
    return this;
}

async function goToServer(){
    await utils.sleep(5000);
    await driver.get(config.server_url);
    return this;
}

async function writeOwos(){
    await utils.sleep(10000)
    let number = 0;
    while(true){
        await driver.findElement(By.css(elements.text_input)).sendKeys(config.message, Key.ENTER);
        console.log("owo number: #", number++);
        await utils.sleep(15000);
    }
}

exports.goToDiscord = goToDiscord
exports.fillInputs = fillInputs
exports.goToServer = goToServer
exports.writeOwos = writeOwos