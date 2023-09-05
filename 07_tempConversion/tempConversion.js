const convertToCelsius = function(fahr) {
  return +(((fahr - 32) * 5)/9).toFixed(1)
};

const convertToFahrenheit = function(cels) {
  return +((( cels * 9 ) / 5 ) + 32).toFixed(1)
};


// Faren to Celcius (x °F − 32) × 5/9 = 0 °C     ---------------  x °F ≘ (x − 32) × 5/9°C
// celsius to fahrenheit x °C ≘ (x × 9/5+ 32) °F


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
