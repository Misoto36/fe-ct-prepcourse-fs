function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
   let resultado =  resultadosTest.reduce((a,b) => a + b,0)

   return resultado/resultadosTest.length
}

module.exports = promedioResultadosTest;
