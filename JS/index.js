let Music = new Audio("AUDIO/inicio.ogg")
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
Music.volume = 0.4;

// Inicio carta
let xCarta = document.querySelector(".x")
xCarta.addEventListener("click", () => {
    introCarta.style.display = "none"
    menu.style.filter = "blur(0px)"
    body.style.overflowY = "visible"
    Music.play()
})

// Aparicion de elementos
function verificarVista(e, clase, variable) {
    let entry = e[0];
    if (entry.isIntersecting) {
        variable.classList.add(`${clase}`);
    } else{
        variable.classList.remove(`${clase}`);
    }
}


let observarAparicion = new IntersectionObserver((entries) => {
    verificarVista(entries, "container-tarjeta-animation", tarjetasAnimacion)
})
let tarjetasAnimacion = document.querySelector(".container-tarjeta")
observarAparicion.observe(tarjetasAnimacion);


// Titan

let observerTitan = new IntersectionObserver((entries) => {
    verificarVista(entries, "titanAnimacion", titan)
})
let titan = document.querySelector(".titan")
observerTitan.observe(titan);

// Preocupacion animacion

let observerPreocupacion = new IntersectionObserver((entries) => {
    verificarVista(entries, "preocupacionIMGAnimation", Preocupacion)
})
let Preocupacion = document.querySelector(".preocupacionIMG")
observerPreocupacion.observe(Preocupacion);


let observerEnamorado = new IntersectionObserver((entries) => {
    verificarVista(entries, "enamoradoAnimation", Enamorado)
})
let Enamorado = document.querySelector(".enamorado")
observerEnamorado.observe(Enamorado);


let observerMenu = new IntersectionObserver((entries) => {
    verificarVista(entries, "menu-img-animation", Menu)
})
let Menu = document.querySelector(".menu-img")
observerMenu.observe(Menu);


let observerMenu2 = new IntersectionObserver((entries) => {
    verificarVista(entries, "imagen-container-animation", Menu2)
})
let Menu2 = document.querySelector(".imagen-container")
observerMenu2.observe(Menu2);



// carrusel
let carrusel = document.querySelector(".carrusel")
let anime = document.querySelector(".animes")
anime.addEventListener("click", () => {
    carrusel.classList.add("animeCarrusel")
})