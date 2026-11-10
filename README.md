# JavaScript 92485 - Trabajo Práctico 6

Este proyecto continúa con la lógica desarrollada en las entregas anteriores del curso de JavaScript.

En esta nueva entrega se incorporan conceptos de **funciones de orden superior** aplicados al simulador de entrenamiento que ya se venía desarrollando.

## Objetivo del TP6

El objetivo de esta entrega es trabajar con un **array de objetos** y aplicar distintos métodos de orden superior para buscar, filtrar, transformar y acumular información.


## Simulador de entrenamiento

El simulador permite:

- Ingresar la cantidad de días de entrenamiento semanal.
- Evaluar si la cantidad de días ingresada es adecuada.
- Elegir una rutina de entrenamiento.
- Consultar información de las rutinas disponibles.
- Buscar y filtrar rutinas.
- Calcular valores relacionados con las rutinas.

## Clase Rutina

Se utiliza una clase llamada `Rutina` para representar cada actividad del simulador.

Cada rutina posee las siguientes propiedades:

- Nombre.
- Duración en minutos.
- Calorías estimadas por minuto.
- Nivel de dificultad.

También contiene métodos de instancia:

- `calcularCalorias()`: calcula las calorías estimadas de una sesión.
- `ajustarDuracion()`: modifica la duración de una rutina.

Se crean diferentes objetos utilizando el operador `new`, entre ellos:

- Fuerza y Pesas.
- Cardio HIIT.
- Yoga y Movilidad.

## Funciones de orden superior

En esta entrega se incorporaron los siguientes métodos:

### `filter()`

Se utiliza para filtrar las rutinas según el nivel de dificultad elegido por el usuario.

### `find()`

Se utiliza para buscar una rutina específica dentro del catálogo.

### `map()`

Se utiliza para transformar el array de rutinas y generar una versión resumida con el nombre y la duración de cada actividad.

### `reduce()`

Se utiliza para recorrer todas las rutinas y calcular el total de calorías estimadas del catálogo.

## Conceptos aplicados

Durante el desarrollo se utilizan contenidos trabajados en las entregas anteriores y nuevos conceptos vistos en esta etapa.

