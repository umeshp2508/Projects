let result;
function generatoComputerChoice(){
    let randomeNumber = Math.random() * 3;
    
    if(randomeNumber > 0 && randomeNumber <= 1){
        return 'Bat';
    }else if(randomeNumber >1 && randomeNumber <=2){
        return 'Ball';
    }
    else{
        return 'Stump';
    }
}
function userChoice(computerChoice, userChoice){
    if(computerChoice == userChoice){
        result = 'Match Tie';
    }
    else if(userChoice === 'Bat' && computerChoice === 'Ball'){
        result = 'User Wins';
    }else if(userChoice === 'Bat' && computerChoice === 'Stump'){
        result = 'Computer Wins.'
    }else if(userChoice === 'Ball' && computerChoice === 'Bat'){
        result ='Computer Wins';
    }else if(userChoice == 'Ball' && computerChoice === 'Stump'){
        result = 'User Wins.'
    }else if(userChoice === 'Stump' && computerChoice === 'Bat'){
        result ='User Wins';
    }else if(userChoice == 'Stump' && computerChoice === 'Ball'){
        result = 'Computer Wins.'
    }

    return alert(`Your Have Chosen ${userChoice}. Computer Choice is ${computerChoice} : ${result}`);
}