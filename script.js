function obtenerFechaHoy() {

    const hoy = new Date();

    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, "0");
    const dia = String(hoy.getDate()).padStart(2, "0");

    return `${año}-${mes}-${dia}`;
}
const palabras = [
    // Animales
    "ELEFANTE", "JIRAFA", "LEON", "TIGRE", "PANTERA",
    "GUEPARDO", "LEOPARDO", "CEBRA", "RINOCERONTE", "HIPOPOTAMO",
    "COCODRILO", "TORTUGA", "DELFIN", "BALLENA", "TIBURON",
    "PINGUINO", "FLAMENCO", "AGUILA", "HALCON", "BUHO",
    "LORO", "CANARIO", "COLIBRI", "AVESTRUZ", "GALLINA",
    "CABALLO", "BURRO", "OVEJA", "CABRA", "CONEJO",
    "CASTOR", "ERIZO", "MURCIELAGO", "CANGURO",
    "KOALA", "PANDA", "GORILA", "CHIMPANCE", "ORANGUTAN",
    "ZORRO", "LOBO", "OSO", "MAPACHE", "COMADREJA",
    "GATO", "PERRO", "HAMSTER", "COBAYO", "HURON", "ARDILLA", "SERPIENTE", "LAGARTO", "IGUANA",
    "CAMALEON", "RANA", "SAPO", "SALAMANDRA", "TARANTULA",
    "ESCORPION", "MARIPOSA", "ABEJA", "AVISPA", "HORMIGA",
    "CUCARACHA", "GRILLO", "LIBELULA", "ESCARABAJO", "CIEMPIES",

    // Comida y cocina
    "PIZZA", "HAMBURGUESA", "EMPANADA", "MILANESA", "ASADO",
    "CHORIZO", "SALCHICHA", "RAVIOL", "FIDEOS", "ÑOQUIS",
    "LASAÑA", "SANDWICH", "TORTILLA", "ENSALADA", "SOPA",
    "GUISO", "PURE", "ARROZ", "LENTEJAS", "GARBANZOS",
    "POROTOS", "POLENTA", "PANQUEQUE", "WAFFLE", "GALLETITA",
    "BIZCOCHO", "BROWNIE", "HELADO", "CHOCOLATE", "CARAMELO",
    "CHUPETIN", "ALFAJOR", "MEDIALUNA", "FACTURA", "BUDIN",
    "TORTA", "FLAN", "GELATINA", "YOGUR", "QUESO",
    "MANTECA", "CREMA", "LECHE", "HUEVO", "HARINA",
    "AZUCAR", "CANELA", "VAINILLA", "PIMIENTA", "OREGANO",
    "TOMATE", "LECHUGA", "ZANAHORIA", "CEBOLLA", "AJO",
    "PAPA", "BATATA", "CALABAZA", "ZAPALLO", "PEPINO",
    "BROCOLI", "ESPINACA", "BERENJENA", "MORRON", "CHOCLO",
    "MANZANA", "BANANA", "NARANJA", "MANDARINA", "FRUTILLA",
    "CEREZA", "DURAZNO", "PERA", "SANDIA", "MELON",
    "ANANA", "KIWI", "MANGO", "PAPAYA", "CIRUELA",

    // Deportes
    "FUTBOL", "BASQUET", "VOLEY", "TENIS", "RUGBY",
    "HOCKEY", "HANDBALL", "NATACION", "BOXEO", "JUDO",
    "KARATE", "ESGRIMA", "CICLISMO", "ATLETISMO", "GIMNASIA",
    "PATINAJE", "SURF", "REMO", "CANOTAJE", "ESCALADA",
    "ALPINISMO", "MARATON", "TRIATLON", "AJEDREZ", "GOLF",
    "BEISBOL", "SOFTBOL", "BADMINTON", "PINGPONG", "BILLAR",
    "BOWLING", "PESCA", "PARACAIDISMO", "EQUITACION", "AUTOMOVILISMO",
    "MOTOCROSS", "RALLY", "ESQUI", "SNOWBOARD", "PARKOUR",

    // Tecnologia
    "COMPUTADORA", "TECLADO", "PANTALLA", "MONITOR", "IMPRESORA",
    "CELULAR", "TABLET", "AURICULARES", "PARLANTE", "MICROFONO",
    "CAMARA", "BATERIA", "CARGADOR", "CABLE", "ENCHUFE",
    "PROCESADOR", "TELEVISOR", "CONTROL", "CONSOLA",
    "INTERNET", "NAVEGADOR", "SERVIDOR", "ROBOT", "SATELITE",
    "ANTENA", "DRON", "IMPRESION", "SOFTWARE", "HARDWARE",
    "CODIGO", "ALGORITMO", "PROGRAMA", "APLICACION",
    "PIXEL", "VIDEOJUEGO", "JOYSTICK", "MANDO", "RATON",

    // Lugares y geografia
    "ARGENTINA", "BRASIL", "URUGUAY", "CHILE", "PARAGUAY",
    "BOLIVIA", "PERU", "ECUADOR", "COLOMBIA", "VENEZUELA",
    "MEXICO", "CANADA", "ESPAÑA", "ITALIA", "FRANCIA",
    "ALEMANIA", "PORTUGAL", "JAPON", "CHINA", "INDIA",
    "AUSTRALIA", "EGIPTO", "MARRUECOS", "NORUEGA", "SUECIA",
    "FINLANDIA", "IRLANDA", "GRECIA", "TURQUIA", "TAILANDIA",
    "MONTAÑA", "VOLCAN", "DESIERTO", "BOSQUE", "SELVA",
    "PRADERA", "GLACIAR", "ISLA", "PLAYA", "OCEANO",
    "LAGUNA", "LAGO", "RIO", "ARROYO", "CASCADA",
    "VALLE", "CUEVA", "ACANTILADO", "PENINSULA", "CONTINENTE",

    // Ciencia y naturaleza
    "PLANETA", "ESTRELLA", "GALAXIA", "UNIVERSO", "COMETA",
    "ASTEROIDE", "METEORITO", "ASTRONOMIA", "TELESCOPIO", "LUNA",
    "SOL", "MARTE", "JUPITER", "SATURNO", "NEPTUNO",
    "MERCURIO", "VENUS", "URANO", "TIERRA", "GRAVEDAD",
    "ENERGIA", "ATOMO", "MOLECULA", "ELECTRON", "PROTON",
    "NEUTRON", "CELULA", "BACTERIA", "VIRUS", "GENETICA",
    "EVOLUCION", "FOSIL", "DINOSAURIO", "PALEONTOLOGIA", "BIOLOGIA",
    "QUIMICA", "FISICA", "GEOLOGIA", "ECOLOGIA", "BOTANICA",
    "HURACAN", "TORNADO", "TERREMOTO", "TSUNAMI", "TORMENTA",
    "RELAMPAGO", "TRUENO", "GRANIZO", "LLUVIA", "NIEVE",
    "ARCOIRIS", "NUBE", "VIENTO", "HUMEDAD", "TEMPERATURA",

    // Musica y arte
    "GUITARRA", "PIANO", "VIOLIN", "TROMPETA",
    "TROMBON", "FLAUTA", "CLARINETE", "SAXOFON", "ARPA",
    "ACORDEON", "TAMBOR", "MARACAS", "UKELELE", "BAJO",
    "CANTANTE", "MUSICA", "MELODIA", "RITMO", "CONCIERTO",
    "ORQUESTA", "BANDA", "CANCION", "ALBUM", "ESCENARIO",
    "TEATRO", "CINE", "PELICULA", "DIRECTOR",
    "PINTURA", "DIBUJO", "ESCULTURA", "FOTOGRAFIA", "MUSEO",
    "NOVELA", "CUENTO", "POESIA", "LIBRO", "BIBLIOTECA",

    // Objetos cotidianos
    "MOCHILA", "CUADERNO", "LAPICERA", "LAPIZ", "GOMA",
    "REGLA", "TIJERA", "PEGAMENTO", "CARPETA", "BORRADOR",
    "BOTELLA", "VASO", "TAZA", "PLATO", "CUCHARA",
    "TENEDOR", "CUCHILLO", "SARTEN", "OLLA", "HORNO",
    "HELADERA", "LAVARROPAS", "ASPIRADORA", "ESCOBA", "TRAPO",
    "ALMOHADA", "COLCHON", "SABANA", "MANTA", "CORTINA",
    "ESPEJO", "ARMARIO", "CAJON", "ESTANTE", "ESCRITORIO",
    "SILLON", "SILLA", "MESA", "LAMPARA", "RELOJ",
    "LLAVE", "CANDADO", "PARAGUAS", "BILLETERA", "MONEDA",
    "BILLETE", "ANTEOJOS", "SOMBRERO", "BUFANDA", "GUANTE",

    // Profesiones y actividades
    "MEDICO", "ENFERMERO", "MAESTRO", "DOCENTE", "INGENIERO",
    "ARQUITECTO", "ELECTRICISTA", "MECANICO", "BOMBERO", "POLICIA",
    "ABOGADO", "JUEZ", "PERIODISTA", "FOTOGRAFO", "COCINERO",
    "PANADERO", "CARNICERO", "PILOTO", "MARINERO", "ASTRONAUTA",
    "CIENTIFICO", "PROGRAMADOR", "DISEÑADOR", "CARPINTERO", "PLOMERO",
    "SOLDADOR", "PINTOR", "JARDINERO", "VETERINARIO", "DENTISTA",
    "PELUQUERO", "ACTOR", "MUSICO", "ESCRITOR", "DEPORTISTA",
    "CONTADOR", "ELECTROMECANICO", "REPARTIDOR", "CAMIONERO", "AGRICULTOR",

    // Transporte
    "BICICLETA", "MOTOCICLETA", "AUTOMOVIL", "CAMIONETA", "CAMION",
    "COLECTIVO", "TREN", "SUBTERRANEO", "TRANVIA", "AVION",
    "HELICOPTERO", "BARCO", "VELERO", "LANCHA", "SUBMARINO",
    "TRACTOR", "AMBULANCIA", "PATRULLERO", "TAXI", "REMIS",
    "MONOPATIN", "PATINETA", "TRINEO", "COHETE", "GLOBO",

    // Cultura general y palabras variadas
    "AMISTAD", "AVENTURA", "MISTERIO", "SECRETO", "TESORO",
    "CASTILLO", "DRAGON", "CABALLERO", "PRINCESA", "GUERRERO",
    "PIRATA", "FANTASMA", "VAMPIRO", "ZOMBI", "HECHICERO",
    "MAGIA", "HECHIZO", "LEYENDA", "MITOLOGIA", "HISTORIA",
    "PLANIFICACION", "PROGRAMACION", "CREATIVIDAD", "IMAGINACION", "INTELIGENCIA",
    "MEMORIA", "CONCENTRACION", "PACiencia", "VALENTIA", "RESPETO",
    "LIBERTAD", "JUSTICIA", "ESPERANZA", "ALEGRIA", "SORPRESA",
    "FELICIDAD", "CURIOSIDAD", "DESCUBRIMIENTO", "EXPERIMENTO", "INVENTO",
    "LABERINTO", "ROMPECABEZAS", "ACERTIJO", "ENIGMA", "DESAFIO"
];

