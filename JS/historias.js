let informacion = document.querySelector(".informacion");
let pagina = document.querySelector(".pagina")
let portadas = document.querySelector(".portadas")
let flechas = document.querySelectorAll(".esconder")
let click = new Audio("AUDIO/click.ogg")
click.volume = 0.01;
let peliculasAgregadas = [];
class peliculas{
    constructor(nombre, temporadas, trama, descripcion, portadaGrande, portada, openingNombre, openingRuta, calificacion) {
        this.nombre = nombre;
        this.temporadas = temporadas;
        this.capitulos = []
        this.trama = trama;
        this.descripcion = descripcion;
        this.portadaGrande = portadaGrande;
        this.portada = portada;
        this.openingNombre = openingNombre;
        this.openingRuta = openingRuta;
        this.calificacion = calificacion;
        this.Lista();
        this.pantallaInicio();
    }
    Lista() {
        peliculasAgregadas.push(this)
        portadas.innerHTML += `
            <img class="tarjeta tarjetaElegida" src="${this.portada}" alt="">
            `
    }
    pantallaInicio() {
        informacion.innerHTML = `
            <h1 class="titulo">${peliculasAgregadas[0].nombre}</h1>
            <div class="opening">
                <img class="reproduccir" src="IMG/play.webp" alt=""><p>${peliculasAgregadas[0].openingNombre}</p>
            </div>
            <p class="descripcion">${peliculasAgregadas[0].descripcion}</p>
            <p class="adicional">Calificación: ${peliculasAgregadas[0].calificacion >= 5? "⭐⭐⭐⭐⭐": peliculasAgregadas[0].calificacion = 4? "⭐⭐⭐⭐": peliculasAgregadas[0].calificacion = 3? "⭐⭐⭐": peliculasAgregadas[0].calificacion = 2? "⭐⭐": peliculasAgregadas[0].calificacion = 1? "⭐": ""}</p>
            <p class="adicional">Temporadas: ${peliculasAgregadas[0].temporadas}</p>
            <div class="containerGenero">
                <p class="generoTitulo">Genero:</p>
                <P class="genero"> ${peliculasAgregadas[0].trama}</P>
            </div>
            <div class="descargar">
                <h5 class="iniciar">INICIAR</h5>
                <p>o</p>
                <a href="Archivos/Teddy_La_ultima_luz.pdf" download="Teddy_La_ultima_luz.pdf"><h5 class="iniciar">DESCARGAR</h5></a>
            </div>
        `;
        let opening = new Audio(`${peliculasAgregadas[0].openingRuta}`)
        opening.volume = 0.5;
        let estado = false;
        opening.pause();
        opening.currentTime = 0;
        pagina.style.backgroundImage = `url("${peliculasAgregadas[0].portadaGrande}")`;
        let botonMusic = document.querySelector(".reproduccir")
        botonMusic.addEventListener("click", () => {
            if (!estado) {
                estado = true;
                botonMusic.src = "IMG/pausa.webp"
                opening.play();
            } else {
                estado = false;
                botonMusic.src = "IMG/play.webp"
                opening.pause();
            }
        })
        let iniciar = document.querySelector(".iniciar")
        iniciar.addEventListener("click", () => {
            portadas.classList.add("iniciarBotonAccion");
            flechas.forEach(flechas => {
                flechas.classList.add("iniciarBotonAccion");
            });
            click.pause();
            click.currentTime = 0;
            click.play();
        })
    }
}
let teddyLaUltimaLuz = new peliculas("Teddy: La ultima luz", 1, "Fantasía oscura, romance progresivo, terror psicológico, drama, aventura sobrenatural.", "Una chica, su perro y un joven desconocido enfrentan el inicio de un apocalipsis sobrenatural que desata sus miedos más profundos. Entre sombras, secretos y lazos que se fortalecen, descubren que el amor puede ser la última luz.", "IMG/tdfondo.webp", "IMG/tdportada.webp", "Kagayaki no Fin — El Brillo Final", "AUDIO/KagayakinoFinElBrilloFinal.ogg", 5)
