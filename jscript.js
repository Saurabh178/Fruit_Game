$(function(){
    var playing = false;
    var score;
    var rem;
    var fruit = ['apple','banana','cherries','grapes','mango','orange','peach','pear','watermelon'];
    var step;
    var action;
    
    $("#start").click(function(){
        if(playing == true){
            location.reload();
        }
        else{
            playing = true;
            score = 0;
            $("#scorevalue").text(score);
            rem = 3;
            $("#lifeleft").show();
            hearts();
            $("#gameover").hide();
            $("#start").text("Reset Game");
            startAction();
        }
    });
    
    $("#fruit1").mouseover(function(){
        score++;
        $("#scorevalue").text(score);
        clearInterval(action);
        $("#fruit1").hide("explode",500);
        document.getElementById("sound").play();
        setTimeout(startAction, 500);
        
    });
    
    function hearts(){
        $("#lifeleft").empty();
        for(i=0;i<rem;i++){
            $("#lifeleft").append('<img src="images/heart.png" class="life">');
        }
    }
    
    function startAction(){
        $("#fruit1").show();
        $("#fruit1").attr("src", "images/" + fruit[Math.round(8*Math.random())] + ".png");
        
        $("#fruit1").css({'left' : Math.round(550*Math.random()),'top' : -50});
        
        step = 1 + Math.round(5*Math.random());
        
        action = setInterval(function(){
            $("#fruit1").css('top', $("#fruit1").position().top + step);
            if($("#fruit1").position().top > $("#fruitbox").height()){
                if(rem > 1){
                    $("#fruit1").show();
                $("#fruit1").attr("src", "images/" + fruit[Math.round(8*Math.random())] + ".png");
        
                $("#fruit1").css({'left' : Math.round(550*Math.random()),'top' : -50});
        
                step = 1 + Math.round(5*Math.random());
                    
                rem--;
                hearts();
                }
                else{
                    playing = false;
                    $("#start").text("Start Game");
                    $("#lifeleft").hide();
                    $("#gameover").show();
                    $("#total").text(score);
                    stopAction();
                }
            }
        },10)
    }
    
    function stopAction(){
        clearInterval(action);
        $("#fruit1").hide();
    }
    
});