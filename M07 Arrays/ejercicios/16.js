function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let meses = [];
  array.forEach(element => {
     if (element == "Enero" || element == "Marzo" || element == "Noviembre"){
       meses.push(element);            
     }
  })

  if (meses.length !== 3){
    return "No se encontraron los meses pedidos"
  }else{
    return meses
  }
}

module.exports = mesesDelAño;
