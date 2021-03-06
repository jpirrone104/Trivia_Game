$.fn.startGame = function() {
    
    $("#tally").hide();
    var _this = this;
    correct =  0,
    incorrect = 0,
    count = 25;
    current = 0;
    questions = [ 
        
        {
        question: "What is the name of Jim and Pam's first child?",
        options: ["Philip", "CeCe", "Astrid", "Dwight"],
        correct: "1",
        correctpicture: "https://i1.wp.com/gifrific.com/wp-content/uploads/2013/05/Michael-Scott-and-Dwight-Schrute-Raise-the-Roof.gif?zoom=1.25&ssl=1",
        incorrectpicture: "https://i2.wp.com/gifrific.com/wp-content/uploads/2013/08/Dwight-Schrute-Shakes-Head-and-Rolls-Eyes.gif?zoom=1.25&resize=271%2C276&ssl=1",


    },
    
    
    {
        question: "What book does Jim ask Dwight to read him and Pam when they stay at his Bed and Breakfast?",
        options: ["Goodnight, Moon", "1984", "Harry Potter", "The Lord of the Rings"],
        correct: "2",
        correctpicture: "https://i2.wp.com/gifrific.com/wp-content/uploads/2012/06/ryan-point-agree-the-office.gif?resize=245%2C136&ssl=1",
        incorrectpicture: "https://i0.wp.com/gifrific.com/wp-content/uploads/2013/11/Andy-Bernard-Saying-Congratulations-on-your-Epic-Fail.gif?zoom=1.25&resize=500%2C255&ssl=1",

    }, 
    {
        question: "What is the name of Dwight's Earth-Day Super-Hero Persona?",
        options: ["Polluticorn", "Earth Man", "Recyclops", "Reduce Reuse Recycle Man"],
        correct: "2",
        correctpicture: "https://i1.wp.com/gifrific.com/wp-content/uploads/2018/10/dwight-schrute-head-nod-office.gif?zoom=1.25&resize=238%2C205&ssl=1",
        incorrectpicture: "https://i1.wp.com/gifrific.com/wp-content/uploads/2012/08/noted-ryan-the-office.gif?zoom=1.25&resize=370%2C208&ssl=1",
        


    }, 
    {
        question: "How did Michael hurt his foot?",
        options: ["He burned it on a George Foreman Grill", "He tripped while running for the pretzel line", "Playing basketball in the warehouse", "Using the Bailer"],
        correct: "0",
        correctpicture: "https://i2.wp.com/gifrific.com/wp-content/uploads/2013/05/Jim-Halpert-Air-High-Five-Halloween.gif?zoom=1.25&resize=245%2C186&ssl=1",
        incorrectpicture: "https://i1.wp.com/gifrific.com/wp-content/uploads/2018/10/michael-scott-quiet-the-office.gif?zoom=1.25&resize=300%2C167&ssl=1",


    }, 
    {
        question: "What is Creed Bratton's Job?",
        options: ["Janitorial", "Vendor Relations", "Accounting", "Quality Assurance"],
        correct: "3",
        correctpicture: "https://i2.wp.com/gifrific.com/wp-content/uploads/2014/01/Jim-Halpert-Darryl-Philbin-Fist-Bump-The-Office.gif?zoom=1.25&resize=370%2C209&ssl=1",
        incorrectpicture: "https://i0.wp.com/gifrific.com/wp-content/uploads/2012/09/Michael-scott-no-god-no.gif?zoom=1.25&resize=240%2C196&ssl=1",

    }, 
    {
        question: "What was the name of Kevin's band (before he left to join a new one)?",
        options: ["The Sting Singers", "Ghosts in the Machine", "Scrantonicity", "The Cops"],
        correct: "2",
        correctpicture: "https://i0.wp.com/gifrific.com/wp-content/uploads/2015/05/Kevin-Nods-and-Smiles-The-Office.gif?zoom=1.25&resize=370%2C210&ssl=1",
        incorrectpicture: "https://i2.wp.com/gifrific.com/wp-content/uploads/2014/03/Stanley-The-Office-Eyeroll.gif?zoom=1.25&resize=320%2C180&ssl=1",


    }, 
    {
        question: "What is the name of Michael's wife?",
        options: ["Jan", "Holly", "Carol", "Marylin"],
        correct: "1",
        correctpicture: "https://i0.wp.com/gifrific.com/wp-content/uploads/2013/05/Andy-Bernard-Spin-Around-in-Chair-Yes.gif?zoom=1.25&resize=300%2C169&ssl=1",
        incorrectpicture: "https://i0.wp.com/gifrific.com/wp-content/uploads/2012/04/michael-scott-gross.gif?zoom=1.25&resize=175%2C177&ssl=1",


    }, 
    ];
    updateGame = function() {
        if (questions[current]) {
            $("#correct").html("");
            $("#options").html("");
            $("#question").show();
            $("#timer").html("Time remaining: " + count + " seconds");
            $("#question").html("<h2>"  + questions[current].question + "</h2>");
            var optionsArr = questions[current].options;

            for (var i = 0; i < optionsArr.length; i++) {
                // $("#options").append("<button>" + optionsArr[i] + "</button>");
                // $("button").attr("data-id", i);
                // $("button").addClass("option");
                var button = $('<button>');
                button.text(optionsArr[i]);
                button.attr("id", i);
                button.addClass("option");
                $('#options').append(button);
                
            }
            window.startGameCounter = setInterval(timer, 1000);
        } else {
            
            $("#correct").hide();
            $("#question").hide();
            $("#timer").hide();
            $("#options").hide();
            $("#tally").show();
            $("#tally").append("<h2>Game Over!<h2>")
            
        }
    };
    timer = function() {
        count--;
        if (count <= 0) {
            setTimeout(function() {
                
                nextQuestion();
            });

        } else {
            $("#timer").html("Time remaining: " +  count + " seconds");
        }
    };
    nextQuestion = function() {
        current++;
        clearInterval(window.startGameCounter);
        count = 25;
        $("#timer").html("");
        setTimeout(function() {
            tally();
            updateGame();
        }, 4000)
    };
    tally = function() {
       
       var ca = parseInt(correct)
       var ia = parseInt(incorrect)
        // var incorrectAnswer = toString(incorrect);
        $("#tally").html("correct answers " + ca + "<br>" + "Incorrect answers: " + ia);
        

        console.log(_this);
    };
    console.log(_this);
    return _this;
    

};

    // answer = function(correct) {
    //     var string = correct ? 'correct' : 'incorrect';
    //     answer[string]++;
    //     $('.' + string).html(string + ' answers: ' + answer[string]);
    // };