const fechaHoy = obtenerFechaHoy();

let historialPalabras = JSON.parse(
    localStorage.getItem("historialPalabras") || "[]"
);

// Conservar únicamente el historial de los últimos 365 días.
const fechaLimite = new Date();
fechaLimite.setDate(fechaLimite.getDate() - 365);

historialPalabras = historialPalabras.filter(function(registro) {
    return new Date(registro.fecha + "T12:00:00") >= fechaLimite;
});

let fechaPartida = localStorage.getItem("fechaPartida");
let jugadoHoy = localStorage.getItem("jugadoHoy") === "true";

if (fechaPartida !== fechaHoy) {
    jugadoHoy = false;

    localStorage.setItem("jugadoHoy", "false");
    localStorage.removeItem("letrasUsadas");
    localStorage.removeItem("intentos");
    localStorage.removeItem("resultadoHoy");
}

let palabraSecreta;

if (
    fechaPartida === fechaHoy &&
    localStorage.getItem("palabraDelDia")
) {
    // Si ya existe una palabra para hoy, mantenerla.
    palabraSecreta = localStorage.getItem("palabraDelDia");

} else {
    // Elegir solamente palabras que no aparezcan en el historial.
    const palabrasDisponibles = palabras.filter(function(palabra) {
        return !historialPalabras.some(function(registro) {
            return registro.palabra === palabra;
        });
    });

    if (palabrasDisponibles.length === 0) {
        alert(
            "No quedan palabras disponibles. Hay que agregar más palabras a la lista."
        );
        throw new Error("No quedan palabras nuevas disponibles.");
    }

    const indiceAleatorio = Math.floor(
        Math.random() * palabrasDisponibles.length
    );

    palabraSecreta = palabrasDisponibles[indiceAleatorio];

    historialPalabras.push({
        fecha: fechaHoy,
        palabra: palabraSecreta
    });

    localStorage.setItem(
        "historialPalabras",
        JSON.stringify(historialPalabras)
    );

    localStorage.setItem("palabraDelDia", palabraSecreta);
    localStorage.setItem("fechaPartida", fechaHoy);
}

