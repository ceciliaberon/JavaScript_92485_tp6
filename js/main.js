class Rutina {
    constructor(nombre, duracionMinutos, caloriasPorMinuto, nivelDificultad) {
        this.nombre = nombre;
        this.duracionMinutos = duracionMinutos;
        this.caloriasPorMinuto = caloriasPorMinuto;
        this.nivelDificultad = nivelDificultad;
    }

    calcularCalorias() {
        return this.duracionMinutos * this.caloriasPorMinuto;
    }

    ajustarDuracion(minutosExtra) {
        this.duracionMinutos = this.duracionMinutos + minutosExtra;
    }
}

const rutinaFuerza = new Rutina("Fuerza y Pesas", 60, 7, "Avanzado");
const rutinaCardio = new Rutina("Cardio HIIT", 45, 10, "Intermedio");
const rutinaYoga = new Rutina("Yoga y Movilidad", 30, 4, "Principiante");
const catalogoRutinas = [rutinaFuerza, rutinaCardio, rutinaYoga];


function mostrarCatalogo() {
    console.log("--- CATALOGO DE RUTINAS ---");
    catalogoRutinas.forEach(function(rutina) {
        console.log(rutina.nombre + " | Nivel: " + rutina.nivelDificultad +
            " | Duracion: " + rutina.duracionMinutos + " minutos");
    });
}

function planificarDias() {
    const ingreso = prompt("¿Cuantos dias a la semana vas a entrenar? (0 a 7)");
    if (ingreso === null || ingreso === "") {
        console.log("No ingresaste una cantidad de dias.");
        return;
    }

    const dias = parseInt(ingreso);
    if (!(dias >= 0 && dias <= 7)) {
        console.log("Ingresa un numero entre 0 y 7.");
    } else if (dias === 0) {
        console.log("Esta semana descansas.");
    } else if (dias < 3) {
        console.log("Vas a entrenar menos de 3 dias esta semana.");
    } else {
        console.log("Planificaste 3 o mas dias de entrenamiento.");
    }
}

function buscarRutina() {
    const nombre = prompt("¿Que rutina buscas? Escribi el nombre completo como aparece en el catalogo.");
    if (nombre === null || nombre === "") {
        console.log("No ingresaste un nombre.");
        return;
    }

    const encontrada = catalogoRutinas.find(function(rutina) {
        return rutina.nombre === nombre;
    });

    if (encontrada === undefined) {
        console.log("No se encontro esa rutina.");
    } else {
        console.log("Rutina: " + encontrada.nombre);
        console.log("Nivel: " + encontrada.nivelDificultad);
        console.log("Duracion: " + encontrada.duracionMinutos + " minutos");
    }
}

function filtrarPorNivel() {
    const nivel = prompt("Escribi un nivel: Principiante, Intermedio o Avanzado");
    if (nivel === null || nivel === "") {
        console.log("No ingresaste un nivel.");
        return;
    }

    const filtradas = catalogoRutinas.filter(function(rutina) {
        return rutina.nivelDificultad === nivel;
    });

    if (filtradas.length === 0) {
        console.log("No se encontraron rutinas de ese nivel.");
    } else {
        console.log("--- RUTINAS DE NIVEL " + nivel + " ---");
        filtradas.forEach(function(rutina) {
            console.log(rutina.nombre + " | " + rutina.duracionMinutos + " minutos");
        });
    }
}


function calcularCaloriasCatalogo() {
    const total = catalogoRutinas.reduce(function(acumulador, rutina) {
        return acumulador + rutina.calcularCalorias();
    }, 0);
    console.log("Calorias estimadas de una sesion de cada rutina: " + total + " kcal");
}

function ajustarRutina() {
    mostrarCatalogo();
    const nombre = prompt("Escribi el nombre completo de la rutina a modificar:");
    if (nombre === null || nombre === "") {
        console.log("No ingresaste una rutina.");
        return;
    }

    const encontrada = catalogoRutinas.find(function(rutina) {
        return rutina.nombre === nombre;
    });

    if (encontrada === undefined) {
        console.log("No se encontro esa rutina.");
        return;
    }

    const ingreso = prompt("¿Cuantos minutos queres agregar? (0 o mas)");
    if (ingreso === null || ingreso === "") {
        console.log("No ingresaste minutos.");
        return;
    }

    const minutos = parseInt(ingreso);
    if (!(minutos >= 0)) {
        console.log("Ingresa una cantidad valida de minutos.");
        return;
    }

    encontrada.ajustarDuracion(minutos);
    console.log("Nueva duracion de " + encontrada.nombre + ": " + encontrada.duracionMinutos + " minutos");
    console.log("Calorias estimadas: " + encontrada.calcularCalorias() + " kcal");
}

alert("Bienvenida al simulador de entrenamiento. Revisa los resultados en la consola (F12).");
let opcion = "";

while (opcion !== "0") {
    opcion = prompt(
        "SIMULADOR DE ENTRENAMIENTO\n" +
        "1 - Ver catalogo de rutinas\n" +
        "2 - Planificar dias de entrenamiento\n" +
        "3 - Buscar una rutina por nombre\n" +
        "4 - Filtrar rutinas por nivel\n" +
        "5 - Calcular calorias del catalogo\n" +
        "6 - Ajustar duracion de una rutina\n" +
        "0 - Salir\n\n" +
        "Elegi una opcion:"
    );

    if (opcion === null) {
        opcion = "0";
    }

    switch (opcion) {
        case "1":
            mostrarCatalogo();
            break;
        case "2":
            planificarDias();
            break;
        case "3":
            buscarRutina();
            break;
        case "4":
            filtrarPorNivel();
            break;
        case "5":
            calcularCaloriasCatalogo();
            break;
        case "6":
            ajustarRutina();
            break;
        case "0":
            alert("Gracias por utilizar el simulador.");
            break;
        default:
            alert("Opcion invalida. Elegi un numero del 0 al 6.");
            break;
    }
}
