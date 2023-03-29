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
} )
const calcular = document.getElementById('botontarifa');

function calcularTarifa(){
    const nombre = document.getElementById('nombre-de-huesped').value;
    const cantpers = document.getElementById('cantpersonas').value;
    const cantdias = document.getElementById('cantnoches').value;
    const mensaje = document.getElementById('total-tarifa');
    const alertanombre = document.getElementById('alerta-nombre');
    const alertcantpers = document.getElementById('alertacantpers');
    const alertcannoches = document.getElementById('alertacantnoches');
    const precio = 4000;
    const total = cantpers*precio*cantdias;
    const caja = document.getElementById('nombre-de-huesped')
    
    if (nombre == ""){
        
        alertanombre.innerHTML= "¡Ingrese su nombre!";
        caja.classList.add("incorrecto")
        
    }
    else if (cantpers<2){
        alertcantpers.innerHTML = 'Número mínimo de huéspedes: 2 personas';
    }
    else if (cantdias<3){
        alertcannoches.innerHTML= 'Número mínimo de noches: 3 noches';
    }
    else{
        mensaje.innerHTML = '¡Hola! ' + nombre + ' el total de su estadía es: $'+ total + ' pesos';
    }
}


calcular.addEventListener('click', calcularTarifa);

//en proceso de arreglo