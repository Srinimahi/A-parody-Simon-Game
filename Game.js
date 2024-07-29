var buttonColors= ["red","blue","green","yellow"];
var gamePattern= [];
var userClickedPattern=[];
var a=0;
var level=0;
var randomChosenColor;

function nextSequence(){
level++;
$("h1").text("Level "+level);
  var randomNumber=Math.floor(Math.random()*4);
  randomChosenColor=buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("div #"+randomChosenColor).animate({
    "opacity":"0.2"
  },"fast").animate({
    "opacity":"1"
  },"fast");
  return playSound(randomChosenColor);
}

  $(document).on("keydown",function(){
      if(a===0){
        nextSequence();
        a++;
      }
  });
 

$("div.btn").on("click",function(){
  var userChosenColor=this.id;
  
  userClickedPattern.push(userChosenColor);
 return playSound(userChosenColor),animatePress(userChosenColor),checkAnswer(userChosenColor);
})


function playSound(name){
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}


function animatePress(currentColor){
  $("div #"+currentColor).addClass("pressed");
  setTimeout(function(){$("div #"+currentColor).removeClass("pressed")},100);
}

function startover(){
  level=0;
  gamePattern=[];
  a=0;
}

function checkAnswer(currentLevel){
if(currentLevel===randomChosenColor){
  setTimeout(function(){
    nextSequence();
    userClickedPattern=[];
  },100);
}
  else{
    
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("h1").text("Game over, press any key to restart");
    startover();
    
  }

}