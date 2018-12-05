
//game variables


function gamestart() {
    
    //available questions array
    var questionsAvail = [

        {
            question: "What is the name of Jim and Pam's first child?",
            options: ["Philip", "CeCe", "Astrid", "Dwight"],
            answer: 1,
            correctpicture: "http://66.media.tumblr.com/6ab6a9cfc7535708d90f1409692ea13b/tumblr_oagggmfYqx1vqsw2co1_500.gif",
            


        },
        
        
        {
            question: "What book does Jim ask Dwight to read him and Pam when they stay at his Bed and Breakfast?",
            options: ["Goodnight, Moon", "1984", "Harry Potter", "The Lord of the Rings"],
            answer: 2,
            correctpicture: "https://i1.wp.com/gifrific.com/wp-content/uploads/2013/05/Michael-Scott-and-Dwight-Schrute-Raise-the-Roof.gif?zoom=1.25&ssl=1",

        }
        

    ]

    //randomize questions
    pickRandom = Math.floor(Math.random()*questionsAvail.length);
    var questionSelected = questionsAvail[pickRandom];

    console.log(pickRandom);

    $("#question").html("<h2>" + questionsAvail[pickRandom].question + "</h2>");

    console.log(questionsAvail[pickRandom].question);

    $("#options").html(
    "<ul>" +
    "<li>" + questionsAvail[pickRandom].options[0] + "</li>" +
    "<li>" + questionsAvail[pickRandom].options[1] + "</li>" +
    "<li>" + questionsAvail[pickRandom].options[2] + "</li>" +
    "<li>" + questionsAvail[pickRandom].options[3] + "</li>" +
    "</ul>");

    console.log(questionsAvail[pickRandom].options);
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
    $(".gameBody").show();
    gamestart();

});

$(document).on("click", "#restartButton", function() {
    restart();
})