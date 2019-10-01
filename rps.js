function alertFunc() {
    document.getElementById("usrName").innerHTML = prompt("Your name please?");
}

document.getElementById("r").addEventListener("click", rClick);
document.getElementById("p").addEventListener("click", pClick);
document.getElementById("s").addEventListener("click", sClick);


var usrChoice = "";
var compChoice = "";
var usrScr = 0;
var compScr = 0;

function rClick(){
    document.getElementById("s").style.border="4px solid white"
    document.getElementById("p").style.border="4px solid white"
    document.getElementById("r").style.border="4px solid red"
    usrChoice = "rock";
    compPlays();
}

function pClick(){
    document.getElementById("r").style.border="4px solid white"
    document.getElementById("s").style.border="4px solid white"
    document.getElementById("p").style.border="4px solid red"
    usrChoice = "paper";
    compPlays();
}

function sClick(){
    document.getElementById("r").style.border="4px solid white"
    document.getElementById("p").style.border="4px solid white"
    document.getElementById("s").style.border="4px solid red"
    usrChoice = "scissors";
    compPlays();
}

function compPlays() {



    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            compChoice = "rock";
            document.getElementById("r").style.border="4px solid blue"
            break;
        case 1:
            compChoice = "paper";
            document.getElementById("p").style.border="4px solid blue"
            break;
        case 2:
            compChoice = "scissors";
            document.getElementById("s").style.border="4px solid blue"
            break;
        default:
            break;
    }

    switch (true) {
        case usrChoice == compChoice:
            document.getElementById("result").innerHTML="It's a draw, try again!";
            document.getElementById("result").style.visibility="visible";
            document.getElementById(usrChoice.substr(0,1)).style.border="4px solid grey"
            break;
        
        case (usrChoice == "rock" && compChoice == "paper") ||
             (usrChoice == "paper" && compChoice == "scissors") ||
             (usrChoice == "scissors" && compChoice == "rock"):
            youLose();
            break;
        
        case (usrChoice == "rock" && compChoice == "scissors") ||
             (usrChoice == "paper" && compChoice == "rock") ||
             (usrChoice == "scissors" && compChoice == "paper"):
            youWin();
            break;
    
        default:
            break;
    }

}

function youLose(){
    document.getElementById("result").innerHTML="Computer's <span class='choiceSpanc'>" + compChoice + 
    "</span> beats your <span class='choiceSpanu'>" + usrChoice + "</span>";
    document.getElementById("result").style.visibility="visible";

    compScr++;
    document.getElementById("compScore").innerHTML=compScr;
}

function youWin(){
    document.getElementById("result").innerHTML="Your <span class='choiceSpanu'>" + usrChoice + 
    "</span> beats computer's <span class='choiceSpanc'>" + compChoice + "</span>";
    document.getElementById("result").style.visibility="visible";

    usrScr++;
    document.getElementById("usrScore").innerHTML=usrScr;
}