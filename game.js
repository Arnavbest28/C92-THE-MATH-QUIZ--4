var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name+":";
document.getElementById("player2_name").innerHTML = player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn- "+ player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn- "+ player2_name;

function send(){
var get_number1=document.getElementById("number1").value;
var get_number2=document.getElementById("number2").value;
var actual_answer=parseInt(get_number1)*parseInt(get_number2);

var question_number= "<h4 id='word_display'>"+get_number1+"X"+get_number2+"</h4>";
var input_box="<br>Answer : <input type='number' id='input_check_box'>";
var check_button= "<br> <br><button class='btn btn-info' onclick='check();'> Check </button><br>";
var row= question_number+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
}

var answer_turn="player2";
var question_turn="player1";

function check()
{
    var get_answer=document.getElementById("input_check_box").value;
    if(get_answer==actual_answer)
    {
        if(answer_turn=="player1")
        {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else
        {
            
            player2_score=player2_score+1;
            document.getElementById("playe2_score").innerHTML=player2_score;
        }
    }


        if(question_turn=="player1")
        {
            question_turn="player2";
            document.getElementById("player_question").innerHTML="Question Turn - "+player2_name;
        }
        else
        {
            
            question_turn="player1";
            document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
        }

        
        if(answer_turn=="player1")
        {
            answer_turn="player2";
            document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;
        }
        else
        {
            answer_turn="player2";
            document.getElementById("player_answer").innerHTML="Answer Turn - "+player1_name;
        }
        document.getElementById("output").innerHTML="";
    
}