localStorage.setItem("historialPalabras", JSON.stringify(historialPalabras));

console.log("La palabra secreta es:", palabraSecreta);

// Asegurar que la palabra de hoy esté registrada
const yaRegistrada = historialPalabras.some(function(registro) {
    return registro.fecha === fechaHoy &&
           registro.palabra === palabraSecreta;
});

if (palabraSecreta && !yaRegistrada) {
    historialPalabras.push({
        fecha: fechaHoy,
        palabra: palabraSecreta
    });

    localStorage.setItem(
        "historialPalabras",
        JSON.stringify(historialPalabras)
    );
}


let letrasUsadas = JSON.parse(
    localStorage.getItem("letrasUsadas") || "[]"
);

let juegoTerminado = jugadoHoy;

let intentos = Number(localStorage.getItem("intentos")) || 6;

if (!jugadoHoy) {
    intentos = 6;
}

let racha = Number(localStorage.getItem("racha")) || 0;
let mejorRacha = Number(localStorage.getItem("mejorRacha")) || 0;

const palabraElemento = document.getElementById("palabra-oculta");
const contadorIntentos = document.getElementById("contador-intentos");
const mensajeJuego = document.getElementById("mensaje-juego");
const cuerda = document.getElementById("cuerda");
const cabeza = document.getElementById("cabeza");
const cuerpo = document.getElementById("cuerpo");
const brazoIzquierdo = document.getElementById("brazo-izquierdo");
const brazoDerecho = document.getElementById("brazo-derecho");
const piernaIzquierda = document.getElementById("pierna-izquierda");
const piernaDerecha = document.getElementById("pierna-derecha");
const rachaElemento = document.getElementById("racha");
const corazones = document.querySelectorAll(".corazon");
if (intentos <= 5) {
    cuerda.style.display = "block";
}

