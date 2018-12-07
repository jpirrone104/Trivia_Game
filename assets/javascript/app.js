
//game variables
var countDown = 25;


    
    //available questions array
    var questionsAvail = [

        {
            question: "What is the name of Jim and Pam's first child?",
            options: ["Philip", "CeCe", "Astrid", "Dwight"],
            answer: "CeCe",
            correctpicture: "http://66.media.tumblr.com/6ab6a9cfc7535708d90f1409692ea13b/tumblr_oagggmfYqx1vqsw2co1_500.gif",
            


        },
        
        
        {
            question: "What book does Jim ask Dwight to read him and Pam when they stay at his Bed and Breakfast?",
            options: ["Goodnight, Moon", "1984", "Harry Potter", "The Lord of the Rings"],
            answer: "Harry Potter",
            correctpicture: "https://i1.wp.com/gifrific.com/wp-content/uploads/2013/05/Michael-Scott-and-Dwight-Schrute-Raise-the-Roof.gif?zoom=1.25&ssl=1",

        }
        

    ]

    function gamestart() {
        //clear question div
        $("#question").html("");

        //randomize questions
        pickRandom = Math.floor(Math.random()*questionsAvail.length);
        var questionSelected = questionsAvail[pickRandom];
        console.log(pickRandom);

        //update question on question div
        $("#question").html("<h2>" + questionsAvail[pickRandom].question + "</h2>");
        console.log(questionsAvail[pickRandom].question);
    
        //render options on options div
        function updateOptions() {

            var optionButton = $("<button>")
            
            $.each(questionsAvail[pickRandom].options, function(index) {
                var optionsIndex = questionsAvail[pickRandom].options[index];
                console.log(optionsIndex);
                $("#options").append("<button>" + optionsIndex + "</button>");
                $("button").attr("id", optionsIndex).addClass("options");
            });
        }

            updateOptions();
        

            
        $("#timer").html("Time remaining: " + countDown + " seconds");

        $(document).on("click", ".option", function() {
            alert($(this).answer)

            if(countDown > 0 && $(this) === questionsAvail[pickRandom].answer) {

                $("#options").html("");
                $("#timer").html(""); 
                $("#question").html(questionsAvail[pickRandom].correctpicture);
                
            }
            
        });
        
};

function restart() {
    $(".gameBody").hide();
    $("#start").show();
}

$(document).ready(function() {
    $(".gameBody").hide();
})

$(document).on("click", "#startButton", function() {

    $("#start").hide();
    counter = setInterval(timer, 1000)
    $(".gameBody").show();
    gamestart();

});

function timer(){
    countDown--;
    if (countDown <= 0) {
     clearInterval(counter);
     return;
    }
    
     $("#timer").html("Time remaining: " + countDown  + " seconds");
    }
// function evealuateChoice() {
//     if(countDown > 0 && $(this) === questionsAvail[pickRandom].answer) {
//         $("#question").html(questionsAvail[pickRandom].correctpicture);
//         $("#options").html("");
//         $("#timer").html("");
// }
// }

$(document).on("click", "#restartButton", function() {
    restart();
});