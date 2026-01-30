/*CARRUSEL*/ 
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



/*CARTA*/
function openTab(evt, tabName) {
  var content = document.getElementsByClassName("tab-content");
  for (var i = 0; i < content.length; i++) {
    content[i].classList.remove("active");
  }
  var buttons = document.getElementsByClassName("tab-btn");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}