if (intentos <= 4) {
    cabeza.style.display = "block";
}

if (intentos <= 3) {
    cuerpo.style.display = "block";
}

if (intentos <= 2) {
    brazoIzquierdo.style.display = "block";
    brazoDerecho.style.display = "block";
}

if (intentos <= 1) {
    piernaIzquierda.style.display = "block";
    piernaDerecha.style.display = "block";
}
const mejorRachaElemento = document.getElementById("mejor-racha");

rachaElemento.textContent = racha;
mejorRachaElemento.textContent = mejorRacha;

const botones = document.querySelectorAll(".letra");
function actualizarTeclado() {

    botones.forEach(function(boton) {

        const letra = boton.textContent;

        if (letrasUsadas.includes(letra)) {

            boton.classList.add("usada");
            boton.innerHTML = "❌";

        }

    });

}

function bloquearTeclado() {

    botones.forEach(function(boton) {
        boton.disabled = true;
    });

}

contadorIntentos.textContent = intentos;

if (jugadoHoy) {

    botones.forEach(function(boton) {
        boton.disabled = true;
    });

    const resultadoGuardado = localStorage.getItem("resultadoHoy");

    if (resultadoGuardado) {
        mensajeJuego.textContent = resultadoGuardado;
    }

    alert("⏰ Ya jugaste hoy. Volvé mañana.");
}


