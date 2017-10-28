
/* eslint-env node, mocha, browser */
var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

//if we click on the start/reset
document.getElementById("startreset").onclick = function(){
 //if we r playing? (mean if we going to start a new game)
    if (playing == true) {
        
       //reload page
        location.reload();
        
    }else {//if we not playing?(mean a game is currently running)
        
        //change mode to playing
        playing = true;
        
        //set score to 0;
        score = 0;
    
    document.getElementById("scorevalue").innerHTML = score;
       
    //show countdown box 
        
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        //hide game over box
        
        hide("gameOver");
        
        // change button to reset
     document.getElementById("startreset").innerHTML = "Reset Game";
        
        //start countdown
        
        startCountdown();
        
        //generate new Q&A
        
        generateQA();
    }
}

//clicking on an answer box

for(var i=1; i<5; i++){
document.getElementById("box"+i).onclick = function(){
    //check if we are playing
    if(playing == true){//yes
        if(this.innerHTML == correctAnswer){
            //correct answer
            
            //increase score by 1
            score++;
            
 document.getElementById("scorevalue").innerHTML = score; 
            //hide wrong box and show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            }, 1000);
            
            //Generate new Q&A
            generateQA();
            
        }else{
            //wrong answer
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            }, 1000);
            
        }
    }
}

}




//functions

//start counter
function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;

        //time left 
document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        if(timeremaining == 0){ //game over
            stopCountdown();

            show("gameOver");
            
document.getElementById("gameOver").innerHTML = "<p> Game Over!</p><p>Your score is " + score + ".</p>";
            
            hide("timeremaining");  
            hide("correct");
            hide("wrong");
            playing = false;
document.getElementById("startreset").innerHTML = "Start Game";
            
        }
        
    },1000);
}


//stop counter
function stopCountdown(){
    clearInterval(action);
}


//hide an element
function hide(Id){
    document.getElementById(Id).style.display = "none";
}

//show an element
function show(Id){
    document.getElementById(Id).style.display = "block";
}

//generate question and multiple answer

function generateQA(){
    var x = 1 + Math.round(9*Math.random());
    var y = 1 + Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    
    var correctPosition = 1 + Math.round(3*Math.random());
    
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer
    
    //fill other boxes with wrong answers
    
    var answers = [correctAnswer];
    
    for(var i=1; i<5; i++){
        if(i != correctPosition){
            var wrongAnswer;
            do{
                wrongAnswer = (1 + Math.round(9*Math.random()))*(1 + Math.round(9*Math.random()));
                
            }while(answers.indexOf(wrongAnswer)>-1)
            
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            
            answers.push(wrongAnswer);
        }
    }
    
}







//if we click on the start/reset 
    //if we r playing
        //reload page
    //if we not playing
        //set score to 0;
        //show countdown box
        //reduce time by 1sec in loops 
            //timeleft?
                //yes->continue
                //no->gameover
        //change button to reset
        //generate new Q&A


//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increasee score
                //show correct box for 1sec
                //generate new Q&A
            //no
                //show try again box for 1sec






