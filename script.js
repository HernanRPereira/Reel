// script.js

// Función para suavizar el scroll
document.querySelectorAll('nav .menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

        const targetId = this.getAttribute('href').substring(1); // Obtener el ID de la sección objetivo
        const targetElement = document.getElementById(targetId); // Encontrar el elemento objetivo

        if (targetElement) {
            // Desplazamiento suave hacia el elemento objetivo
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});