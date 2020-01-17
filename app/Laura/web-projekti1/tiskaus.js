var isMouseDown = false;
var isMouseDown = false;
var valmiitAstiat = 0;
var harjaapainettu = false;
var harjaus = 0;
var animMaxCount=4;
var animCount=0;

function uniqueId(){
    var date = new Date();
    return date.getTime();

};
$(document).ready(function(){ 
    $("body").on('dragstart', function(event) {
        event.preventDefault();
        if(harjaapainettu) {
            $( document.body ).css({cursor : "none"});
            if(valmiitAstiat == 5) {
                $( document.body ).css({cursor : "default"});
            }
        }
        
        });
    $('#keittiotausta').animate({width : '1900px' , height : '1500px', left : '-550px', top: '-80px'},intropaalla);
    
    $("#taustakuplia").delay(1000).animate({top: '+420px', opacity: 1})
    $('#harja2').delay(1000).animate({opacity : 1});

    $("body").mousedown(function(){
        isMouseDown = true;
    });
    $("body").mouseup(function(){
        isMouseDown = false;
    });
    $("#harja2").click(function(){
        harjaapainettu = true;
        var toinen = new Audio('toinenraita.mp3');
        toinen.play();
        $("#animaatio").css({opacity : 1})
        $('#animaatio').delay(2000).animate({opacity:0})
        $('#harja1').css({opacity : 1});
        $('#harja2').css({opacity : 0}, harja2pois);
        $( document.body ).css({cursor : "none"});
        console.log("hiirtä klikattu")
        $("#lautanen1").animate({top: '+160px', left: '360px'})
        $("#tahra1").animate({top: '+210px', left: '410px'})
        $(document).bind('mousemove', function(e){
            $('#harja1').css({
                
                left:  e.pageX,
                top:   e.pageY,
                });
            
    
           
});
    });
      function intropaalla() {
        console.log('intro soi')
        $("#tekstitp").animate({opacity: 1})
        var introaani = new Audio('intro.mp3');
        introaani.play();
        $("#animaatio").css({opacity : 1})
        $('#animaatio').delay(3200).animate({opacity:0})
        
        
        
    }
    var harja2pois = function() {
        console.log('harjahaipyy')
        $("#harja2").animate({top: '-500px'})
    }
    
    var animaatio = function() {
        console.log("Toimii")
        if (valmiitAstiat == 1 ) {
        opacity = $(".kohde").css("opacity");
        opacity = opacity + 1;
        $(".kohde").css("opacity",opacity);
        console.log($(".kohde").css("opacity"));
        $("#lautanen2").animate({top: '+190px', left: '360px'})
        $("#tahra2").animate({top: '+320px', left: '405px'})
            
            
        }
    
    }
    var animaatio2 = function() {
        console.log("Toimii")
        if (valmiitAstiat == 2 ) {
        opacity = $(".kohde").css("opacity");
        opacity = opacity + 1;
        $(".kohde").css("opacity",opacity);
        console.log($(".kohde").css("opacity"));
        $("#lautanen3").animate({top: '+180px', left: '360px'});
        $("#tahra3").animate({top: '+240px', left: '545px'});
        }
        
    }
    var animaatio3 = function() {
        console.log("Toimii")
        if (valmiitAstiat == 3 ) {
        opacity = $(".kohde").css("opacity");
        opacity = opacity + 1;
        $(".kohde").css("opacity",opacity);
        console.log($(".kohde").css("opacity"));
        $("#lautanen4").animate({top: '+300px', left: '460px'});
        $("#tahra4").animate({top: '+287px', left: '463px'});
        }
        
    }
    var animaatio4 = function() {
        if (valmiitAstiat == 4 ) {
        opacity = $(".kohde").css("opacity");
        opacity = opacity + 1;
        $(".kohde").css("opacity",opacity);
        console.log($(".kohde").css("opacity"));
        $("#lautanen5").animate({top: '+245px', left: '460px'});
        $("#tahra5").animate({top: '+275px', left: '467px'});
                            }
    }
    var valmista = function() {
        $(".kohde").css({opacity: 0})
        $("esine").css({opacity: 0})
        var audio4 = new Audio('loppu.mp3');
        audio4.play();
        $("#content").load("result.html?uid="+uniqueId());
        console.log("valmista")
        $("#animaatio").css({opacity : 1})
        $('#animaatio').delay(2700).animate({opacity:0})
        
    }
    $("#toisto").click(function(){
        if(harjaapainettu) {
            var audio2 = new Audio('toinenraita.mp3');
            audio2.play();
            $("#animaatio").css({opacity : 1})
            $('#animaatio').delay(2000).animate({opacity:0})
        }
        else {
            var audio3 = new Audio('klikkaa.mp3');
            audio3.play();
            $("#animaatio").css({opacity : 1})
            $('#animaatio').delay(1100).animate({opacity:0})
        }
    });
    $('#poistu').css('cursor', 'pointer');
    $('#toisto').css('cursor', 'pointer');
    $("#poistu").click(function(){
        window.open("../../Noora/AimonKeittiö.html","_self")
    });
    $(".kohde").mousemove(function(){
        if (isMouseDown) {
            // opacity 1.0 -> 0.0
        var opacity = $(".kohde").css("opacity");
        opacity = opacity - 0.01;
        $(".kohde").css("opacity",opacity);
        console.log($(".kohde").css("opacity"));
            
            //$(".kohde").fadeOut(3000);
            if (opacity == 0){
            var oikein = new Audio("oikein.mp3");
            oikein.play();    
            $("#lautanen1").animate({top: '-500px'}, animaatio)
            $("#tahra1").animate({top: '-500px'})
                
            valmiitAstiat = valmiitAstiat + 1;
            console.log(valmiitAstiat);
                
                 if (opacity == 0){
                     if (valmiitAstiat == 2) {
                         var oikein = new Audio("oikein.mp3");
                        oikein.play(); 
                    $("#lautanen2").animate({top: '-500px'}, animaatio2);
                    $("#tahra2").animate({top: '-500px'});
                    valmiitAstiat + 1;
                    console.log(valmiitAstiat);
                     }
                            if (opacity == 0){
                                if (valmiitAstiat == 3) {
                                    var oikein = new Audio("oikein.mp3");
                                    oikein.play(); 
                            $("#lautanen3").animate({top: '-500px'}, animaatio3);
                            $("#tahra3").animate({top: '-500px'});
                            valmiitAstiat + 1;
                            console.log(valmiitAstiat);
                                }
                                if (opacity == 0){
                                    if (valmiitAstiat == 4) {
                                        var oikein = new Audio("oikein.mp3");
                                        oikein.play(); 
                                $("#lautanen4").animate({top: '-500px'},animaatio4);
                                $("#tahra4").animate({top: '-500px'});
                                valmiitAstiat + 1;
                                console.log(valmiitAstiat);
                                    }
                                    if (opacity == 0){
                                        if(valmiitAstiat == 5) {
                                            var oikein = new Audio("oikein.mp3");
                                            oikein.play();
                                            var loppu = new Audio("peliLoppu01.mp3");
                                            loppu.play();
                                    $("#lautanen5").animate({top: '-500px'},valmista);
                                    $("#tahra5").animate({top: '-500px'});
                                    valmiitAstiat + 1;
                                    console.log(valmiitAstiat);
                                        }
                 
                                }
                                }
                                }
                            
                            
                            
                            
            }
            }
        }         
    });
    
}); 