function mostrarPalabra() {

    let palabraMostrada = "";

    for (let letra of palabraSecreta) {

        if (letrasUsadas.includes(letra)) {

            palabraMostrada += letra + " ";

        } else {

            palabraMostrada += "_ ";

        }
    }

    palabraElemento.textContent = palabraMostrada;
}


mostrarPalabra();
actualizarTeclado();

function comprobarVictoria() {

    for (let letra of palabraSecreta) {

        if (!letrasUsadas.includes(letra)) {
            return false;
        }

    }

    return true;
}


botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        if (juegoTerminado) {
    return;
}

        let letra = boton.textContent;
        
        if (letrasUsadas.includes(letra)) {
    return;
}

        letrasUsadas.push(letra);

        localStorage.setItem("letrasUsadas", JSON.stringify(letrasUsadas));
        boton.classList.add("usada");
boton.innerHTML = "❌";

        if (!palabraSecreta.includes(letra)) {

            intentos = intentos - 1;
const corazonRoto = corazones[5 - intentos];

if (corazonRoto) {
    corazonRoto.classList.add("roto");
}



            localStorage.setItem("intentos", intentos);

            contadorIntentos.textContent = intentos;

            cuerda.style.display = "block";

            if (intentos === 4) {
            cabeza.style.display = "block";}
           
            if (intentos === 3) {
    cuerpo.style.display = "block";}

    if (intentos === 2) {
    brazoIzquierdo.style.display = "block";
    brazoDerecho.style.display = "block";}

    if (intentos === 1) {
    piernaIzquierda.style.display = "block";
    piernaDerecha.style.display = "block";
}


           if (intentos === 0) {

    racha = 0;

    localStorage.setItem("racha", racha);

    rachaElemento.textContent = racha;

    jugadoHoy = true;
    juegoTerminado = true;

    bloquearTeclado();

localStorage.setItem("jugadoHoy", "true");

mensajeJuego.textContent = "💀 ¡Perdiste! La palabra era: " + palabraSecreta + ". Volvé mañana.";

    alert("💀 ¡Perdiste! La palabra era: " + palabraSecreta);
}

        }

        mostrarPalabra();

        if (comprobarVictoria()) {

    racha = racha + 1;

    if (racha > mejorRacha) {
        mejorRacha = racha;
    }

    localStorage.setItem("racha", racha);
    localStorage.setItem("mejorRacha", mejorRacha);
    guardarRachaRanking();

    rachaElemento.textContent = racha;
    mejorRachaElemento.textContent = mejorRacha;

    jugadoHoy = true;
    juegoTerminado = true;

    bloquearTeclado();

localStorage.setItem("jugadoHoy", "true");

 mensajeJuego.textContent = "🎉 ¡Ganaste! Volvé mañana.";
 localStorage.setItem(
    "resultadoHoy",
    "🎉 ¡Ganaste! Volvé mañana."
);

    alert("🎉 ¡Ganaste!");
}

    });

});

