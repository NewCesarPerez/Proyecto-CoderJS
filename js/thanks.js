$(document).ready(function () {
    //selecciono los elementos necesarios del dom
$('body').css({background:"#edb026"});
$('body').append(`<h1 class="text-danger" id="h1-thanks"> 
El Puestico Burger </h1>`);

$('#h1-thanks').html('Puestico Burger')
$('#h1-thanks').addClass('text-center my-5 display-4 ');
$('#h1-thanks').append(`<h2 id="h2-thanks"> 
Maracaibo en un Bocado </h2>`);
$('#h1-thanks').css({color:"yellow"});
$('#h2-thanks').css({color:"yellow"});
$('#h2-thanks').append(`<p id="p-thanks"> 
¡Gracias por tu compra! </p>`);
$('#p-thanks').css({color:"red", fontSize:50, margin:100});







})