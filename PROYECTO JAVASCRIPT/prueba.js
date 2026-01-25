let indiceActual=0;
const textosOfertas=[
    "PIZZA KEBAB 2X1",    
    "OFERTA DUO KEBAB"   
];

function moverSlide(paso) {
    const track=document.querySelector('.carrusel-track');
    const textoElemento=document.getElementById('textochico');
    const totalSlides=2; 

    indiceActual+=paso;

    if (indiceActual>=totalSlides) {
        indiceActual=0;
    } else if (indiceActual<0) {
        indiceActual=totalSlides-1;
    }
    const desplazamiento=indiceActual*50;
    track.style.transform=`translateX(-${desplazamiento}%)`;
    textoElemento.innerText = textosOfertas[indiceActual];
}