let computerChoice;
let result;
function generatoComputerChoice(){
    let randomeNumber = Math.random() * 3;
    
    if(randomeNumber > 0 && randomeNumber <= 1){
        computerChoice = 'Bat';
    }else if(randomeNumber >1 && randomeNumber <=2){
        computerChoice = 'Ball';
    }
    else{
        computerChoice = 'Stump';
    }
}

function bat(){
    if(computerChoice == 'Ball'){
        result = 'User Won.';
    }
    else if(computerChoice == 'Bat'){
        result = 'Match Tie';
    }else if(computerChoice == 'Stump'){
        result = 'Computer Wins.'
    }

    return alert(`Your Have Chosen Bat. Computer Choice is ${computerChoice} : ${result}`);
}
function ball(){
    if(computerChoice == 'Ball'){
        result = 'Match Tie.';
    }
    else if(computerChoice == 'Bat'){
        result = 'Computer Wins';
    }else if(computerChoice == 'Stump'){
        result ='User Wins.';
    }
    return alert(`Your Have Chosen Ball. Computer Choice is ${computerChoice} : ${result}`);
}
function stump(){
    if(computerChoice == 'Ball'){
        result = 'Computer Wins.';
    }
    else if(computerChoice == 'Bat'){
        result= 'User Wins';
    }else if(computerChoice == 'Stump'){
        result = 'Math Tie.';
    }
    return alert(`Your Have Chosen Stump. Computer Choice is ${computerChoice} : ${result}`);
}