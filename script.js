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
