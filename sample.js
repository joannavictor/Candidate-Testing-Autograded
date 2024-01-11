const input = require('readline-sync');
let candidateName = "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer ="";
 candidateName = input.question("Please enter your name: ");
 console.log("Hello " + candidateName);
 candidateAnswer = input.question("Who was the first American woman in space? ");  
  if (candidateAnswer == correctAnswer) {
    console.log ("Good Job!!! Correct Answer");
  } else {
    console.log ("Sorry!!! In-Correct Answer");
  }

