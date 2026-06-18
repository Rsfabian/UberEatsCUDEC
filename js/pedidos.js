let contenidoLista ='';
function agregarALista(platillo,id){
  contenidoLista = `<option value=''>
  ${mostrarPlatillo.nombre}
  </option`;
  document.getElementById ('ListPlatillos').innerHTML = 
  contenidoLista;
}