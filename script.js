let whats = document.querySelector('a')
let chegando = document.querySelector('.chegando')
let fotoCar = document.querySelector('.foto-car')


const fhotoRotation = [
    './assets/lavagem corsa 2.jpeg',
    './assets/lavagem corsa 3.jpeg',
    './assets/lavagem corsa 4.jpeg',
    './assets/lavagem corsa 5.jpeg',
    './assets/lavagem fox red1.jpeg',
    './assets/lavagem fox red2.jpeg',
    './assets/lavagem fit black.jpeg',
]

let i = 0

function rodarImagen() {
    fotoCar.src = fhotoRotation[i];
    i++;
    if (i >= fhotoRotation.length) {
        i = 0;
    }
}
setInterval(rodarImagen, 3000)


function clicked() {

    whats.style.left = '350px'
    chegando.style.left = '350px'

}


function clickedButtonWhats() {
    console.log();
    whats.style.left = '-350px'
    chegando.style.left = '-350px'


}


