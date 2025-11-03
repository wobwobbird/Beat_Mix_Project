// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

const convertStringToArray = (drumArrayString) => {
    switch (drumArrayString) {
        case "kicks":
            return kicks;
        case "snares":
            return snares;
        case "hiHats":
            return hiHats;
        case "rideCymbals":
            return rideCymbals;
    }
    return undefined;
}

const toggleDrum = (drumArrayString, id) => {
    let actualDrumType = convertStringToArray(drumArrayString);
    if (drumArrayString === undefined || id === undefined) {
        return null;
    }
    if (id < 0 || id > 15) {
        return null;
    }
    actualDrumType[id] = !actualDrumType[id];
};

function clear(drumArrayString) {
    if (drumArrayString === undefined) {
        return null;
    }
   const validTypes = ["rideCymbals", "hiHats", "snares", "kicks"];
    if (!validTypes.includes(drumArrayString)) {
        return null;
    }
    let actualDrumType = convertStringToArray(drumArrayString);
    // if (actualDrumType === undefined) {
    //     return undefined;
    // }
    actualDrumType.fill(false);
}

function invert(drumArrayString) {
    if (drumArrayString === undefined) {
        return null;
    }
   const validTypes = ["rideCymbals", "hiHats", "snares", "kicks"];
    if (!validTypes.includes(drumArrayString)) {
        return null;
    }
    let actualDrumType = convertStringToArray(drumArrayString);
    for (let i = 0; i < actualDrumType.length; i++) {
        actualDrumType[i] = !actualDrumType[i];
    }
}