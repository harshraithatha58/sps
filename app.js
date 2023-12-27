let userScore = 0;
let computerScore= 0;

const choises = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#userScore")
const computerScorePara = document.querySelector("#computerScore")

const genrateComputerChoice = () => {
    const option = ["Rock", "Paper", "Scissors"]
    const userIdX = Math.floor(Math.random() * 3);
    return option[userIdX]
}
const draw = () => {
    msg.innerText = "Draw";
    msg.style.backgroundColor = "#1d3557";
    msg.style.color = "#fdf0d5"
}
const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
        msg.style.color = "#fdf0d5"
    } else {
        msg.innerText = "You Lose";
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.style.backgroundColor = "red";
        msg.style.color = "#fdf0d5"
    }
}
const playGame = (userChoice) => {
    const compChoice = genrateComputerChoice(userChoice);
    console.log(compChoice);

    if (compChoice === userChoice) {
        draw();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Scissors" ? false : true;
        } else {
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choises.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    })
})