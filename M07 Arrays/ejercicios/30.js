function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let ordered = numeros.sort();
   for(let i = 0; i < ordered.length; i++){
      if(ordered[i + 1] === ordered[i]){
        return ordered[i];
      }
   }
}


module.exports = encontrarElementoRepetido;