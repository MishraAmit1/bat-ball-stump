const bat = document.querySelector("#bat");
const ball = document.querySelector("#ball");
const stump = document.querySelector("#stump");
const reset = document.querySelector("#reset");
const result_show = document.querySelector("#result_show");

// game ke ruless
// bat => ball rhega to bat jetegha
// ball => stump rhega to ball jetegha
// stump => bat rhega to stump jetegha

// logic
// pehle random number nikalenghe 1 se 3 tk
// 1 aaya toh bat
// 2 aaya toh ball
// 3 aaya toh stump

function alert_Tie() {
  alert("User and You Both Choosen BAT Option that's Why Game will TIE");
}
function alert_Lost() {
  alert(
    "User has Choosen BAT and Computer has Choosen STUMP that's Why Computer won the Game"
  );
}
function alert_Win() {
  alert(
    "User has Choosen BAT and Computer has Choosen BALL that's Why User won the Game"
  );
}
function result_show_on_Screen() {
  result_show.innerHTML = `Total win : ${scoreWala.win} Total Loss : ${scoreWala.lost} Total Tie : ${scoreWala.tie}`;
}

let strScore = localStorage.getItem("Score");
let scoreWala;
if (strScore !== null) {
  scoreWala = JSON.parse(strScore);
  result_show_on_Screen();
} else {
  scoreWala = {
    win: 0,
    lost: 0,
    tie: 0,
  };
}

bat.addEventListener("click", () => {
  let randomNumber = Math.random() * 3;
  let computerChoice;
  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = "BAT";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = "BALL";
  } else {
    computerChoice = "STUMP";
  }
  if (computerChoice === "BAT") {
    scoreWala.tie++;
    alert_Tie();
  } else if (computerChoice === "BALL") {
    scoreWala.win++;
    alert_Win();
  } else {
    scoreWala.lost++;
    alert_Lost();
  }
  result_show_on_Screen();
  localStorage.setItem("Score", JSON.stringify(scoreWala));
});

ball.addEventListener("click", () => {
  let randomNumber = Math.random() * 3;
  let computerChoice;
  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = "BAT";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = "BALL";
  } else {
    computerChoice = "STUMP";
  }
  if (computerChoice === "BALL") {
    scoreWala.tie++;
    alert_Tie();
  } else if (computerChoice === "STUMP") {
    scoreWala.win++;
    alert_Win();
  } else {
    scoreWala.lost++;
    alert_Lost();
  }
  result_show_on_Screen();
  localStorage.setItem("Score", JSON.stringify(scoreWala));
});

stump.addEventListener("click", () => {
  let randomNumber = Math.random() * 3;
  let computerChoice;
  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = "BAT";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = "BALL";
  } else {
    computerChoice = "STUMP";
  }
  if (computerChoice === "STUMP") {
    scoreWala.tie++;
    alert_Tie();
  } else if (computerChoice === "BAT") {
    scoreWala.win++;
    alert_Win();
  } else {
    scoreWala.lost++;
    alert_Lost();
  }
  result_show_on_Screen();
  localStorage.setItem("Score", JSON.stringify(scoreWala));
});

function resetScore() {
  scoreWala = {
    win: 0,
    lost: 0,
    tie: 0,
  };
}
reset.addEventListener("click", () => {
  localStorage.clear();
  resetScore();
  result_show_on_Screen();
});
