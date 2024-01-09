function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let resultado = arrayOfNums.reduce((a , b ) => a + b, 0)
  return resultado
}


agregarNumeros([1,2,3,4,5,6,7,8,9])

module.exports = agregarNumeros;
