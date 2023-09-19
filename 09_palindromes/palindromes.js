const palindromes = function (text) {
    test1 = text.toLowerCase().replaceAll(/[^a-z0-9]+/g, "")
    test2 = text.toLowerCase().replaceAll(/[^a-z0-9]+/g, "").split("").reverse().join("")
    return (test1 === test2) ? true: false;
    }


// Do not edit below this line
module.exports = palindromes;
