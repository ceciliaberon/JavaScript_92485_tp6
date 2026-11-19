# JavaScript 92485 - Trabajo Práctico 6

Este proyecto continúa con la lógica desarrollada en las entregas anteriores del curso de JavaScript de Coderhouse.

En esta entrega se incorporan **funciones de orden superior** aplicadas al simulador de entrenamiento, con el objetivo de mejorar la búsqueda, el filtrado y el procesamiento de la información.

## Objetivo del TP6

El objetivo de esta entrega es trabajar con un **array de objetos** y aplicar distintos métodos de orden superior para interactuar con los datos de las rutinas de entrenamiento.

Se busca integrar estos métodos al funcionamiento del simulador, permitiendo que el usuario elija qué operación desea realizar.

## Simulador de entrenamiento

El simulador permite:

- Consultar el catálogo de rutinas disponibles.
- Ingresar la cantidad de días de entrenamiento semanal.
- Evaluar la cantidad de días ingresados.
- Buscar una rutina por nombre.
- Filtrar rutinas según su nivel de dificultad.
- Calcular el total de calorías estimadas del catálogo.
- Modificar la duración de una rutina.

La interacción se realiza mediante `prompt()`, `alert()` y `console.log()`.

El usuario puede seleccionar las distintas opciones desde un menú y repetir las operaciones hasta que decida salir.

## Clase Rutina

Se utiliza una clase llamada `Rutina` para representar cada actividad del simulador.

Cada rutina posee cuatro propiedades:

- `nombre`: nombre de la rutina.
- `duracionMinutos`: duración de la actividad.
- `caloriasPorMinuto`: calorías estimadas por minuto.
- `nivelDificultad`: nivel de dificultad de la rutina.

También contiene dos métodos:

- `calcularCalorias()`: calcula las calorías estimadas de una sesión según su duración.
- `ajustarDuracion()`: permite agregar minutos a la duración de una rutina.

Se crean tres objetos:

- Fuerza y Pesas.
- Cardio HIIT.
- Yoga y Movilidad.

Estos objetos se almacenan en el array `catalogoRutinas`.

## Funciones de orden superior

### `forEach()`
### `find()`
### `filter()`
### `reduce()`

## Menú de opciones

Se implementa un menú con `switch-case` para organizar las acciones disponibles.

Las opciones son:

1. Ver catálogo de rutinas.
2. Planificar días de entrenamiento.
3. Buscar una rutina por nombre.
4. Filtrar rutinas por nivel.
5. Calcular calorías del catálogo.
6. Ajustar duración de una rutina.
0. Salir del simulador.


## Ejecución del proyecto

Para ejecutar el simulador:

1. Seleccionar una opción en el menú que aparece al iniciar.
2. Consultar los resultados en la consola.
3. Ingresar `0` para finalizar.
