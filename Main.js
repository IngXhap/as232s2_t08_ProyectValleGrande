document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu a');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            item.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; // Cambia el color de fondo al pasar el cursor
            // Ajusta el tamaño de la fuente y el padding al pasar el cursor
            item.style.fontSize = '28px';
            item.style.padding = '10px 20px';
            // Opcional: Agrega sombreado
            item.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        });

        item.addEventListener('mouseout', function() {
            item.style.backgroundColor = ''; // Revierte al color de fondo original cuando el cursor sale del elemento
            // Revierte al tamaño de fuente y padding originales cuando el cursor sale del elemento
            item.style.fontSize = '';
            item.style.padding = '';
            item.style.boxShadow = ''; // Revierte al sombreado original cuando el cursor sale del elemento
        });
    });
});
