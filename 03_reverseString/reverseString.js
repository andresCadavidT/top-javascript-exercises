const reverseString = function(word) {
    let newWord = "";
    for (let i = word.length; i >= 0; i--) {
        newWord += word.slice(i,(i+1))
    }
    return newWord   

};

// Do not edit below this line
module.exports = reverseString;


