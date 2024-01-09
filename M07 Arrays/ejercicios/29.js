function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:  

  for(let i = 0; i < numeros.length; i++){
   
    let n = numeros.length
    let  sum = n *(n + 1)/2
    let curretsum = numeros.reduce((a ,b) => a + b, 0)
    if (sum === curretsum){
      return null
    }
    return sum - curretsum
    }
}

module.exports = encontrarNumeroFaltante;