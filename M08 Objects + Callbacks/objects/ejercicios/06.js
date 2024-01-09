const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
   let cantidad = 0;
   for( key in objeto){
      cantidad += 1
   }
   return cantidad;
};

module.exports = contarPropiedades;
