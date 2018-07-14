$(document).ready(function(){
    $("#main").click(function(){
        $("#main").animate({height:'800px',width:'800px'}); /* augmentation de la hauteur et largeur */
        $("#icon").fadeOut();
        $("#menu ul").delay(300).animate({opacity:"1"});
        $("#menu ul").css("visibility","visible");
        $("#menu_circle_layer").animate({height:'850px',width:'850px'});
    });
});