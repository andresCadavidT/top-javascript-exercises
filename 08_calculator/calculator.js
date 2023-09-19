const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(array) {
	return array.reduce((acc, actual)=>{
    return acc += actual
  },0)
};

const multiply = function(array) {
  return array.reduce((acc, actual)=>{
    return acc *= actual
  })
};

const power = function(a,b) {
	return a**b
};

const factorial = function(num) {
	if (num == 0) {return 1} 
  n = num
  for (let i = 1; i <= num-1; i++) {
    n *= num-i
  }
  return n
}
  
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
