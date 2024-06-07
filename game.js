
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
    console.log('Computer choice: ' + computer_choice_str);
    return computer_choice_str;
}


function getUserChoice(){
    let valid = false;
    let count = 0;
    let user_input;
    while(!valid){
   
        user_input = prompt('Please enter your choice: \'Scissor\',\'Rock\' or \'Paper\'','Scissor');
        user_input = user_input.toUpperCase();
        console.log('User choice: '+ user_input);
        
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
            console.log('I ask the computer to do wrong things')
    } 
    console.log(`Score now is : Human: ${humanScore}, computer: ${computerScore}`);

}


function playGame(){
    for(let i=0;i<5;i++){
        console.log('--------------------')
        console.log('Round: '+ i);
        playRound();
        console.log('--------------------')

    }
}
playGame();