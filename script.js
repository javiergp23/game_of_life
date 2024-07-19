let canvas;
let ctx;
let fps = 30;

let canvasX = 500; //pixels ancho
let canvasY = 500; //pixels alto

let tileX, tileY;

//variables de tablero
let tablero;
let filas = 100;
let columnas = 100;

let blanco = '#ffffff';
let negro = '#000000<s';

function inicializar() {
    canvas = document.getElementById('canvas');
    canvas = canvas.getContext('2d');

    canvas.width = canvasX;
    canvas.height = canvasY;
}