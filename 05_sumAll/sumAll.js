
const sumAll = function(numInicial, numFinal) {
    let signNumInicial = Math.sign(numInicial)
    let signNumFinal = Math.sign(numFinal)
    let typeNumInicial = typeof(numInicial)
    let typeNumFinal = typeof(numFinal)
    if (numInicial > numFinal) {
        numSmall = numFinal
        numBig = numInicial
    } else {
        numSmall = numInicial
        numBig = numFinal
    }

    if ((signNumInicial === 1 || signNumInicial === 0) 
        && (signNumFinal === 1 || signNumFinal === 0)
        && typeNumInicial === typeof(2) 
        && typeNumFinal === typeof(2)) 
        {
        let resultado = numSmall
        let i = (numSmall+1);
        while (i <= numBig) {
            resultado += ++numSmall 
            i++
        }
        return resultado
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;



// dos alternativas que hizo un amigo por practicar; 

// function sumAll2(a, b){

//    // valida que el tipo de dato sea el esperado
//   if(typeof a === 'string' || typeof b === 'string' || typeof a === 'object' || typeof b === 'object' || a < 0 || b < 0  ){
//     return 'ERROR'
//   }

//   // valida y que el primer valor sea menor que el segundo y si no cambia las posiciones
//   let temporal = 0
//   if(a > b){
//     temporal = b
//     b = a 
//     a = temporal
//   }

  
//   let sumatoria = 0
//   for(let i = a; i <= b; i++ ){
//     sumatoria += i
//   }
//   return sumatoria
// }


// la segunda 

// const sumAll = (a, b) => {

//     // valida que el tipo de dato sea el esperado
//     if(typeof a === 'string' || typeof b === 'string' || typeof a === 'object' || typeof b === 'object' || a < 0 || b < 0  ){
//       return 'ERROR'
//     }
  
//     // valida y que el primer valor sea menor que el segundo y si no cambia las posiciones
//     let temporal = 0
//     if(a > b){
//       temporal = b
//       b = a 
//       a = temporal
//     }
//     return a === b ? a : a + sumAll(a + 1, b)
//   };