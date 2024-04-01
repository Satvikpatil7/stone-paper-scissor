let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "DRAW";
    msg.style.backgroundColor = "rgb(200, 182, 255)";
    msg.style.color = "rgb(7, 59, 76)";
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(compChoice === userChoice){
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userWin = compChoice === 'scissors' ? false : true;
        } else if (userChoice === 'scissors') {
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    } 
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN! Your ${userChoice} beats Computer ${compChoice}`;
        msg.style.backgroundColor = "rgb(6, 214, 160)";
        msg.style.color = "rgb(7, 59, 76)";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOSE! Computer ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "rgb(239, 71, 111)";
        msg.style.color = "rgb(7, 59, 76)";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
