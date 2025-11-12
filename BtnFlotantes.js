// Agrega animaciones a los botones flotantes al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        // Agrega la clase 'visible' a cada botón flotante con un retraso escalonado
        document.querySelectorAll('.fab-float').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), 200 * i);
        });
    }, 400);
});