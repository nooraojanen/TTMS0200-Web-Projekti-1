var correct = 0;
var roskisaani = new Audio("audio/oikein.mp3");
var tadaa = new Audio("audio/tadaa.mp3");
var ohjeet = new Audio("audio/realaudio/roskisohjeet.mp3");
ohjeet.volume = 0.6;


function uniqueId() { 
    var date = new Date();    
    return date.getTime();
};

$(document).ready(function(){
        
       
        $(".roskis").mouseleave(function(event){
            $(this).attr('src','grafiikka/luukkukiinni.png');
        
        });
        
        $(".draggable").draggable({stack:".draggable", revert: "invalid"});

        
        $("#roskis1").droppable({
            accept: "#seka",
            drop: function(event, ui) {
                $(ui.draggable).fadeTo("slow",0.0,removeElement);
            },
            over: function(event, ui) {
                console.log(event.target.src);
                event.target.src = 'grafiikka/luukkuauki.png'
                roskisaani.play();
                //$(this).attr('src','grafiikka/luukkuauki.png');

            },

            out: function(event, ui) {
                event.target.src = 'grafiikka/luukkukiinni.png'
                //$(this).attr('src','grafiikka/luukkukiinni.png');

            }   
        });
    
        $("#roskis2").droppable({
            accept: "#bio,#bio2",
            drop: function(event, ui) {
                $(ui.draggable).fadeTo("slow",0.0,removeElement);
            },
            over: function(event, ui) {
                console.log(event.target.src);
                event.target.src = 'grafiikka/luukkuauki.png'
                roskisaani.play();
                //$(this).attr('src','grafiikka/luukkuauki.png');

            },

            out: function(event, ui) {
                event.target.src = 'grafiikka/luukkukiinni.png'
                //$(this).attr('src','grafiikka/luukkukiinni.png');

            }   
        });
    
        $("#roskis3").droppable({
            accept: "#pahvi,#pahvi2",
            drop: function(event, ui) {
                $(ui.draggable).fadeTo("slow",0.0,removeElement);
            },
            over: function(event, ui) {
                console.log(event.target.src);
                event.target.src = 'grafiikka/luukkuauki.png'
                roskisaani.play();
                //$(this).attr('src','grafiikka/luukkuauki.png');

            },

            out: function(event, ui) {
                event.target.src = 'grafiikka/luukkukiinni.png'
                //$(this).attr('src','grafiikka/luukkukiinni.png');

            }   
        });
        $("#roskis4").droppable({
            accept: "#metal",
            drop: function(event, ui) {
                $(ui.draggable).fadeTo("slow",0.0,removeElement);
            },
            over: function(event, ui) {
                console.log(event.target.src);
                event.target.src = 'grafiikka/luukkuauki.png'
                roskisaani.play();
                //$(this).attr('src','grafiikka/luukkuauki.png');

            },

            out: function(event, ui) {
                event.target.src = 'grafiikka/luukkukiinni.png'
                //$(this).attr('src','grafiikka/luukkukiinni.png');

            }   
        });
   
        
        function removeElement() {
        $(this).remove();
        correct++;
        if (correct == 6) {
            $("#content").load("result.html?uid="+uniqueId());
            tadaa.play();
        }
        }
        
        $("#stopbutton").click(function(e) {
            window.open("../Noora/AimonKeittiö.html","_self");
        });	
        
        $("#infobutton").click(function(e) {
            ohjeet.play();
            $("#content").load("info.html?uid="+uniqueId());
        });	
    
});