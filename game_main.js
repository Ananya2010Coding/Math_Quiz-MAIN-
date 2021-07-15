player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;
            
function send(){
    getNumber1 = document.getElementById("no_1").value;
    getNumber2 = document.getElementById("no_2").value;
    actual_Q = parseInt(getNumber1) * parseInt(getNumber2);

    question = "Q: "+getNumber1+' X '+getNumber2;
    inputBox = "<br><br>Answer<input type='number' id='answer_input'>";
    buttonCHECK = "<br><br><button class='btn btn-warning' onclick='check()'>CHECK</button>";
    main_div = question + inputBox + buttonCHECK;

    document.getElementById("output").innerHTML = main_div;
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("answer_input").value;
    answer = get_answer.toLowerCase();
    console.log("Answer in lower case = "+answer);

    if(answer == actual_Q){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_Q").innerHTML = "Question Turn = "+player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_Q").innerHTML = "Question Turn = "+player1_name;
    }

    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_ANS").innerHTML = "Answer Turn = "+player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_ANS").innerHTML = "Answer Turn = "+player1_name;
    }

    document.getElementById("output").innerHTML = "";

}
