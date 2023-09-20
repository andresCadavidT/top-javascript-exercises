const getTheTitles = function(books) {
    return books.reduce((ac, actual) => {
        return ac = [...ac, actual.title]
    },[])
};

// Do not edit below this line
module.exports = getTheTitles;

