const strikeButton = document.getElementById("strike");
const resetButton = document.getElementById("reset");
const $team1Score = document.getElementById("score-team1");
const $team1Wickets = document.getElementById("wickets-team1");
const $team2Score = document.getElementById("score-team2");
const $team2Wickets = document.getElementById("wickets-team2");

const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");

var team1Score = 0;
var team1Wickets = 0;
var team2Score = 0;
var team2Wickets = 0;
var team1BallsFaced = 0;
var team2BallsFaced = 0;
var turn = 1;

const possibleOutcomes = [0, 1, 2, 3, 4, 6, "W"];
// Iteration 3: Write a Game over function

// Iteration 4: Write an update score function

// Reset button function
resetButton.onclick = () => {
  window.location.reload();
};

// Iteration 5: Write a function for Strike button
