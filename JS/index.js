let Music = new Audio("AUDIO/inicio.ogg")
let welcome = new Audio("AUDIO/welcome.ogg")
let menu = document.querySelector(".menu")
let introCarta = document.querySelector(".intro")
let body = document.querySelector(".body")
let proximamente = document.querySelector(".proximamente");
let proximo = document.querySelector(".proximo");

proximo.addEventListener("click", () => {
    proximamente.classList.add("proximamenteAnimacion");
    setTimeout(() => {
        proximamente.classList.remove("proximamenteAnimacion");
    }, 8000)
})

Music.loop = true;
Music.volume = 0.5;
welcome.volume = 0.8;

// Inicio carta
let xCarta = document.querySelector(".x")
xCarta.addEventListener("click", () => {
    welcome.play();
    introCarta.style.display = "none"
    menu.style.filter = "blur(0px)"
    body.style.overflowY = "visible"
    setTimeout(() => {
        Music.play()
    },1500)
})

// Aparicion de elementos
function verificarVistaAparicion(e, clase) {
    let entry = e[0];
    if (entry.isIntersecting) {
        tarjetasAnimacion.classList.add(`${clase}`);
    } else{
        tarjetasAnimacion.classList.remove(`${clase}`);
    }
}
let observarAparicion = new IntersectionObserver((entries) => {
    verificarVistaAparicion(entries, "container-tarjeta-animation")
})
let tarjetasAnimacion = document.querySelector(".container-tarjeta")
observarAparicion.observe(tarjetasAnimacion);


// Titan
function verificarVista(e, clase) {
    let entry = e[0];
    if (entry.isIntersecting) {
        titan.classList.add(`${clase}`);
    } else{
        titan.classList.remove(`${clase}`);
    }
}
let observerTitan = new IntersectionObserver((entries) => {
    verificarVista(entries, "titanAnimacion")
})
let titan = document.querySelector(".titan")
observerTitan.observe(titan);

