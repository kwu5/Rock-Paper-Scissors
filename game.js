let msg ='';
let user_input;


function getComputerChoice(){
    const computer_choice_number = Math.random();
    let computer_choice_str;
    if(computer_choice_number <= 0.3){
        computer_choice_str = 'SCISSOR';
    }else if (computer_choice_number <= 0.6){
        computer_choice_str = 'ROCK';
    }else{
        computer_choice_str = 'PAPER';
    }
    msg+= ('Computer choice: ' + computer_choice_str + "\r\n");
    return computer_choice_str;
}


function getUserChoice(){
    let valid = false;
    let count = 0;
    while(!valid){
        msg += 'User choice: '+ user_input+ '\r\n';
        
        if(user_input == 'SCISSOR' || user_input=='ROCK' || user_input=='PAPER' || count == 5){
            valid = true;   
        }else{
            alert('Not a valid input, please enter a valid input');
            count ++;
        }
    }
    return user_input;
}


let humanScore=0 ;
let computerScore = 0;

function playRound(){
    let humanChoice = getUserChoice();
    let computerChoice  = getComputerChoice();
    
    
    switch (humanChoice){
        case 'ROCK':
            if(computerChoice == 'SCISSOR')     humanScore++;
            else if(computerChoice == 'PAPER')  computerScore++;
            break;
        case 'SCISSOR':
            if(computerChoice == 'PAPER')     humanScore++;
            else if(computerChoice == 'ROCK')  computerScore++;
            break;
        case 'PAPER':
            if(computerChoice == 'PAPER')     humanScore++;
            else if(computerChoice == 'ROCK')  computerScore++;
            break;
        default:
            msg+= ('I ask the computer to do wrong things\r\n')
   } 
    msg+= (`Score now is : Human: ${humanScore}, computer: ${computerScore}\r\n`);

}

let container = document.querySelector("#container");
let btn_rock = document.createElement("button");
let btn_scissor = document.createElement("button");
let btn_paper = document.createElement("button");


let counter = 0;

btn_rock.textContent = "ROCK";
btn_rock.addEventListener("click", () => {
    user_input = "ROCK";
    playGame();
})
container.appendChild(btn_rock);

btn_scissor.textContent = "SCISSOR";
btn_scissor.addEventListener("click", () => {
        user_input = "SCISSOR";
        playGame();
    })
container.appendChild(btn_scissor);

btn_paper.textContent = "PAPER";
btn_paper.addEventListener("click", () => {
        user_input = "PAPER";
        playGame();
    })
container.appendChild(btn_paper);

const playGame = ()=>{
    let resultDisplay = document.createElement("div");
    if(counter < 5){
        msg = '';
        playRound();
        counter ++;
    }else{
        if(humanScore == computerScore){
            msg = "The game has ended in 5 rounds, no winner (same score)"
        }else{
            const winner = humanScore>computerScore ? 'Human': 'Computer';
            msg = "The game has ended in 5 rounds, winner is :" + winner;
        }
   
    }
    resultDisplay.setAttribute('style','white-space: pre');
    resultDisplay.textContent = msg;
    container.appendChild(resultDisplay);
}
