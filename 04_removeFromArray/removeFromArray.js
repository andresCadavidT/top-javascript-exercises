function removeFromArray (removeFrom, ...severalArgs) {
    let finalArray
    finalArray = removeFrom.filter(elemRemoveFrom => {
        return severalArgs.every(elemSeveralArgs => {
            return elemSeveralArgs !== elemRemoveFrom
        })
    })
    return finalArray
};

// Do not edit below this line
module.exports = removeFromArray;


// theRestArgs[0] && element !== theRestArgs[1] && element !== theRestArgs[2] && element !== theRestArgs[3]