let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.getElementById("msg");
let userScorepara = document.getElementById("user-score");
let compScorepara = document.getElementById("comp-score");

const genCompMove = () => {
    const options = ["rock", "paper", "scissors"];
    let ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const GameDraw = () => {
    msg.innerText = `Game was Draw!.`;
    msg.style.backgroundColor = "#e0aaff";
    msg.style.color = "#3c096c";
}

const shoWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerHTML = `${userScore}`;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";

    } else {
        compScore++;
        compScorepara.innerHTML = `${compScore}`;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}

const PlayGame = (userChoice) => {
    console.log("userchoice= ",userChoice);
    let compChoice = genCompMove();
    console.log("compchoice =", compChoice);
    if(userChoice === compChoice){
        GameDraw();
    } else {
        let userWin = true;
        if(userWin === "rock"){
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userWin === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }else {
            //rock,paper
            userWin = compChoice === "rock" ? false :true;
        }
        shoWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        PlayGame(userChoice);
    })
})