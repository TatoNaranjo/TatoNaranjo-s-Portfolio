/* Validación del Formulario */

const datos ={
    nombre:"",
    email:"",
    telefono:"",
    mensaje:""
};

/* Utilizamos query selector como seleccionador debido a que solo necesitamos 
                Un Elemento de cada tipo
*/
const nombre = document.querySelector("#nombre");
const telefono = document.querySelector("#telefono");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
telefono.addEventListener("input",leerTexto);
email.addEventListener("input",leerTexto);
mensaje.addEventListener("input",leerTexto);

/* Leemos todo lo que el Usuario Vaya Digitando por Medio de Esta función */
function leerTexto(e){
}

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    



/* Empezamos a validar el Formulario */

const {nombre, telefono, email, mensaje} = datos;
let hayError = false;

if(nombre === '' || telefono === '' || email === '' || mensaje === ''){
    muestraMensaje("Todos los Campos son Obligatorios");
    hayError = true;
    return;
}else{
    muestraMensaje("Información Enviada Correctamente");
}

function muestraMensaje(mensaje){
    const message = document.createElement('P');
    message.textContent = mensaje;
    if(mensaje === 'Todos los Campos son Obligatorios'){
        message.classList.add("error");

    }else{
        message.classList.add("correcto");
    }
    formulario.appendChild(message);

    setTimeout(()=>{
        message.remove();
    },3000)
}
})


/* FIN DE LA VALIDACION DE FORMULARIO */

/* Implementación del Formulario */
const form = document.querySelector("#form");
const buttonMailTo = document.querySelector('#ocultar');
form.addEventListener('submit',handleSubmit)

function handleSubmit(event){
event.preventDefault()

const formulario = new FormData(this)
console.log(formulario.get('telefono'))
buttonMailTo.setAttribute('href',`mailto:naranjosa2004@gmail.com?subject=${formulario.get('name')} ${formulario.get('email')}&body=${formulario.get('mensaje')}`)
buttonMailTo.click()
}