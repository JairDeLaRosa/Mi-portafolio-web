window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const lineas = [
   "Hello, I'm \nJair De La Rosa"
];

let lineaActual = 0;
let indiceCaracter = 0;
const velocidad = 100; // Velocidad de escritura en milisegundos

function escribirLinea() {
    const textoElemento = document.getElementById('nombre');
    
    // Si la línea actual no ha terminado, escribir el siguiente carácter
    if (indiceCaracter < lineas[lineaActual].length) {
        textoElemento.textContent += lineas[lineaActual][indiceCaracter];
        indiceCaracter++;
        setTimeout(escribirLinea, velocidad); // Llamada recursiva para el siguiente carácter
    } else {
        // Cuando una línea termina, pasar a la siguiente después de un breve retraso
        if (lineaActual < lineas.length - 1) {
            lineaActual++;
            indiceCaracter = 0;
            textoElemento.textContent += '\n'; // Agrega un salto de línea
            setTimeout(escribirLinea, velocidad); // Comienza a escribir la siguiente línea
        }
    }
}

// Iniciar el efecto de máquina de escribir
escribirLinea();