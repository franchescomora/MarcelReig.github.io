// Mis escripts

// Estas lineas crean un efecto de scroll suave al pasar de una sección a otra
$(function(){ 
  $('a.scroll[href^="#"]').click(function(e){ 
    var hash = $(this).attr('href'), 
        posicionNueva = $(hash).offset().top; 
    $("body,html,document").animate( 
      {scrollTop:posicionNueva}, 
      'slow', 
      function(){ 
        window.location.hash = hash; 
      } 
    ); 
    e.preventDefault(); 
  });
});
	

// Esto es para crear el efecto parallax scrolling

/*

$(document).ready(function(){

var $window = $(window); //El muy notas del tutorial de tut+ se dejo esta línea!

$('section[data-type="background"]').each(function(){
var $bgobj = $(this); // assigning the object
$(window).scroll(function() {
var yPos = -($window.scrollTop() / $bgobj.data('speed'));
// Put together our final background position
var coords = '50% '+ yPos + 'px';
// Move the background
$bgobj.css({ backgroundPosition: coords });
});
});
});
*/

// Animation css

$('#muevelo').addClass('animated bounceInDown');
