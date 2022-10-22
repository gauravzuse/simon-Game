let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern =[];
let userClickedPattern = [];
var level = 0;
var started = false;


$(".btn").click(function(e){

  var userChosenColour = e.target.id;
      userClickedPattern.push(userChosenColour);
      playSound(userChosenColour);

      animatePress(userChosenColour);

      checkAnswer(userClickedPattern.length-1);

});


function checkAnswer(currentLevel){

  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("success");


    if (userClickedPattern.length === gamePattern.length){

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {

    playSound("wrong");

    $("body").addClass("game-over");
    $("h1").html("Game Over, Press Any Key to Restart");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200)


    
    startOver();

  }

  
}



$("body").keypress(function(){



  if(!started){
    
    $("h1").html("Level "+level);
    nextSequence();
    started = true;
  }
    

})




function nextSequence()
{

  userClickedPattern = [];
  level++;
    $("h1").html("Level "+level);

  let randomNumber = Math.floor(Math.random()*4);

  let randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);


      $("#"+randomChosenColour)
          .fadeIn(100)
          .fadeOut(100)
          .fadeIn(100);


    playSound(randomChosenColour);

}

function playSound(name) {


    var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();



}


function animatePress(colorName){



        $("#"+colorName).addClass("pressed");

        setTimeout(function(){
          $("#"+colorName).removeClass("pressed");
        },100);
        


}



function startOver(){


    level =0 ;  
    gamePattern=[];
    started =false;


}


