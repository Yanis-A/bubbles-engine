import { canvas, context } from './canvas.js';
import { drawCircle, getRandomNumber} from './functions.js';

const particles = [];
const PARTICLES_COUNT = 50;
const PARTICLES_COLORS = ['dodgerblue','slateblue','cornflowerblue','midnightblue','mediumpurple','darkorchid','indigo']
const shape = [true, false]

for (let i = 0; i < PARTICLES_COUNT; i++) {
    const particle = {
        x : getRandomNumber(0, canvas.width),
        y : getRandomNumber(0, canvas.height),
        size : getRandomNumber(10, 200),
        speed : getRandomNumber(3,7),
        color : PARTICLES_COLORS[i % PARTICLES_COLORS.length],
        direction : getRandomNumber(0, Math.PI *2),
        filling : shape[i % shape.length],
    };
    particles.push(particle);
}

function update(){

    for (let i = 0; i < particles.length; i++) {

        //Déplacement de la particule
        particles[i].x += Math.cos(particles[i].direction) * particles[i].speed;
        particles[i].y += particles[i].speed;

        //Sécurité anti hors champs

        if (particles[i].x - particles[i].size > canvas.width) {
            particles[i].x = - particles[i].size;
        }
        
        if (particles[i].x + particles[i].size < 0) {
            particles[i].x = canvas.width + particles[i].size;
        }
        
        if (particles[i].y - particles[i].size > canvas.height) {
            particles[i].y = - particles[i].size;
        }
        
        if (particles[i].y + particles[i].size < 0) {
            particles[i].y = canvas.height + particles[i].size;
        }
    }
}

function render() {
    
    //Efface le canvas complet
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        drawCircle(
            particles[i].x,
            particles[i].y,
            particles[i].size,
            particles[i].color,
            particles[i].filling,
            getRandomNumber(2,8),
        );
    }
}

function run() {

    update();

    render();

    requestAnimationFrame(run);

}

requestAnimationFrame(run);