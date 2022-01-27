/* window.onscroll = function() {scrollFunction()};
let animacion = this.document.getElementById('#animado');

function scrollFunction() {

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    animacion.style.animation = 'move 3s ease-out';


  } else {
    animacion.style.animation = 'rotate 3s ease-out';
  }
} */
/* 
window.addEventListener('scroll', function(){
    let animacion = this.document.getElementById('animado');
    let posicion = animacion.getBoundingClientRect().top;
    console.log(posicion);
    let tamañoDePantalla = window.innerHeight/10;

    if(posicion < tamañoDePantalla){
        animacion.style.animation = 'move 1s ease-out'
    }
}) */

console.clear();

var textPath = document.querySelector('#text-path');

var textContainer = document.querySelector('#text-container');

var path = document.querySelector( textPath.getAttribute('href') );

var pathLength = path.getTotalLength();
console.log(pathLength);

function updateTextPathOffset(offset){
  textPath.setAttribute('startOffset', offset); 
}

updateTextPathOffset(pathLength);

function onScroll(){
  requestAnimationFrame(function(){
    var rect = textContainer.getBoundingClientRect();
    var scrollPercent = rect.y / window.innerHeight;
    console.log(scrollPercent);
    updateTextPathOffset( scrollPercent * 2 * pathLength );
  });
}

window.addEventListener('scroll',onScroll);