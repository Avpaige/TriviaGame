$(document).ready(function(){
    
    var correct = 0;
    var incorrect =0;
    var unaswered = 0;

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

        //    {  prompt: "",
    
        //     a: "",
        //     b: "",
        //     c: "",
        //     d: "",

        //     answer: ,
        //     right: "",
        //     wrong: "",
        //    },

        //    {  prompt: "",
    
        //     a: "",
        //     b: "",
        //     c: "",
        //     d: "",

        //     answer: ,
        //     right: "",
        //     wrong: "",
        //    },

        //    {  prompt: "",
    
        //     a: "",
        //     b: "",
        //     c: "",
        //     d: "",

        //     answer: ,
        //     right: "",
        //     wrong: "",
        //    },

        //    {  prompt: "",
    
        //     a: "",
        //     b: "",
        //     c: "",
        //     d: "",

        //     answer: ,
        //     right: "",
        //     wrong: "",
        //    },
        ]
    //press start to start game
    //create thirty second interval per question
    //create an array of question objects with answers
    //determine right answer/wrong answer
    //track total right/wrong/unaswered questions
    //give 30 seconds to answer    
        //when theres a click reset timer 
    //when question timer runs out, show out of time and then move on to next question
    //after 30 seconds display new question (for loop with interval maybe?)

    //start over resets the game but does NOT reload the page
   

var start = function (){
    for (var i=0; i< questions.length; i++){
        $("#question").html(questions[i].prompt);
        $("#a").html(questions[i].a);
        $("#b").html(questions[i].b);
        $("#c").html(questions[i].c);
        $("#d").html(questions[i].d);

    $(".btn").on("click", function (){
    var response = $(this).attr("data-value");

        if (response === questions[i].answer){
            correct++; 

console.log(questions[i].answer)
console.log("this is answer value after click")

            $("#question").html(questions[i].right);
        } else if (response != questions[i].answer){
            incorrect++;
            $("#question").html(questions[i].wrong);
        } else (response === false) 
            unaswered++;

        });

        }
    }
console.log ("correct is : " + correct)
console.log ("correct is : " + incorrect)
console.log ("unansered is :" + unaswered)

start();
});


   

    
    
    


