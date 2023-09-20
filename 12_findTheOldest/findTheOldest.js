const findTheOldest = function(people) {
    return people.reduce((ac, actual)=>{
        let today = new Date()
        if (!actual.yearOfDeath) {actual.yearOfDeath = today.getFullYear()}
        age = actual.yearOfDeath - actual.yearOfBirth
        acAge = ac.yearOfDeath - ac.yearOfBirth
        if (age > acAge){
        ac = actual
        }
        return ac
    },people[0])
};

// Do not edit below this line
module.exports = findTheOldest;