setInterval(function() {

    const nuevaFecha = obtenerFechaHoy();

    if (nuevaFecha !== fechaHoy) {

        location.reload();

    }

}, 1000);
document.addEventListener("keydown", function(event) {

    const letra = event.key.toUpperCase();

    if (!/^[A-ZÑ]$/.test(letra)) {
        return;
    }

    const boton = Array.from(botones).find(function(boton) {
        return boton.textContent === letra;
    });

    if (boton) {
        boton.click();
    }

});


const botonDonar = document.getElementById("boton-donar");

botonDonar.addEventListener("click", function() {

    window.open(
        "https://link.mercadopago.com.ar/fasoestelar",
        "_blank"
    );

});
const aliasDonacion = document.getElementById("alias");

aliasDonacion.addEventListener("click", function() {

    navigator.clipboard.writeText(aliasDonacion.textContent);

    const mensajeAnterior = aliasDonacion.parentElement.querySelector(".mensaje-copia");

    if (mensajeAnterior) {
        mensajeAnterior.remove();
    }

    const mensajeCopia = document.createElement("p");

    mensajeCopia.textContent = "✅ Alias copiado correctamente";

    mensajeCopia.classList.add("mensaje-copia");

    aliasDonacion.parentElement.appendChild(mensajeCopia);

    setTimeout(function() {
        mensajeCopia.remove();
    }, 2500);

});
const nombreJugador = document.getElementById("nombre-jugador");
const guardarNombre = document.getElementById("guardar-nombre");
const formularioJugador = document.getElementById("formulario-jugador");
const jugadorActual = document.getElementById("jugador-actual");

let jugador = localStorage.getItem("jugador");

// =========================
// SINCRONIZAR JUGADOR CON CUENTA
// =========================

function sincronizarJugadorConCuenta() {

    fetch("estado_sesion.php")

        .then(function(respuesta) {
            return respuesta.json();
        })

        .then(function(datos) {

            if (datos.logueado) {

                jugador = datos.usuario;

                localStorage.setItem(
                    "jugador",
                    jugador
                );

                mostrarJugador();

            }

        })

        .catch(function(error) {

            console.error(
                "Error al sincronizar jugador:",
                error
            );

        });

}

sincronizarJugadorConCuenta();


function mostrarJugador() {

    if (jugador) {

        formularioJugador.style.display = "none";

        jugadorActual.textContent =
            "🎮 Jugando como " + jugador;

    }

}

mostrarJugador();

guardarNombre.addEventListener("click", function() {

    const nombre = nombreJugador.value.trim();

    if (nombre === "") {

        alert("⚠️ Escribí un nombre para continuar.");

        return;
    }

    jugador = nombre;

    localStorage.setItem("jugador", jugador);

    mostrarJugador();

});
// =========================
// RANKING GLOBAL
// =========================

const listaRanking = document.getElementById("lista-ranking");

function cargarRanking() {

    fetch("obtener_ranking.php")

        .then(function(respuesta) {
            return respuesta.json();
        })

        .then(function(ranking) {

            listaRanking.innerHTML = "";

            ranking.forEach(function(jugador, indice) {

                const fila = document.createElement("div");

                fila.classList.add("jugador-ranking");

                let posicion = "";

                if (indice === 0) {
                    posicion = "🥇";
                } else if (indice === 1) {
                    posicion = "🥈";
                } else if (indice === 2) {
                    posicion = "🥉";
                } else {
                    posicion = (indice + 1) + "°";
                }

                fila.innerHTML = `
                    <span class="posicion-ranking">${posicion}</span>
                    <span class="nombre-ranking">${jugador.jugador}</span>
                    <span class="racha-ranking">🔥 ${jugador.racha}</span>
                `;

                listaRanking.appendChild(fila);

            });

        })

        .catch(function(error) {

            console.error("Error al cargar ranking:", error);

            listaRanking.innerHTML =
                "<p>No se pudo cargar el ranking.</p>";

        });

}

