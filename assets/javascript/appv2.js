$(document).ready(function(){
    
    var correct = 0;
    var incorrect =0;
    var unanswered = 0;
    var time = 11;
    var intervalId;
    var clockRunning = false;
    var gameRunning = false;
    var outTime =  "You took too long to answer!";
    var gameTime = 31;
    var delayReset;
   
    $(".gif").hide()
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
    
            answer: "c",
            right: "Correct! Kevin Smith has a lot of cult classics to his credits, but Superbad is NOT one of them!",
            wrong: "Wrong! The correct answer is Superbad!",
            gif: "./assets/images/smith2.webp",

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
            gif:  "./assets/images/oceans.webp",
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
            gif:  "./assets/images/mean.webp",
        },

           {  prompt: "What is the name of the Head Elf in The Santa Clause?",
    
            a: "Brody",
            b: "Bernard",
            c: "Bryan",
            d: "Benjamin",

            answer: "b",
            right: "Correct! You might as well put on the suit!",
            wrong: "Wrong! You clearly have never seen Bernard's sweater game!",
            gif:  "./assets/images/bernards.webp",
        },

           {  prompt: "Which of the following is NOT a Bruce Willis film?",
    
            a: "16 Blocks",
            b: "Catch .44 ",
            c: "The Fifth Element",
            d: "3 Days to Kill",

            answer: "d",
            right: "Correct! 3 Days to Kill IS a movie but Bruce Willis isn't in it!",
            wrong: "Wrong! Bruce Willis was not in 3 Days to Kill!",
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
            gif:  "./assets/images/rocky.webp",
        },
            {  prompt: "Who was the original voice of Chucky in Child's Play?",
    
            a: "Anthony Daniels",
            b: "Brad Dourif",
            c: "Mark Hamill",
            d: "Kenny Baker",

            answer: "b",
            right: "Correct! Brad Douriff was the original voice of our favorite toy pyschopath!",
            wrong: "Wrong! Until very recently Brad Dourif has been the original and long standing voice of Chucky!",
            gif:  "./assets/images/chucky.webp",
        },
            {  prompt: "Which of the following movies has NOT been remade or rebooted?",
        
            a: "Flatliners",
            b: "Jacob's Ladder",
            c: "Pet Sematary",
            d: "The Birds",

            answer: "d",
            right: "Correct! So far no one has tried to touch Alfred Hitchcock's classic!",
            wrong: "Wrong! Alfred Hitchcock's, The Birds is the only horror classic to remain untouched!",
            gif:  "./assets/images/birds.webp",
        },

            {  prompt: "Who directed Interstellar?",
        
            a: "Christoper Nolan",
            b: "Danny Boyle",
            c: "Steven Spielberg",
            d: "Stanley Kubrick",

            answer: "a",
            right: "Correct! Christopher Nolan brought us the tears of Matthew McConaughey for this trip to space!",
            wrong: "Wrong! Christopher Nolan is responsible for this trip to space!",
            gif:  "./assets/images/inter.gif",
        },  

            {  prompt: "Ruth E. Carter finally won an Academy Award for her work on Black Panther in which category?",
        
                a: "Costume Design",
                b: "Production Design",
                c: "Original Score",
                d: "Makeup and Hair",

                answer: "a",
                right: "Correct! Wakanda Forever! ",
                wrong: "Wrong! Ruth E. Carter brought us all the iconic costume designs of Wakanda!",
                gif:  "./assets/images/black.gif",
            },

            {  prompt: "For A Star is Born, Bradley Cooper learned how to play guitar from which music icon's son?",
    
            a: "Patsy Kline",
            b: "Willie Nelson",
            c: "Johnny Cash",
            d: "Hank Williams Jr.",

            answer: "b",
            right: "Correct! Lukas Nelson, son of Willie Nelson helped to get Bradley Cooper's riffs just right!",
            wrong: "Wrong! Lukas Nelson, son of Willie Nelson helped to get Bradley Cooper's riffs just right!",
            gif:  "./assets/images/star.webp",
              },
        ]

    var randomQuestionIndex = Math.floor( Math.random() * questions.length);
    var chosenQuestion = questions[randomQuestionIndex] 
    
