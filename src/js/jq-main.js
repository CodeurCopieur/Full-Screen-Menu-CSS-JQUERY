$(document).ready(function(){
    $("#main").click(function(){
        $("#main").animate({height:'50em',width:'50em'}); /* augmentation de la hauteur et largeur */
        $("#icon").fadeOut();
        $("#menu ul").delay(300).animate({opacity:"1"});
        $("#menu ul").css("visibility","visible");
    });
});