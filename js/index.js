let botonmenu = document.getElementById("btn-menu");
let menu = document.querySelector(".menu"); 

botonmenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
})

const btnContacto = document.querySelector('.icono_principal');
const caja = document.querySelector('.contactos');

btnContacto.addEventListener('click', function(){
    caja.classList.toggle('aparecer');
})



