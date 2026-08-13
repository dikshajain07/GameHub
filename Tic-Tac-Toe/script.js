// box structure 
// 012
// 345
// 678

// player wins if condn 
// 012, 345, 678, 036, 147, 258, 048, 246
alert("Welcome to Tic Tac Toe Game! \n\nPlayer 1 : O \nPlayer 2 : X. \nPlayer 1 (O) will start the game first.");
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newGamebtn= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let turn0 = true; // tells whose turn is this, its 0 player turn first
const Winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}; // makes every box unclickable to avoid dbl click

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
}; // make box clickable , for new game with clear box

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const resetGame = () => {
    turn0 = true;
    enableBoxes(); 
    msgContainer.classList.add("hide");
};


boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("Box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0= true;
        }
        box.disabled= true;
//Disable this button so user cannt click it again
        checkWinner();
    });
});

const checkWinner=()=>{
    for (let pattern of Winpattern) { // go thr every winning pattern and check .. 
        //  3 lines below are to get value of posn. 
        // in this we first get index of winning pattern and then get value of that index from boxes array.
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {// posn value must nt be empty 
        if (pos1Val === pos2Val && pos2Val === pos3Val) { // values must be same.
            console.log("Winner", pos1Val);
            showWinner(pos1Val);
        }
    }
}
}


newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
