const gallery = document.querySelector('.gallery');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

prevButton.addEventListener('click', () => {
    gallery.scrollBy({
        left: -350, // Ancho de cada elemento de la galería más espacio
        behavior: 'smooth',
    });
});

nextButton.addEventListener('click', () => {
    gallery.scrollBy({
        left: 350, // Ancho de cada elemento de la galería más espacio
        behavior: 'smooth',
    });
});

function showMessage() {
    alert("Tu compra ha sido exitosa");
}