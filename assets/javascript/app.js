$(document).ready(function(){
    
    var correct = 0;
    var incorrect =0;
    var unanswered = 0;
    var time = 10;
    var intervalId;
    var clockRunning = false;
    var clicked = false;

    $("#a").attr("data-value", "a");
    $("#b").attr("data-value", "b");
    $("#c").attr("data-value", "c"); 
    $("#d").attr("data-value", "d");

    var questions = [
        {   prompt: "Which of the following films was NOT directed by Kevin Smith?",
            
            a: "Jersey Girl",
            b: "Mallrats",
            c: "Superbad",
            d: "Dogma",
    
            answer: "a",
            right: "Correct! Kevin Smith has a lot of cult classics to his credits, but Superbad is NOT one of them!",
            wrong: "Wrong! The correct answer is Superbad!",
        
            },
    
            {  prompt: "Which of the following films IS a triology?", 
    
            a: "The Sandlot",
            b: "The Little Giants",
            c: "The Mighty Ducks",
            d: "The Big Green",

            answer: "c",
            right: "Correct! Ducks fly together!",
            wrong: "Wrong! Quack, Quack, Quack! The correct answer is The Mighty Ducks!",
          
        },

            {  prompt: "Which of the following casinos is NOT robbed during Ocean's 11?",
    
            a: "Bellagio",
            b: "Mirage",
            c: "Mandalay Bay",
            d: "MGM Grand",

            answer: "c",
            right: "Correct! The Madalay Bay avoided being hit by Ocean's 11!",
            wrong: "Wrong! The correct answer is Mandalay Bay!",
         },

            {  prompt: "Who wrote the novel that The Shawshank Redemption is adapted from?",
    
            a: "Stephen King",
            b: "John Grisham",
            c: "Nicholas Sparks",
            d: "John Green",

            answer: "a",
            right: "Correct! Stephen King is responsbile for the legendary character Andy Dufresne!",
            wrong: "Wrong! It may not be his scariest novel but Stephen King is the correct answer!",
        },
    
           {  prompt: "Which of the following is a real title from the FRIDAY franchise?",
    
            a: "First Friday",
            b: "Last Friday",
            c: "Saturday",
            d: "Friday After Next",

            answer: "d",
            right: "Correct! Friday After Next was released in 2002!",
            wrong: "Wrong! Friday After Next is the correct answer!",
        },

           {  prompt: "In Mean Girls, what color do the Plastics, wear on Wednesdays?",
    
            a: "Purple",
            b: "Red",
            c: "Pink",
            d: "White",

            answer: "c",
            right: "Correct! Get in loser, we're going shopping!",
            wrong: "Wrong! On Wednesday's we wear pink! Stop trying to make fetch happen",
        },

           {  prompt: "What is the name of the Head Elf in The Santa Clause?",
    
            a: "Brody",
            b: "Bernard",
            c: "Bryan",
            d: "Benjamin",

            answer: "b",
            right: "Correct! You might as well put on the suit!",
            wrong: "Wrong! You clear have never seen Bernard's sweater game!",
        },

           {  prompt: "Which of the following is NOT a Bruce Willis film?",
    
            a: "16 Blocks",
            b: "Catch .44 ",
            c: "The Fifth Element",
            d: "3 Days to Kill",

            answer: "d",
            right: "Correct! 3 Days to Kill IS a movie but Bruce Willis isn't in it!",
            wrong: "Wrong! Bruce Willis has been in a lot of movies, but not 3 Days to Kill!",
        },

           {  prompt: "What is the name of the ficitional town where Sixteen Candles, Pretty in Pink, Weird Science and The Breakfast Club all take place? ",
    
            a: "Shermer, IL",
            b: "Herman, IL",
            c: "Hershey, IL",
            d: "Sanford, IL",

            answer: "a",
            right: "Correct! You know better than to head to Shermer!",
            wrong: "Wrong! Shermer, IL is the correct answer!",
        },

           {  prompt: "Not including the latest Creed movies, how many films are in the Rocky franchise?",
    
            a: "2",
            b: "3",
            c: "4",
            d: "5",

            answer: "d",
            right: "Correct! Adrian, knows she can count on you!",
            wrong: "Wrong! There are 5 films in the Rocky franchise! That's a lot of punchses!",
        },
]

var outTime = "You're out of time!"
    //press start to start game
        //track total right/wrong/unaswered questions
    //after 30 seconds display new question (for loop with interval maybe?)
    //end game after set amount of time
    //get score board 
    //start over resets the game but does NOT reload the page
    var randomQuestionIndex = Math.floor( Math.random() * questions.length);
    var chosenQuestion = questions[randomQuestionIndex] 
    
function time() {
    clearInterval(intervalId);
    intervalId = setInterval(clock, 1000);
}

//Fcnt shows random question and updates question timer start point
function reset()  {
    randomQuestionIndex = Math.floor( Math.random() * questions.length);
    chosenQuestion = questions[randomQuestionIndex]
    $("#question").html(chosenQuestion.prompt);
    $("#a").html(chosenQuestion.a);
    $("#b").html(chosenQuestion.b);
    $("#c").html(chosenQuestion.c);
    $("#d").html(chosenQuestion.d);
     time=10;
     $("#time").show();
}

//Fcnt resets for new game
function newGame(){
    reset ();
    correct = 0;
    incorrect =0;
    unanswered = 0;
    time = 10;
    intervalId;
    clockRunning = false;
    clicked = false;

}

//Fcnt delays reset to read right/wrong prompt before next question
var delayReset = setTimeout (function(){
    reset()},1000*15);  

function delay () { delayReset };

//Fcnt runs the clock and triggers the reset delay when question time hits 0
function clock(){
    time--;
    $("#time").html("Time Remaining " + time);
    clockRunning = true;
        if (time===0){
        delayReset;
        $("#question").html(outTime);
        unanswered++;
        console.log ("unansered is :" + unanswered)
        }
}

//Fcnt starts the clock and sets the interval
var start = function (){
    if (!clockRunning) {
        intervalId = setInterval(clock, 1000);
        clockRunning = true;
    }   

//Triggers click event for start button to begin the game and hide the start button   

        (".btn").on("click", function (){
            var response = $(this).attr("data-value");
            click = true;
            if (response === chosenQuestion.answer){
                    $("#question").html(chosenQuestion.right);
                    clockRunning = false;
                    correct = correct +1;
            } else if (response != chosenQuestion.answer){
                    incorrect++;
                    $("#question").html(chosenQuestion.wrong);
                    delay();
            }    
            
            console.log ("correct is : " + correct)
            console.log ("incorrect is : " + incorrect)
            console.log ("unansered is :" + unanswered)
        });


        start();  
      
});
        






   

    
    
    


