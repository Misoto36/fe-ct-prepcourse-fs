function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  const maxString = array.find((str) => str.length >= 5)
  return maxString
}


module.exports = obtenerPrimerStringLargo;



