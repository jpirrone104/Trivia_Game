
function gamestart() {
    $("#startButton").show();
    
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


    pickRandom = Math.floor(Math.random()*questions.length);
    questionSelected = questionsAvail[pickRandom];
    
    $("#question").html("<h2>" + questionsAvail.question + "</h2>");
		for(var i = 0; i < questionSelected.pickRandom.length; i++) {
			var userChoice = $("<div>");
			userChoice.addClass("answerchoice");
			userChoice.html(pickRandom.options[i]);
			
			userChoice.attr("data-guessvalue", i);
			$("#answer").append(userChoice);
        }
};

 
});

$(document).on("click", "#startButton", function() {
    $("#startButton").hide();

    gamestart();

});