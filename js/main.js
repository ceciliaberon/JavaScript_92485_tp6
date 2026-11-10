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
        this.duracionMinutos += minutosExtra;
    }
}

const rutinaFuerza = new Rutina(
    "Fuerza y Pesas",
    60,
    7,
    "Avanzado"
);

const rutinaCardio = new Rutina(
    "Cardio HIIT",
    45,
    10,
    "Intermedio"
);

const rutinaYoga = new Rutina(
    "Yoga y Movilidad",
    30,
    4,
    "Principiante"
);

const catalogoRutinas = [
    rutinaFuerza,
    rutinaCardio,
    rutinaYoga
];

function pedirDiasEntrenamiento() {
    let dias = parseInt(
        prompt("¿Cuántos días a la semana vas a entrenar? (0 a 7)")
    );

    while (isNaN(dias) || dias < 0 || dias > 7) {
        dias = parseInt(
            prompt("Por favor, ingresá un número válido entre 0 y 7:")
        );
    }

    return dias;
}

function evaluarDias(cantidadDias) {

    if (cantidadDias === 0) {
        return "Esta semana descansás, ¡recuperá energías!";
    } else if (cantidadDias < 3) {
        return "Te recomiendo como mínimo 3 días.";
    } else {
        return "Está perfecto, no olvides hidratarte y comer bien.";
    }
}

function mostrarCatalogo() {

    console.log("CATÁLOGO DE RUTINAS");

    for (const rutina of catalogoRutinas) {
        console.log(
            `${rutina.nombre} - ${rutina.nivelDificultad} - ${rutina.duracionMinutos} minutos`
        );
    }
}

function elegirRutina() {
    let opciones = "Elegí una rutina:\n";
    for (let i = 0; i < catalogoRutinas.length; i++) {
        opciones +=
            `${i + 1} - ${catalogoRutinas[i].nombre} (${catalogoRutinas[i].nivelDificultad})\n`;
    }
    let seleccion = parseInt(prompt(opciones));
    while (
        isNaN(seleccion) ||
        seleccion < 1 ||
        seleccion > catalogoRutinas.length
    ) {
        seleccion = parseInt(
            prompt(
                "Opción inválida. Ingresá nuevamente:\n" +
                opciones
            )
        );
    }

    return catalogoRutinas[seleccion - 1];
}

function filtrarPorNivel() {
    let nivel = prompt(
        "¿Qué nivel querés consultar? Principiante, Intermedio o Avanzado"
    );
    if (!nivel) {
        return [];
    }
    nivel = nivel.toLowerCase();
    const rutinasFiltradas = catalogoRutinas.filter(
        rutina => rutina.nivelDificultad.toLowerCase() === nivel
    );
    return rutinasFiltradas;
}

function buscarRutina() {
    let nombreBuscado = prompt(
        "Ingresá el nombre de la rutina que querés buscar:"
    );
    if (!nombreBuscado) {
        return null;
    }
    nombreBuscado = nombreBuscado.toLowerCase();
    const rutinaEncontrada = catalogoRutinas.find(
    rutina => rutina.nombre.toLowerCase().includes(nombreBuscado)   
    );
    return rutinaEncontrada;
}

function obtenerNombresYDuracion() {
    return catalogoRutinas.map(rutina => {
        return `${rutina.nombre} (${rutina.duracionMinutos} min)`;
    });
}

function calcularCaloriasCatalogo() {
    const totalCalorias = catalogoRutinas.reduce(
        (acumulador, rutina) => {
            return acumulador + rutina.calcularCalorias();
        },
        0
    );
    return totalCalorias;
}

alert("Bienvenida al planificador de entrenamiento");
mostrarCatalogo();
let diasIngresados = pedirDiasEntrenamiento();
let mensaje = evaluarDias(diasIngresados);
alert(mensaje);
console.log(`Resultado del simulador: ${mensaje}`);
if (diasIngresados > 0) {
    const rutinaElegida = elegirRutina();
    console.log("RUTINA ELEGIDA");
    console.log(`Nombre: ${rutinaElegida.nombre}`);
    console.log(
        `Nivel: ${rutinaElegida.nivelDificultad}`
    );
    console.log(
        `Duración: ${rutinaElegida.duracionMinutos} minutos`
    );
    console.log(
        `Calorías estimadas: ${rutinaElegida.calcularCalorias()} kcal`
    );
    const rutinasPorNivel = filtrarPorNivel();
    console.log("RUTINAS FILTRADAS POR NIVEL");
    if (rutinasPorNivel.length > 0) {
        for (const rutina of rutinasPorNivel) {
            console.log(rutina.nombre);
        }
    } else {
        console.log(
            "No se encontraron rutinas de ese nivel."
        );
    }
    const rutinaBuscada = buscarRutina();
    console.log("BÚSQUEDA DE RUTINA");
    if (rutinaBuscada) {
        console.log(
            `Rutina encontrada: ${rutinaBuscada.nombre}`
        );
        console.log(
            `Duración: ${rutinaBuscada.duracionMinutos} minutos`
        );
    } else {
        console.log(
            "No se encontró la rutina."
        );
    }
        const resumenRutinas = obtenerNombresYDuracion();
    console.log("RESUMEN TRANSFORMADO CON MAP");
   for (const rutina of resumenRutinas) {
        console.log(rutina);
    }
    const caloriasTotales = calcularCaloriasCatalogo();
    console.log(
        `Calorías totales de todas las rutinas: ${caloriasTotales} kcal`
    );
 rutinaElegida.ajustarDuracion(10);
    console.log("RUTINA MODIFICADA");
    console.log(
        `Nueva duración: ${rutinaElegida.duracionMinutos} minutos`
    );
    console.log(
        `Nuevas calorías estimadas: ${rutinaElegida.calcularCalorias()} kcal`
    );
} else {
    console.log(
        "No se planificaron entrenamientos esta semana."
    );
}