function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  const volcales = ["a","e","i","o","u","A","E","I","O","U"]

    if (volcales.includes(letra)){
      console.log("Es Vocal")
    }else{
    console.log("Dato incorrecto")
    }
}

module.exports = esVocal;
