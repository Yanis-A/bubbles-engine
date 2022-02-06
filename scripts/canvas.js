export const canvas = document.createElement('canvas'); //crée une balise <canvas>
export const context = canvas.getContext('2d'); // récupère le contexte de dessin, qui permettra de dessiner sur le canvas

//Changement des dimensons en pixels du canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.backgroundColor = 'skyblue';

//Ajout du <canvas> au DOM
document.body.appendChild(canvas);
