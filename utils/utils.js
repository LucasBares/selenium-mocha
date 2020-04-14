/**
 * @function sleep forces to the program to sleep
 * a certain amount of millisecconds
 */


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

exports.sleep = sleep