function setTime() {
    clearInterval(intervalId);
    intervalId = setInterval(clock, 1000);
}

function setgameTime() {
    clearInterval(intervalId);
    intervalId = setInterval(gameTime, 1000);
}




function reset()  {
randomQuestionIndex = Math.floor( Math.random() * questions.length);
    chosenQuestion = questions[randomQuestionIndex]
    $("#question").text(chosenQuestion.prompt);
    $("#a").text(chosenQuestion.a);
    $("#b").text(chosenQuestion.b);
    $("#c").text(chosenQuestion.c);
    $("#d").text(chosenQuestion.d);
    $(".butn").show();
    time = 11;
    $("#time").show();
  }

function stopClock(){
    time=time;
    $("#time").html("Question Timer: " + time);
    clockRunning = false;
    gameRunning = false;
    clearInterval(intervalId);
    if (gameTime > 1){
        delayReset = setTimeout (function(){
            reset();
            start();
            $("#slow").hide();
            $("#question").show();  
        },1000*8);  
        
    }
}

function newGame(){
    correct = 0;
    incorrect =0;
    unanswered = 0;
    time = 11;
    clockRunning = false;
    gameRunning = false;
    gameTime = 31;    
    $("#new").hide();
    $(".conan").hide();
    $(".btn").show();
    $("#score").hide();
    $("#time").show();
    $("p").show();
    $("#question").show();
    reset();
    start();
    setTime();
    setgameTime();
    clock();
}

$("#new").on("click", function (){
    newGame();
});


function clock(){
    time--;
    gameTime--;
    $("#time").html("Question Timer: " + time);
    clockRunning = true;
    gameRunning = true;
    if (gameTime===0){
        unanswered++;
        $("#score").html("This movie's over! Here's how you did!" + "<br>"+ "Right: " +  correct  + "<br>"+ "Wrong: " +  incorrect  +  "<br>" + "Unanswered: "  +  unanswered );
        $(".butn").hide();
        $("#score").show();
        $("#new").show();
        $("#time").hide();
        $("#question").hide();
        $("#slow").hide();
        var img = $("<img>");
        img.attr("src" , "./assets/images/time.webp");
        img.addClass("conan");
        $("#score").append(img); 
        stopClock();
}else if (time===0){
        stopClock();
        $("#question").hide();    
        unanswered++;
        delayReset = setTimeout (function(){
            reset();
            start();
        },1000*8); 
        $("#slow").text(outTime);
        $(".butn").hide();
        $("#time").hide();
        var img = $("<img>");
        img.attr("src" , "./assets/images/quicker.gif");
        img.addClass("gifTime");
        $("#slow").append(img);     
        $("#slow").show();                                                          
        }

}

//ON page load:
    $(".butn").hide();
    $("#time").hide();
    $(".score").hide();
    $("#new").hide();
    $("#slow").hide(); 
    setTime();
    setgameTime();

$(".butn").on("click", function (){
       var response = $(this).attr("data-value");
       if (response === chosenQuestion.answer){
        correct++;
       } else if (response != chosenQuestion.answer && time>0){
            incorrect++;
        }$("#slow").hide(); 
}); 

var start = function (){
    if (!clockRunning) {
        intervalId = setInterval(clock, 1000);
        clockRunning = true;
    }
    $("p").hide();
        $(".butn").on("click", function (){
            var response = $(this).attr("data-value");
            $(".butn").hide();
            var img = $("<img>");
            img.attr("src" , chosenQuestion.gif);
            img.addClass("gif");    
            if (response === chosenQuestion.answer){
                    stopClock();    
                    $("#question").html(chosenQuestion.right);
                    $("#question").append(img);
                    delayReset = setTimeout (function(){
                        reset();
                        start();
                    },1000*8); 
            } else if (response != chosenQuestion.answer && time>0){
                    stopClock();
                    $("#question").html(chosenQuestion.wrong);
                    $("#question").append(img);
                    delayReset = setTimeout (function(){
                        reset();
                        start();
                    },1000*8); 
           }                 
        });
}
       //When you click on start: 
            $(".start").on("click", function(){
                    start();
                    reset();
                    $(".start").hide();
                    $("#time").show();

            console.log(gameTime) 
           console.log (chosenQuestion)    
            });
     

});
