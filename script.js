document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".typing");
    const text = "Estas a un paso de hacer tu sueño realidad.. ";
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Ajusta la velocidad de tipeo aquí (en milisegundos)
        }
    }

    type();
});


document.querySelector('.header__container_icon-menu').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('show-menu');
});