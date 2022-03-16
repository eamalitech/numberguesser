let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const getAbsoluteDistance = (secretTarget, guess) => {
    let distance = Math.abs(secretTarget - guess);
    return distance;
  };
  
  const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    if(userGuess < 0 || userGuess > 9){
    alert("The number is out of range");
    }
    
    let closenessUser = getAbsoluteDistance(secretTarget, userGuess);
    let closenessComputer = getAbsoluteDistance(secretTarget, computerGuess);
  
    if (closenessUser === closenessComputer){
      return 'The User wins!';
    }
  
    if (closenessUser < closenessComputer){
      return true;
    } else {
      return false;
    }
  };
  
  const updateScore = theWinner => {
    if(theWinner = 'human'){
      humanScore++;
    }else{
      computerScore++;
    }
  };
  
  const advanceRound = () => {
    currentRoundNumber++;
  }
  
  console.log(generateTarget());