const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
// let questionTwo = "True or false: 5 kilometer == 5000 meters? ";
// let questionThree = "(5 + 3)/2 * 10 = ? ";
// let questionFour = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ";
// let questionFive = "What is the minimum crew size for the ISS? ";

let correctAnswer = "Sally Ride";
// let correctAnsTwo = "true";
// let correctAnsThree = "40";
// let correctAnsFour = "Trajectory";
// let correctAnsFive = 3;

let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your full name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

let feedback = `1) Your Answer: ${candidateAnswers[0]}
Correct Answer: ${correctAnswers[0]}

2) Your Answer: ${candidateAnswers[1]}
Correct Answer: ${correctAnswers[1]}

3) Your Answer: ${candidateAnswers[2]}
Correct Answer: ${correctAnswers[2]}

4) Your Answer: ${candidateAnswers[3]}
Correct Answer: ${correctAnswers[3]}

5) Your Answer: ${candidateAnswers[4]}
Correct Answer: ${correctAnswers[4]}`

console.log(feedback);

  let grade = 0, numCorrectAns = [];  //TODO 3.2 use this variable to calculate the candidates score.
  
  candidateAnswers.splice(0, 1, candidateAnswers[0].toLowerCase());
  candidateAnswers.splice(1, 1, candidateAnswers[1].toLowerCase());
  candidateAnswers.splice(3, 1, candidateAnswers[3].toLowerCase());

  correctAnswers.splice(0, 1, correctAnswers[0].toLowerCase());
  correctAnswers.splice(1, 1, correctAnswers[1].toLowerCase());
  correctAnswers.splice(3, 1, correctAnswers[3].toLowerCase());

  for (let i = 0; candidateAnswers[i]; i++) {
    if (candidateAnswers[i] === correctAnswers[i]) {
      numCorrectAns.push(candidateAnswers[i] === correctAnswers[i]);
    }
  }

  grade = (numCorrectAns.length / questions.length) * 100;
  console.log(`${grade}%`);

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " + candidateName + "!");
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