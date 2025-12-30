import { propiedadesEnArriendo } from "./arraysPropiedades.js";
const container= document.querySelector("#containerAlquiler");

export const cargarArriendo =(propiedades) =>{
    let contenidoHTML = '';
    for (let propiedadesArriendo of propiedades){

contenidoHTML+= `

<div class= "col-md-4 mb-4">
<div class= "card">
<img src="${propiedadesArriendo.src}" class="card-img-top "  alt="Imagen-apartamento" style="height: 200px; object-fit: cover;">
<div class= "card-body">
<h5> titulo: ${propiedadesArriendo.nombre}</h5>
<p> ubicacion: ${propiedadesArriendo.ubicacion}</p>
<p> costo: $${propiedadesArriendo.costo}</p>
<p style="color: ${propiedadesArriendo.smoke ? 'green' : 'red'}">
    ${propiedadesArriendo.smoke
    ? '<i class="fa-solid fa-smoking"></i> Permitido fumar'
    : '<i class="fa-solid fa-ban"></i>No se permite fumar'}
</p>

<p style="color: ${propiedadesArriendo.pets ? 'green' : 'red' }">  
    ${propiedadesArriendo.pets 
    ? '<i class="fa-solid fa-dog"></i> Se permiten mascotas'
    : ' <i class="fa-solid fa-ban"></i> No se permiten mascotas'} 
</p>
</div>
</div>
</div>`

}
container.innerHTML=contenidoHTML;
}
cargarArriendo(propiedadesEnArriendo);
