import { propiedadesEnVenta, propiedadesEnArriendo } from "./arraysPropiedades.js"; 
export const mostarPropiedades = (arrayPropiedades, contenedorHTML) => {

const container= document.querySelector("contenedorHTML");
let count =0;
let contenidoHTML = "";

for (const propiedad of arrayPropiedades){
    if(count < 3){
        contenidoHTML += ` 
        <div class="col-md-4 mb-4">   
        <div class="card"> 
                <img src="${propiedad.src}" class="card-img-top"  alt="Imagen propiedad" style="height: 200px; object-fit=cover">
                <div class="card-body">
                <h3> Titulo: ${propiedad.nombre}</h3>  
                <p> Descripcion: ${propiedad.descripcion}</p>
                <p> Costo: $${propiedad.costo}</p>
                <p style="color: ${propiedad.smoke ? 'blue' : 'red'}">Libro: ${propiedad.pets ? 'Apto para niños' : 'Apto para adultos'}</p>
                </div>
                </div>
        </div> `
        
            count++;
    }
}
if(container) container.innerHTML=contenidoHTML;
}
