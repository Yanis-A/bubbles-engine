import { context } from './canvas.js';

export function drawCircle(x,y,r,color,isStroke,lineThickness){
    context.beginPath();

    if (isStroke === false) {
        context.fillStyle = color;
    } else if (isStroke === true) {
        context.strokeStyle = color;
        context.lineWidth= lineThickness;
    }
    
    context.arc(
        x,
        y,
        r,
        0,
        Math.PI *2
    );

    if (isStroke === false) {
        context.fill();
    } else if (isStroke === true) {
        context.stroke();
    }

    context.closePath();
};

export function getRandomNumber(min,max){
    return Math.random() * (max-min) +min;
}