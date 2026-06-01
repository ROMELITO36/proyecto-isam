const boton = document.getElementById('botonAccion');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', () => {
    mensaje.textContent = '¡Has interactuado correctamente con JavaScript!';
});