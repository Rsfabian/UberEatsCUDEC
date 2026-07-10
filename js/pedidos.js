document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  
});

let contenidoLista = '';

db.collection ("platillos").onSnapshot ((datos) => {
  datos.docChanges(). forEach ((registro) => {
     if (registro.type === "added") {
        agregarALista (registro.doc.data(), registro.doc.id);
     }
  });
  var elems = document.querySelectorAll('select');
  M.FormSelect.init(elems);

});
function agregarALista(platillos,id){
  contenidoLista += `<option value='${id}'>   
  ${platillos.nombre}
  </option>`; 
  document.getElementById("listaPlatillos").innerHTML = contenidoLista;
}
  M.AutoInit();

  document.getElementById("btnUbicacion").addEventListener("click", function() {
    if (navigator.geoLocatioin) {
      navigator.geolocation.getCurrentPosition(exito, error);   
  }
  });

  
function exito(posicion){
  let latitud = posicion.coords.latitue;
  let longitud = posicion.coord.longitud;
  fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitud}&lon{longitud}&=format=json`,{
    headers:{
      'User-Agent': 'error (rsfabian1604@gmail.com)'
    }
  })

  .then(respuesta => respuesta.json())
  .then (data => {
    let ciudad = data.addrees.city;
    let pais = data.addrees.country;
    document.getElementById("direccion").value = `${ciudad}, ${pais}`;
    var map = L.map ('map').setView([latitud, longitud],13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([51.5, -0.09]).addTo(map);
    } )
    .catch(error => console.error(error));
}



  const formularioAgregar = document. querySelector("form");
formularioAgregar. addEventListener("submit", (e) => {
   e.preventDefault();
const platilloNuevo = {
    nombre: formularioAgregar.title.value,
    ingredientes: formularioAgregar.ingredients.value,
    precio: formularioAgregar.price.value
}

db.collection("platillos").add(platilloNuevo)
.catch((error) => {
    console.log(error);
    alert("Error al agregar platillo");
 }
 );
 formularioAgregar.title.value = "";
 formularioAgregar.ingredients.value = "";
 formularioAgregar.price.value = "";
 alert("Platillo agregado");
});
