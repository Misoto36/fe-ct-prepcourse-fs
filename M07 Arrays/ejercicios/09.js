function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  const count = array.filter((num) => num > 10)
  return count.length
}

module.exports = contarElementosMayoresA10;
