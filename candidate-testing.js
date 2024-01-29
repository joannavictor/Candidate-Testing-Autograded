const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer ="";
let numberOfCorrectAns = 0;

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
 //      candidateAnswer = input.question("1. Who was the first American woman in space? ");  
 //      console.log(questions.length);

 //part 3 - start
      for(let i = 0; i < questions.length; i++) {
        candidateAnswers[i] = input.question(questions[i]);
          }
//part - 3 - end

    }
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // Part 2 - start
  numberOfCorrectAns = 0;
  for(let i = 0; i < questions.length; i++) {
  candidateAnswers[i] = candidateAnswers[i].toLowerCase();
  correctAnswers[i] = correctAnswers[i].toLowerCase();
  if ((candidateAnswers[i]) === (correctAnswers[i])) {
       console.log (`Great Job!!! ${candidateAnswers[i]} is the correct answer`);
       numberOfCorrectAns = numberOfCorrectAns + 1;
  } else {
  console.log (`Sorry!!! ${candidateAnswers[i]} is in-correct answer`);
    }
  }
 // part 3 - end
  
 let grade;  //TODO 3.2 use this variable to calculate the candidates score.

  function percentage(numberOfCorrectAns,numberOfQuizQuestions) {
    grade =  (((numberOfCorrectAns)/(numberOfQuizQuestions))*100);
    return grade;
  }
  let numberOfQuizQuestions = questions.length;

  percentage(numberOfCorrectAns,numberOfQuizQuestions);
  console.log(`******************************************************************'`)
  if (grade < 80 )
  {
  console.log(`Test Result - Failed with ${grade}% - Better Luck Next Time!!!`);
  }
  else {
  console.log(`Congratulations ${candidateName} , You have passed with ${grade}% `);
   }
  
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