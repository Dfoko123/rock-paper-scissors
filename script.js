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
console.log(getComputerChoice());
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
console.log(gethumanChoice());
let humanScore=0;
let computerScore=0;