cargarRanking();


// =========================
// GUARDAR RACHA EN RANKING
// =========================

function guardarRachaRanking() {

    if (!jugador) {
        return;
    }

    fetch("guardar_ranking.php", {

        method: "POST",

        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },

        body:
            "jugador=" + encodeURIComponent(jugador) +
            "&racha=" + encodeURIComponent(racha)

    })

    .then(function(respuesta) {
        return respuesta.text();
    })

    .then(function(resultado) {

        console.log("Ranking guardado:", resultado);

        cargarRanking();

    })

    .catch(function(error) {

        console.error("Error al guardar ranking:", error);

    });

}
// =========================
// MENÚ DE CUENTA
// =========================

const botonCuenta =
    document.getElementById("boton-cuenta");

const menuCuenta =
    document.getElementById("menu-cuenta");

const botonLogin =
    document.getElementById("boton-login");

const botonRegistro =
    document.getElementById("boton-registro");

const botonMiCuenta =
    document.getElementById("boton-mi-cuenta");

const botonCerrarSesion =
    document.getElementById("boton-cerrar-sesion");

const panelAcceso =
    document.getElementById("panel-acceso");

const cerrarAcceso =
    document.getElementById("cerrar-acceso");

const formularioLogin =
    document.getElementById("formulario-login");

const formularioRegistro =
    document.getElementById("formulario-registro");


// =========================
// ABRIR Y CERRAR MENÚ
// =========================

botonCuenta.addEventListener("click", function() {

    if (menuCuenta.style.display === "none") {

        menuCuenta.style.display = "flex";

    } else {

        menuCuenta.style.display = "none";

    }

});


// =========================
// ABRIR LOGIN
// =========================

botonLogin.addEventListener("click", function() {

    panelAcceso.style.display = "flex";

    formularioLogin.style.display = "flex";

    formularioRegistro.style.display = "none";

    menuCuenta.style.display = "none";

});


// =========================
// ABRIR REGISTRO
// =========================

botonRegistro.addEventListener("click", function() {

    panelAcceso.style.display = "flex";

    formularioLogin.style.display = "none";

    formularioRegistro.style.display = "flex";

    menuCuenta.style.display = "none";

});


// =========================
// CERRAR PANEL
// =========================

cerrarAcceso.addEventListener("click", function() {

    panelAcceso.style.display = "none";

});


// =========================
// CERRAR SESIÓN
// =========================

botonCerrarSesion.addEventListener("click", function() {

    fetch("cerrar_sesion.php")

        .then(function(respuesta) {
            return respuesta.text();
        })

        
.then(function(resultado) {

    console.log(resultado);

    // Eliminar el jugador guardado localmente
    localStorage.removeItem("jugador");

    menuCuenta.style.display = "none";

    location.reload();

})

        .catch(function(error) {

            console.error(
                "Error al cerrar sesión:",
                error
            );

        });

});





const enviarLogin = document.getElementById("enviar-login");

const loginIdentificador =
    document.getElementById("login-identificador");

const loginPassword =
    document.getElementById("login-password");

const mensajeLogin =
    document.getElementById("mensaje-login");


