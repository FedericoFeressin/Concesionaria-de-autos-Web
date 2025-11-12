// Carrusel: selección de items y estado inicial
const items = document.querySelectorAll('.carrusel-item');// NodeList de elementos del carrusel
let index = 0;// índice actualmente visible

// Muestra el item en la posición i y oculta los demás
function showItem(i) {
    // Recorre todos los items; aplica la clase 'active' solo al índice i
    items.forEach((img, idx) => {
        img.classList.toggle('active', idx === i);
    });
}
// Handler (controlador de evento) para botón anterior
document.querySelector('.carrusel-btn.prev').onclick = () => {
    // Resta uno y usa aritmética modular para ciclar al final si es necesario
    index = (index - 1 + items.length) % items.length;
    showItem(index);// actualiza la vista
};

// Handler (controlador de evento) para botón siguiente
document.querySelector('.carrusel-btn.next').onclick = () => {
    // Suma uno y usa aritmética modular para ciclar al inicio si es necesario
    index = (index + 1) % items.length;
    showItem(index); // actualiza la vista
};

// Animación automática cada 3 segundos
setInterval(() => {
    // Incrementa el índice y cicla si es necesario
    index = (index + 1) % items.length;
    showItem(index); // actualiza la vista
}, 3000);

// Inicializa el carrusel
showItem(index);


// Animacion de botones flotantes
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        // Agrega la clase 'visible' a cada botón flotante con un retraso escalonado
        document.querySelectorAll('.fab-float').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), 200 * i);
        });
    }, 400);
});