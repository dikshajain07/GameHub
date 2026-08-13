let userScore = 0;
let computerScore = 0;
const choices= document.querySelectorAll('.choice');
const msg= document.querySelector('#msg');
const userScorepara= document.querySelector('#user-score');
const computerScorepara= document.querySelector('#computer-score');

const drawGame=()=>{
     console.log("Game is draw");
     msg.innerText="Game is draw. Play again";
     msg.style.backgroundColor= "#081b31";
}
const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        console.log("User won the game");
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScorepara.innerText= userScore;
    }else{
        console.log("Computer won the game");
        msg.innerText=`You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        computerScore++;
        computerScorepara.innerText= computerScore;
    }
}
const gencompchoice=()=>{
    const options=['stone', 'paper', 'scissor'];
    return options[Math.floor(Math.random() * 3)];
}
const playGame=(userChoice)=>{
    console.log("user choice=", userChoice);
    const compChoice= gencompchoice();
    console.log("computer choice=", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin= true;
        if(userChoice === "stone"){
            userWin= compChoice=== "paper" ? false: true;
        }else if(userChoice === "paper"){
            userWin= compChoice=== "scissor" ? false: true;
        }else{ // user has scissor here
            userWin= compChoice=== "stone" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice)=> {
    choice.addEventListener('click', ()=>{
         const userChoice= choice.getAttribute("id");
         console.log("choice was clicked", userChoice);
         playGame(userChoice);
    })
})