enviarLogin.addEventListener("click", function() {

    const identificador = loginIdentificador.value.trim();
    const password = loginPassword.value;

    // Comprobar campos vacíos

    if (identificador === "" || password === "") {

        mensajeLogin.textContent =
            "⚠️ Completá todos los campos.";

        return;
    }


    // Crear datos para enviar a PHP

    const datos = new URLSearchParams();

    datos.append("identificador", identificador);
    datos.append("password", password);


    // Enviar datos a login.php

    fetch("login.php", {

        method: "POST",

        headers: {
            "Content-Type":
                "application/x-www-form-urlencoded"
        },

        body: datos.toString()

    })

    .then(function(respuesta) {

        return respuesta.text();

    })

    .then(function(resultado) {

        mensajeLogin.textContent = resultado;

    })

    .catch(function(error) {

        console.error(
            "Error al iniciar sesión:",
            error
        );

        mensajeLogin.textContent =
            "❌ No se pudo iniciar sesión.";

    });

});

function comprobarSesion() {

    fetch("estado_sesion.php")

        .then(function(respuesta) {
            return respuesta.json();
        })

        .then(function(datos) {

            if (datos.logueado) {

                botonCuenta.textContent =
                    "👤 " + datos.usuario;

            } else {

                botonCuenta.textContent =
                    "👤 Cuenta";

            }

        })

        .catch(function(error) {

            console.error(
                "Error al comprobar sesión:",
                error
            );

        });

}
// =========================
// COMPROBAR SESIÓN
// =========================

const opcionesVisitante =
    document.getElementById("opciones-visitante");

const opcionesUsuario =
    document.getElementById("opciones-usuario");


function comprobarSesion() {

    fetch("estado_sesion.php")

        .then(function(respuesta) {
            return respuesta.json();
        })

        .then(function(datos) {

            if (datos.logueado) {

                // Usuario conectado

                botonCuenta.textContent =
                    "👤 " + datos.usuario;

                opcionesVisitante.style.display =
                    "none";

                opcionesUsuario.style.display =
                    "flex";

            } else {

                // Usuario desconectado

                botonCuenta.textContent =
                    "👤 Cuenta";

                opcionesVisitante.style.display =
                    "flex";

                opcionesUsuario.style.display =
                    "none";
            }

        })

        .catch(function(error) {

            console.error(
                "Error al comprobar sesión:",
                error
            );

        });

}

comprobarSesion();
// =========================
// REGISTRAR CUENTA
// =========================

const enviarRegistro =
    document.getElementById("enviar-registro");

const registroUsuario =
    document.getElementById("registro-usuario");

const registroEmail =
    document.getElementById("registro-email");

const registroPassword =
    document.getElementById("registro-password");

const mensajeRegistro =
    document.getElementById("mensaje-registro");


enviarRegistro.addEventListener("click", function() {

    const usuario = registroUsuario.value.trim();
    const email = registroEmail.value.trim();
    const password = registroPassword.value;


    // =========================
    // COMPROBAR CAMPOS
    // =========================

    if (
        usuario === "" ||
        email === "" ||
        password === ""
    ) {

        mensajeRegistro.textContent =
            "⚠️ Completá todos los campos.";

        return;
    }


    // =========================
    // PREPARAR DATOS
    // =========================

    const datos = new URLSearchParams();

    datos.append("usuario", usuario);
    datos.append("email", email);
    datos.append("password", password);


    // =========================
    // ENVIAR A PHP
    // =========================

    fetch("registrar.php", {

        method: "POST",

        headers: {
            "Content-Type":
                "application/x-www-form-urlencoded"
        },

        body: datos.toString()

    })

    .then(function(respuesta) {
        return respuesta.text();
    })

    .then(function(resultado) {

        mensajeRegistro.textContent = resultado;

        console.log(
            "Resultado del registro:",
            resultado
        );


        // Si la cuenta se creó correctamente
        if (
            resultado.includes(
                "CUENTA CREADA CORRECTAMENTE"
            )
        ) {

            registroUsuario.value = "";
            registroEmail.value = "";
            registroPassword.value = "";

        }

    })

    .catch(function(error) {

        console.error(
            "Error al registrar:",
            error
        );

        mensajeRegistro.textContent =
            "❌ No se pudo crear la cuenta.";

    });

});













