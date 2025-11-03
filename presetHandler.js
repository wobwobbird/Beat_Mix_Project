// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, presetsArrayIndex, newPresetArray) => {
    let firstElement = "";
    let secondElement = "";
    // request check
    const requestTypes = ["GET", "PUT"];
    if (!requestTypes.includes(requestType)) {
        return [ 400 ];
    }
    // index check
    if (presetsArrayIndex < 0 || presetsArrayIndex >= presets.length) {
        return [ 404 ]; // NOT FOUND
    } else {
        firstElement = 200; //OK
    }

    if (requestType === "GET") {
        secondElement = presets[presetsArrayIndex];
    } else if (requestType === "PUT") {
        presets[presetsArrayIndex] = newPresetArray;
        secondElement = presets[presetsArrayIndex];
    }
    return [firstElement, secondElement];

};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