var Trivia;

$(document).on("click", "#startButton", function() {
    $("#start").hide();
    $(".gameBody").show();
    Trivia = new $(window).startGame();
    updateGame();
});

$(document).on("click", ".option", function(e) {
    console.log($(this).attr("id"));
    var selection = $(this).attr("id"),
         _this = Trivia || $(window).startGame(),
        index = questions[current].correct,
        correctAnswer = questions[current].options[index];
        gifCorrect = questions[current].correctpicture;
        gifIncorrect = questions[current].incorrectpicture;

    if (selection !== index && selection !== null) {
        $("#options").html("<h1>FALSE. The correct answer was: " + correctAnswer + "</h1>")
        $("#correct").append("<img src=" + gifIncorrect + "</img>");
        $("#timer").html("")
        $("#question").hide();
        incorrect++
        
        
     } else if (count <= 0 && selection == null) {
        $("#options").html("<h1>FALSE. The correct answer was: " + correctAnswer + "</h1>");
        $("#correct").append("<img src=" + gifIncorrect + "</img>");
        incorrect++
       
     } 
    else{
        $("#options").html("<h1>That's what she said!</h1>")
         $("#correct").append( "<img src=" + gifCorrect + "</img>");
         $("#timer").html("")
         $("#question").hide();
         correct++
        
    }
   
    tally();
    nextQuestion();
});

