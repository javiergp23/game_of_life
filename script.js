//Variables iniciales
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

//variables de jugador
function inicializar() {
    //inicializar canvas
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    //ajustamos el tamaño del canvas
    canvas.width = canvasX;
    canvas.height = canvasY;

    //inicializamos el tablero 
    tileX = canvasX / filas;
    tileY = canvasY / columnas;
    console.log('X: ' + tileX);
}