const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer ="";


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "];

let correctAnswers = ["Sally Ride","true","40","Trajectory", "3"];

let candidateAnswers = ['','','','',''];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name: ");
  }

function askQuestion() {
 // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
      candidateAnswer = input.question("1. Who was the first American woman in space? ");  
      console.log(questions.length);

 //part 2 - start
      for(let i = 0; i < questions.length; i++) {
        if (i === 0) {
          candidateAnswers[0] = input.question(questions[0]);}
          if (i === 1) {
            candidateAnswers[1] = input.question(questions[1]);}
            if (i === 2) {
              candidateAnswers[2] = input.question(questions[2]);}
              if (i === 3) {
                candidateAnswers[3] = input.question(questions[3]);}
                if (i === 4) {
                  candidateAnswers[4] = input.question(questions[4]);}
              }
//part - 2 - end

    }
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
    if (candidateAnswer == correctAnswer) {
    console.log ("Great Job!!! Correct Answer");
  } else {
    console.log (`Sorry!!! ${candidateAnswer} is incorrect answer`);
  }
  
  let grade;  //TODO 3.2 use this variable to calculate the candidates score.

   // Part 2 - start
 if (candidateAnswers[0] == correctAnswers[0]) {
  console.log (`Great Job!!! Sally Ride is the correct answer`);
  } else {
  console.log (`Sorry!!! ${candidateAnswers[0]} is in-correct answer`);
    }

    if (candidateAnswers[1] == correctAnswers[1]) {
      console.log (`Great Job!!! true is the correct answer`);
    } else {
      console.log (`Sorry!!! ${candidateAnswers[1]} is in-correct answer`);
        }

        if (candidateAnswers[2] == correctAnswers[2]) {
          console.log (`Great Job!!! 40 is the correct answer`);
        } else {
          console.log (`Sorry!!! ${candidateAnswers[2]} is in-correct answer`);
            }

            if (candidateAnswers[3] == correctAnswers[3]) {
              console.log (`Great Job!!! Trajectory is the correct answer`);
            } else {
              console.log (`Sorry!!! ${candidateAnswers[3]} is in-correct answer`);
                }

                if (candidateAnswers[4] == correctAnswers[4]) {
                  console.log (`Great Job!!! 3 is the correct answer`);
                } else {
                  console.log (`Sorry!!! ${candidateAnswers[4]} is in-correct answer`);
                    }
 // part 2 - end
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};