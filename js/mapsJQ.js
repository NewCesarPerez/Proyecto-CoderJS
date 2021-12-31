$(document).ready(function () {
    $('#divMaps').append('<button id="btnMaps">Donde ubicarnos</button>');
    $('#btnMaps').addClass('map_btn');
    $('#divMaps').append('<iframe style="display:none" class="mapsFooter mt-5" id="mapFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.581393203758!2d-58.5093201850529!3d-34.589457164250106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb64b69a4ae29%3A0x17fc601c77d1a419!2sAv.%20Gral.%20Mosconi%203286%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1638111996308!5m2!1ses!2sar"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>')
    var frameMaps=$('#mapFrame');
    $('#btnMaps').click(function () { 

        frameMaps.slideToggle("slow");
        
    });







})