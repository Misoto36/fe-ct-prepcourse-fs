function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  return valor == null || valor == undefined;
}

esNuloOIndefinido(null)


module.exports = esNuloOIndefinido;