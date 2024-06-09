let score = JSON.parse(localStorage.getItem("score")) || {
  Ties: 0,
  wins: 0,
  losses: 0,
}; // for first time user, there would be no local storage hence it will read null
updateScore();

let isPlay=true;
let IntervalId;
document.querySelector('.js-reset').addEventListener('click',()=>{
    score.Ties = 0;
    score.wins = 0;
    score.losses = 0;
    localStorage.setItem("score", JSON.stringify(score));
    updateScore();
})

document.querySelector('.js-autoplay').addEventListener('click',()=>{
    if(isPlay){
        clearInterval(IntervalId);
        isPlay=false;
    }else{

        const playerMove=pickComputerMove();
        IntervalId=setInterval(()=>{
            playGame(playerMove);
        },1000);
        isPlay=true;
    }
    
})

function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.Ties}`;
}

document.querySelector('.js-rock-button').addEventListener('click',
    ()=>{
        playGame('rock');
    }
)

document.querySelector('.js-paper-button').addEventListener('click',
    ()=>{
        playGame('paper');
    }
)

document.querySelector('.js-scissors-button').addEventListener('click',
    ()=>{
        playGame('scissors');
    }
)


function playGame(playerMove) {
  let result = "";
  const computerMove = pickComputerMove();
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You Lost.";
    } else {
      result = "You Win.";
    }
  } else if (playerMove == "paper") {
    if (computerMove === "rock") {
      result = "You Win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else {
      result = "You Lost.";
    }
  } else {
    if (computerMove === "rock") {
      result = "You Lost.";
    } else if (computerMove === "paper") {
      result = "You Win.";
    } else {
      result = "Tie.";
    }
  }
  document.querySelector(".js-result").innerHTML = result;
  if (result === "You Win.") {
    score.wins += 1;
  } else if (result === "You Lost.") {
    score.losses += 1;
  } else {
    score.Ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.Ties}`;

  document.querySelector(
    ".js-move"
  ).innerHTML = `You  <img src="images/${playerMove}-emoji.png" class="move-icon">  <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer `;

//   alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
//         Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.Ties}
//         `);
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}
