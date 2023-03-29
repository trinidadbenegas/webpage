// Mostrar toggle menu en mobile

const hamburgerElement = document.getElementById('menu-hamburger');
const headerElement = document.getElementById('header');

function showToggle() {
    headerElement.classList.toggle('header--show');
}

hamburgerElement.addEventListener('click', showToggle);

//slider de fotos- siguiente foto
var nextBtn = document.getElementById('next_btn');
var images_slider = ["img/habitacion doble cabania para 4 personas traslasierra.jpg","img/cabania para 6 personas habitacion doble traslasierra.jpg","img/3 cabania cura brochero para 5 personas habitacion traslasierra 2.jpg","img/cabania en cura brochero para 4 personas traslasierra.jpg"];
var num = 0;

function next(){
   
    var slider = document.getElementById('slider1');
    
    num++;
    if (num >= images_slider.length){
       num = 0;
    }
    slider.src = images_slider[num];
}
    
nextBtn.addEventListener('click', next);

//slider fotos - foto anterior
var prevBtn= document.getElementById('prev_btn')

function prev(){
    var slider = document.getElementById('slider1');
    num--;
    if (num < 0){
        num = images_slider.length-1;
    }
    
    slider.src = images_slider[num];
}

prevBtn.addEventListener('click',prev )

// Validación de formulario
const form = document.getElementById('formulario-tarifa');


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const nombre = document.getElementById('nombre-de-huesped').value;
    const cantpers = document.getElementById('cantpersonas').value;
    const cantdias = document.getElementById('cantnoches').value;
    let validacion= validarFormulario(nombre, cantpers, cantdias);
    if (validacion){
        mostrarMensaje(nombre, cantpers, cantdias);
    }
} )



function validarFormulario(nombre, cantpers, cantdias){
    const nombre1 = nombre;
    const cantpers1 = cantpers;
    const cantdia1 = cantdias;

    
    
    const alertanombre = document.getElementById('alerta-nombre');
    const alertcantpers = document.getElementById('alertacantpers');
    const alertcannoches = document.getElementById('alertacantnoches');
    
    const cajanombre= document.getElementById("nombre-de-huesped");
    const cajapers= document.getElementById("cantpersonas");
    const cajadias= document.getElementById("cantnoches")
    const parrafos = document.querySelectorAll (".alerta")
    
    let validar = true

    parrafos.forEach( parrafo => {
       parrafo.innerHTML= "" 
    });

    


    
    if (nombre1 == ""){
        alertanombre.innerHTML= "¡Ingrese su nombre!";
        cajanombre.classList.add("incorrecto");
        validar= false;

    }
    else{
        cajanombre.classList.add("correcto");
    }
    if (cantpers1 <2){
        alertcantpers.innerHTML = 'Número mínimo de huéspedes: 2 personas';
        cajapers.classList.add("incorrecto");
        validar= false;
    }
    else{
        cajapers.classList.add("correcto");
    }
    if (cantdia1 <3){
        alertcannoches.innerHTML= 'Número mínimo de noches: 3 noches';
        cajadias.classList.add("incorrecto");
        validar= false;
    }
    else{
        cajadias.classList.add("correcto");
    }
    return validar
}


function mostrarMensaje(nombre, cantpers, cantdias){

    const nombre2 = nombre;
    const personas = cantpers;
    const dias = cantdias;
    const mensaje = document.getElementById('total-tarifa');
    const precio = 4000;
    const total = personas*precio*dias
    //form.reset();
    mensaje.innerHTML = '¡Hola! ' + nombre2 + ' el total de su estadía es: $'+ total + ' pesos';
}

