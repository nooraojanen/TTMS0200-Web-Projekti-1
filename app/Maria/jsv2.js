var hedelmat = ["banaani", "meloni", "appelsiini", "paaryna", "sitruuna", "kiwi", "rypale", "omena"];

var vuorossa = 0;

$(document).ready(function(){
    
        $("#hedelmaKori").addClass("kasva").animate({left: '350px',top: '400px'}, 4000, piilotaKori);
});

function piilotaKori(){
    $("#hedelmaKori").css("visibility", "hidden");
    showIrto();
    siirraHedelmat();
    
}

function showIrto() {
    $("#irto").removeClass("hide");
    $("#irto").addClass("show");
}

function siirraHedelmat() {
    var left = $("header").position().left;
    var top = $("header").position().top;
    console.log(left);
    console.log(top);
    wowApina();
    $("#banaani").animate({left: Math.random()*1050+left, top:Math.random()*650+top}, 2000);
    $("#meloni").animate({left: Math.random()*1000+left, top:Math.random()*650+top}, 2000);
    $("#appelsiini").animate({left: Math.random()*1050+left, top:Math.random()*650+top}, 2000);
    $("#paaryna").animate({left: Math.random()*1050+left, top:Math.random()*650+top}, 2000);
    $("#sitruuna").animate({left: Math.random()*1050+left, top:Math.random()*650+top}, 2000);
    $("#kiwi").animate({left: Math.random()*1050+left, top:Math.random()*650+top}, 2000);
    $("#rypale").animate({left: Math.random()*1050+left, top:Math.random()*650+top}, 2000);
    $("#omena").animate({left: Math.random()*1050+left, top:Math.random()*650+top}, 2000, aloita);
}

function aloita() {
    $(".draggable").draggable({stack:".draggable"});
    
    setTimeout(annaVihje, 8000);
    
}

function annaVihje(){
    console.log("Siirrä " + hedelmat[vuorossa] + " koriin!"); 
    var aani = new Audio("audio/" + hedelmat[vuorossa]+".mp3");
    aani.play();
}

var oikein = new Audio("audio/oikein.mp3");
var vaarin = new Audio("audio/vaarin.mp3");

$("#kori").droppable({
    drop: function(event, ui){
        if(hedelmat[vuorossa]===$(ui.draggable)[0].id){
            oikein.play();
            stars();
            $(ui.draggable).fadeTo("slow",0.0,function removeElement(){
    $(this).remove();

    } );
            console.log(hedelmat[vuorossa]+" pudotettu koriin!");
            $(ui.draggable).draggable({disabled: true});
            vuorossa++;
            if (vuorossa >= hedelmat.length) {
                peliLoppu();
                setTimeout(loppuApina, 601);
            } else {
                annaVihje();
            }
        } else{
            console.log($(ui.draggable)[0].id + " ei ole nyt vuorossa."); 
            vaarin.play();
            annaVihje();
        }
    }
});


var loppuAani = new Audio("audio/peliLoppu.mp3");

function resultBox(){
    $("#content").load("result.html"); 
}

function peliLoppu() {
    loppuAani.play();
    console.log("Peli loppu!");
    $("#irto").removeClass("show");
    $("#irto").addClass("hide");
    $("#hedelmaKori").css("visibility", "visible");
    setTimeout(resultBox, 3000);

}

$(".draggable").hover(function(){
        $(this).addClass("hover");
    });
    
$(".draggable").mouseleave(function(){
        $(this).removeClass("hover");
    });

var info = new Audio("audio/info.mp3");
$("#infoButton").click(function(){
    console.log("soita info");
    info.play();
});
    
$("#stopButton").click(function(){
    window.open("../Noora/AimonKeittiö.html","_self");
    });

       
function naytaKori(){
    $("#hedelmaKori").css("visibility", "visible");
    }


function apinaPuhuu(){
    info.play();
}

function wowApina(){
    $("#apina1").addClass("hide");
    $("#apina2").removeClass("hide");
    setTimeout(apinaPuhuu, 1000);
}

function loppuApina(){
    $("#apina2").addClass("hide");
    $("#apina3").removeClass("hide");
    $("#apina3").addClass("show");
}

function stars() {
    loppuApina();
    setTimeout(hideStars, 600);
    
}

function hideStars(){
    $("#apina3").addClass("hide");
    $("#apina2").removeClass("hide");
}
   