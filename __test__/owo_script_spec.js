var spec = require('../page_object/discord');

/**
 * @function runEverything
 * Make all the correct workflow for login, go to
 * a certain server and write endlessly.
 */

async function runEverything() {
    await spec.goToDiscord();
    await spec.fillInputs();
    await spec.goToServer();
    await spec.writeOwos();
}

runEverything();