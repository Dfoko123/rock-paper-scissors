function getComputerChoice(){
    let c= Math.floor(Math.random()*2)+1;
    if(c===1){
        return "rock";
    }
    else if(c===2){
        return "paper";
    }
    else{
        return "scissors";
    }
}
function gethumanChoice(){
    let choice=prompt("Que choisisez vous?: ");
    choice=choice.toLowerCase();
    if(choice==="rock" || choice=="paper" || choice==="scissors"){
        return choice;
    }
    else{
        console.log("Please choose between paper, rock, scissors and try again");
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice==='paper'&& computerChoice==='rock'){
        console.log('paper beats rock');
        console.log(`humanScore:${++humanScore}`);
    }
    else if(computerChoice==='paper'&& humanChoice==='rock'){
        console.log('paper beats rock');
        console.log(`computerScore:${++computerScore}`);
    }
    else if(humanChoice==='rock'&& computerChoice==='scissors'){
        console.log('rock beats scissors');
        console.log(`humanScore:${++humanScore}`);
    }
    else if(computerChoice==='rock'&& humanChoice==='scissors'){
        console.log('rock beats scissors');
        console.log(`computerScore:${++computerScore}`);
    }
    else if(humanChoice==='scissors' && computerChoice==='paper'){
        console.log('scissors beats paper');
        console.log(`humanScore:${++humanScore}`);
    }
    else if(computerChoice==='scissors' && humanChoice==='paper'){
        console.log('scissors beats paper');
        console.log(`computerScore:${++computerScore}`);
    }
    else if(computerChoice===humanChoice){
        console.log("egality");
    }
    else{
        console.log("error");
    }
}
let humanScore=0;
let computerScore=0;
function playGame(){
    console.log("Round 1");
    let computerSelection=getComputerChoice();
    let humanSelection=gethumanChoice();
    playRound(computerSelection,humanSelection);
    console.log("Round 2");
    let computSelection=getComputerChoice();
    let humSelection=gethumanChoice();
    playRound(computSelection,humSelection);
    console.log("Round 3");
    let computerSelection3=getComputerChoice();
    let humanSelection3=gethumanChoice();
    playRound(computerSelection3,humanSelection3);
    console.log("Round 4");
    let computerSelection4=getComputerChoice();
    let humanSelection4=gethumanChoice();
    playRound(computerSelection4,humanSelection4);
    console.log("Round 5")
    let computerSelection5=getComputerChoice();
    let humanSelection5=gethumanChoice();
    playRound(computerSelection5,humanSelection5);
    if (humanScore>computerScore){
        console.log("Human is winner");
    }
    else if(humanScore<computerScore){
        console.log("Computer is winner")
    }
    else{
        console.log("equal, no winner");
    }
}
playGame();
