const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  let value = array.find(callback)
   if(value === undefined){
    return "No se encontro el elemento"
   }
   return value

};

module.exports = buscarElemento;
