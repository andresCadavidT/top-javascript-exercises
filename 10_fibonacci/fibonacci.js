const fibonacci = function(num) {
    if (num < 0) {return "OOPS"}
    if (num == String) {+num}
    let arrayT = [1,1]
    for (let i = 0; i < num; i++) {
        arrayT.push((arrayT[i] + arrayT[i+1]))
    }
    return arrayT[num-1]
};

// console.log(array)

//  F{n} = F{n-1} + F{n-2} 


// Do not edit below this line
module.exports = fibonacci;
