$(document).ready(function(){
    
    var correct = 0;
    var incorrect =0;
    var unanswered = 0;
    var time = 10;
    var intervalId;
    var clockRunning = false;
 
    var gameTime = 180;

    $(".gif").hide()
    
    $("#a").attr("data-value", "a");
    $("#b").attr("data-value", "b");
    $("#c").attr("data-value", "c"); 
    $("#d").attr("data-value", "d");

    var questions = [
        { endGame: "..assets/images/quicker.gif",
          outTime:  "You're out of time!",
        },

        {   prompt: "Which of the following films was NOT directed by Kevin Smith?",
            
            a: "Jersey Girl",
            b: "Mallrats",
            c: "Superbad",
            d: "Dogma",
    
            answer: "a",
            right: "Correct! Kevin Smith has a lot of cult classics to his credits, but Superbad is NOT one of them!",
            wrong: "Wrong! The correct answer is Superbad!",
            gif: "./assets/images/smith2.webp"

            },
    
            {  prompt: "Which of the following films IS a triology?", 
    
            a: "The Sandlot",
            b: "The Little Giants",
            c: "The Mighty Ducks",
            d: "The Big Green",

            answer: "c",
            right: "Correct! Ducks fly together!",
            wrong: "Wrong! Quack, Quack, Quack! The correct answer is The Mighty Ducks!",
            gif:  "./assets/images/ducks.gif"
        },

            {  prompt: "Which of the following casinos is NOT robbed during Ocean's 11?",
    
            a: "Bellagio",
            b: "Mirage",
            c: "Mandalay Bay",
            d: "MGM Grand",

            answer: "c",
            right: "Correct! The Madalay Bay avoided being hit by Ocean's 11!",
            wrong: "Wrong! The correct answer is Mandalay Bay!",
            gif:  "./assets/images/oceans.webp"
         },

            {  prompt: "Who wrote the novel that The Shawshank Redemption is adapted from?",
    
            a: "Stephen King",
            b: "John Grisham",
            c: "Nicholas Sparks",
            d: "John Green",

            answer: "a",
            right: "Correct! Stephen King is responsbile for the legendary character Andy Dufresne!",
            wrong: "Wrong! It may not be his scariest novel but Stephen King is the correct answer!",
            gif:  "./assets/images/andy.webp"
        },
    
           {  prompt: "Which of the following is a real title from the FRIDAY franchise?",
    
            a: "First Friday",
            b: "Last Friday",
            c: "Saturday",
            d: "Friday After Next",

            answer: "d",
            right: "Correct! Friday After Next was released in 2002!",
            wrong: "Wrong! Friday After Next is the correct answer!",
            gif:  "./assets/images/friday.webp"
        },

           {  prompt: "In Mean Girls, what color do the Plastics, wear on Wednesdays?",
    
            a: "Purple",
            b: "Red",
            c: "Pink",
            d: "White",

            answer: "c",
            right: "Correct! Get in loser, we're going shopping!",
            wrong: "Wrong! On Wednesday's we wear pink! Stop trying to make fetch happen!",
            gif:  "./assets/images/mean.webp"
        },

           {  prompt: "What is the name of the Head Elf in The Santa Clause?",
    
            a: "Brody",
            b: "Bernard",
            c: "Bryan",
            d: "Benjamin",

            answer: "b",
            right: "Correct! You might as well put on the suit!",
            wrong: "Wrong! You clear have never seen Bernard's sweater game!",
            gif:  "./assets/images/bernards.webp"
        },

           {  prompt: "Which of the following is NOT a Bruce Willis film?",
    
            a: "16 Blocks",
            b: "Catch .44 ",
            c: "The Fifth Element",
            d: "3 Days to Kill",

            answer: "d",
            right: "Correct! 3 Days to Kill IS a movie but Bruce Willis isn't in it!",
            wrong: "Wrong! Bruce Willis has been in a lot of movies, but not 3 Days to Kill!",
            gif:  "./assets/images/bruce.webp"
        },

           {  prompt: "What is the name of the ficitional town where Sixteen Candles, Pretty in Pink, Weird Science and The Breakfast Club all take place? ",
    
            a: "Shermer, IL",
            b: "Herman, IL",
            c: "Hershey, IL",
            d: "Sanford, IL",

            answer: "a",
            right: "Correct! You know better than to head to Shermer!",
            wrong: "Wrong! Shermer, IL is the correct answer!",
            gif:  "./assets/images/bender.webp"
        },

           {  prompt: "Not including the latest Creed movies, how many films are in the Rocky franchise?",
    
            a: "2",
            b: "3",
            c: "4",
            d: "5",

            answer: "d",
            right: "Correct! Adrian, knows she can count on you!",
            wrong: "Wrong! There are 5 films in the Rocky franchise! That's a lot of punches!",
            gif:  "./assets/images/rocky.webp"
        },
        ]
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

function reset()  {
    randomQuestionIndex = Math.floor( Math.random() * questions.length);
    chosenQuestion = questions[randomQuestionIndex]
    $("#question").html(chosenQuestion.prompt);
    $("#a").html(chosenQuestion.a);
    $("#b").html(chosenQuestion.b);
    $("#c").html(chosenQuestion.c);
    $("#d").html(chosenQuestion.d);
    $(".btn").show();
     time=10;
}

var delayReset = setTimeout (function(){
    reset(); 
    start();
},1000*15);  

function delay () { delayReset };

function clock(){
    time--;
    gameTime=gameTime-time;
    $("#time").html("Question Timer: " + time);
    clockRunning = true;
        if (time===0){//CURRENTLY WORKING BUT ONLY ON FIRST UNANSWERED QUESTION
            unanswered++;
         $("#question").html(questions.outTime);
         stopClock();
         $(".btn").hide();
        var img = $("<img>");
        img.attr("src" , questions.endGame);
        img.addClass("gif");
        $("#question").append(img); 
                                                            console.log ("unanwsered is :" + unanswered)
        }else if (gameTime===0){
        $("#question").html("This movie's over! Here's how you did!" + "Right: " + correct + "Wrong: " + incorrect + "Unanswered: " + unanswered + endGame);
        $(".btn").hide();
        var img = $("<img>");
        img.attr("src" , questions.endGame);
        img.addClass("gif");
        $("#question").append(img); 
    }

}

function stopClock(){
    time=time;
    $("#time").html("Question Timer: " + time);
    clockRunning = false;
    clearInterval(intervalId);
    if (gameTime >0){
        delayReset = setTimeout (function(){
            reset(); 
            start();
        },1000*10);    
    }
}

//ON page load:
    $(".btn").hide();
    $("#time").hide();

var start = function (){
    if (!clockRunning) {
        intervalId = setInterval(clock, 1000);
        clockRunning = true;
    }
    
        $(".btn").on("click", function (){
            var response = $(this).attr("data-value");
            $(".btn").hide();
            var img = $("<img>");
            img.attr("src" , chosenQuestion.gif);
            img.addClass("gif");    

            if (response === chosenQuestion.answer){
                    correct++;
                    stopClock();    
                    gameTime=gameTime-time;   
                    $("#question").html(chosenQuestion.right);
                    $("#question").append(img);
            } else if (response != chosenQuestion.answer){
                    incorrect++;
                    stopClock();
                    gameTime=gameTime-time;
                    $("#question").html(chosenQuestion.wrong);
                    $("#question").append(img);
           }                 
        });
}
       //When you click on start: 
            $(".start").on("click", function(){
                    start();
                    reset();
                    $(".start").hide();
                    $("#time").show();
            });

});


   

    
    