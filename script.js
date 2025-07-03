function getComputerChoice(){
    let c= Math.floor(Math.random()*3)+1;
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
function DomDisplayed(choice,computerChoice,container){
    
        let div2=document.createElement("div");
        let para=document.createElement("p");
        para.textContent=playRound(choice,computerChoice);
        div2.appendChild(para);
        container.appendChild(div2);
     }
   

function gethumanChoice(){
    let container=document.querySelector('#container');
    container.addEventListener('click',(event)=>{
        let target=event.target;
        switch(target.id){
            case 'btn1':
                let choice="rock";
                let computer1=getComputerChoice();
                DomDisplayed(choice,computer1,container);
                break;
            case 'btn2':
                let choice1="paper";
                let computer2=getComputerChoice();
                DomDisplayed(choice1,computer2,container);
                break;
            case 'btn3':
                let choice2="scissors";
                let computer3=getComputerChoice();
                DomDisplayed(choice2,computer3,container);
                break;
        }
    });
}
gethumanChoice();
function playRound(humanChoice, computerChoice){
    let i=humanScore;
    let j=computerScore;
    while(i<5 && j<5){
        if(humanChoice==='rock'){
            if(computerChoice==='paper'){
                computerScore++;
                return `paper beats rock`;
            }
            else if( computerChoice==='scissors'){
                humanScore++;
                return `rock beats scissors`;
            }
            else if(computerChoice==='rock'){
                return `egality`;
            }
        }
        else if(humanChoice==='paper'){
            if(computerChoice==='rock'){
                humanScore++;
                return `paper beats rock`;
            }
            else if(computerChoice==='scissors'){
                computerScore++;
                return `scissors beats paper`;
            }
            else if(computerChoice==='paper'){
                return `egality`;
            }
            
        }
        else if(humanChoice==='scissors' ){
            if(computerChoice==='paper'){
                humanScore++;
                return `scissors beats paper`;
            }
            else if(computerChoice==='rock'){
                computerScore++;
                return `rock beats scissors`;
            }
            else if(computerChoice==='scissors'){
                return `egality`;
            }
            
        }
        else{
            return `error`;
        }
    }
    if(humanScore<computerScore){
        return `computer is Winner, computerScore:${computerScore}:humanScore:${humanScore} `;
    }  
    else{
        return `human is winner, humanScore:${humanScore} : computerScore:${computerScore}`;
    } 
}
let humanScore=0;
let computerScore=0;
