var player1_name = localStorage.getItem("name1");
var player2_name = localStorage.getItem("name2");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_name").innerHTML = player1_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("p2").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    real_answer = parseInt(number1) * parseInt(number2);
    console.log(real_answer);
    document.getElementById("output").style.height = "400px";
    document.getElementById("output").style.borderLeft = "10px solid #5ca0fd";
    document.getElementById("output").style.borderRight = "10px solid #5ca0fd";
    document.getElementById("output").style.borderRadius = "0px 30px 0px 30px";
    var question_number = "<h2 class='hq'>" + number1 + " x " + number2 + "</h2>";
    var input_box = "<br>Answer : <input type='number' class='a_t' id='input_check_box'>";
    var check_button = "<br><br><button class='btn_sd' onclick='check()'>Check</button>";
    var row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
var question_turn = "player 1";
var answer_turn = "player 2";

function check() {
    var get_answer = document.getElementById("input_check_box").value;
    if (get_answer == real_answer) {
        if (answer_turn == "player 1") {
            console.log("ok")
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            console.log("oook")
            player2_score = player2_score + 1;
            console.log(player2_score);
            document.getElementById("p2").innerHTML = player2_score;
        }
    }

    if (question_turn == "player 1") {
        question_turn = "player 2";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player2_name;
        console.log("ooook")
    } else {
        console.log("oooook")
        question_turn = "player 1";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
    }

    if (answer_turn == "player 1") {
        console.log("ooooook")
        answer_turn = "player 2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    } else {
        console.log("oooooook")
        answer_turn = "player 1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
}