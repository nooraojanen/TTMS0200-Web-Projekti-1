/*function showApina(){
    $("#apina").animate({
                left: '150px',
                bottom: '50px',
                
        }, 2000, apinaPuhuu);
}
   

var audio = new Audio("tittidii.mp3");
$("#nappi").mousedown(function(){
                      audio.play();
                      });
                      
                      
                      google -> javascript audio w3schools
                      */
/*var puhe = new Audio("tittidii.mp3");
function apinaPuhuu(){
    puhe.play();
}

var jippii = new Audio("tittidii.mp3");
function playJippii(){
    jippii.play();
}

var pyydaBanaani = new Audio("tittidii.mp3");
function playBanaani(){
    pyydaBanaani.play();
}

var pyydaMeloni = new Audio("tittidii.mp3");
function playMeloni(){
    pyydaMeloni.play();
}

var pyydaAppelsiini = new Audio("tittidii.mp3");
function playAppelsiini(){
    pyydaAppelsiini.play();
}

var pyydaPaaryna = new Audio("tittidii.mp3");
function playPaaryna(){
    pyydaPaaryna.play();
}

var pyydaSitruuna = new Audio("tittidii.mp3");
function playSitruuna(){
    pyydaSitruuna.play();
}

var pyydaKiwi = new Audio("tittidii.mp3");
function playKiwi(){
    pyydaKiwi.play();
}

var pyydaRypale = new Audio("tittidii.mp3");
function playRypale(){
    pyydaRypale.play();
}

var pyydaOmena = new Audio("tittidii.mp3");
function playOmena(){
    pyydaOmena.play();
}

var ohNo = new Audio("tittidii.mp3");
function playohNo(){
    ohNo.play();
}
*/

function piilotaKori(){
    $("#hedelmaKori").css("visibility", "hidden");
}

function naytaKori(){
    $("#hedelmaKori").css("visibility", "visible");
}

function showIrto(){
    $("#irto").removeClass("hide");
    $("#irto").addClass("show");
    //$("#irto").css("visibility", "visible");
}

function hideIrto(){
    $("#irto").removeClass("show");
    $("#irto").addClass("hide");
}

$(document).ready(function(){
    
    $("#hedelmaKori").addClass("kasva");
  
    
    $("#hedelmaKori").animate({
                left: '350px',
                top: '170px',
            }, 4000, piilotaKori);

    setTimeout(showIrto, 4050); //viiveellä näytetään irtohedelmät
    
    function(){
        $("#banaani").animate({
                left: '180px',
                bottom: '120px',
                
        }, 2000);
        
        
        $("#meloni").animate({
                left: '50px',
                bottom: '150px',
                
        }, 2000);
        
        
        $("#appelsiini").animate({
                right: '200px',
                bottom: '150px',
                
        }, 2000);
        $("#paaryna").animate({
                right: '110px',
                bottom: '150px',
                
        }, 2000);
        $("#sitruuna").animate({
                right: '150px',
                bottom: '150px',
                
        }, 2000);
        $("#kiwi").animate({
                right: '170px',
                bottom: '100px',
                
        }, 2000);
        $("#rypale").animate({
                left: '100px',
                bottom: '170px',
                
        }, 2000);
        
        $("#omena").animate({
                left: '150px',
                bottom: '50px',
                
        }, 2000, /*showApina*/);
        
        
    });
    

    
    $(".draggable").draggable({stack:".draggable"});
    
    $(".draggable").hover(function(){
        $(this).addClass("hover");
    });
    
    $(".draggable").mouseleave(function(){
        $(this).removeClass("hover");
    });
    
    
    $("#kori").droppable({
        //accept: "#banaani",
        drop: function(event, ui){
            
            console.log($(ui.draggable)); //=> "banaani"
            
            if(hedelma[vuorossa]===$(ui.draggable).id){
                $(ui.draggable).addClass($(ui.draggable).id);
                playJippii();
                vuorossa++;
            }else{
                //playohNo();
            }
            
        }
        
    });
    
 });

$("#infobutton").click(function(event){
    puhe.play();
});

var hedelma = ["banaani", "meloni", "appelsiini", "paaryna", "sitruuna", "kiwi", "rypale", "omena", 9];

var vuorossa = 0;

function hedelmaKori(event, ui){
    event.target.src = 'grafiikka/hedelmakori.png'
};

function tyhjaKori(event, ui){
    event.target.src = 'grafiikka/kori.png'
};



function removeElement(){
    $this.remove();
    vuorossa++;
    if(vuorossa == 9){
        naytaKori();
        playJippii();
    }
}
}); 