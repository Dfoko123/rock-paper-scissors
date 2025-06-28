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
let humanScore=0;
let computerScore=0;
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
let computerSelection=getComputerChoice();
let humanSelection=gethumanChoice();
playRound(humanSelection,computerSelection);