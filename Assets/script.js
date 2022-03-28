


//  Variables 
var startbtn = document.querySelector('.startbtn') ;
var highScore = document.getElementById('highscore');
var mainContainer = document.querySelector('.mainContainer');
var containerBtn = document.querySelector('.containerbtn');
// var choices = document.querySelectorAll('.choice');
// var choiceContainer = document.querySelector('.Choices-container')

// Questions that will display after button is clicked
var questions = [
    {
        // Question 0
    Question: 'This is question 1',
    choices: ['choice1', 'choice2', 'choice3', 'choice4'],
    correctAnswer: 'choice3'
},
{ 
    // Question 1
    Question: 'This is question 2',
    choices: ['choice1', 'choice2', 'choice3', 'choice4'],
    correctAnswer: 'choice1'
}
]

function getQuestions(questionIndex) {

}



// Gets DOM and creates variables for questions
var questionContainer = document.querySelector('.Questions-container');
var questionEl = document.getElementById('questionEl')
var choice1 = document.querySelector('#choice1')
var choice2 = document.getElementById('choice2')
var choice3 = document.getElementById('choice3') 
var choice4 = document.getElementById('choice4')
var questionLength = questions.length;
var questionIndex = 0;
var score = 0;




// Function that starts quiz and first question appears
function startQuiz(){
    questionContainer.style.display = 'block';
    mainContainer.style.display = 'none';
    containerBtn.style.display = 'none';
    questionIndex = 0;

    setTime();
    setQuestion();
    checkAnswer();
}

function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].Question;
        choice1.textContent = questions[id].choices[0];
        choice2.textContent = questions[id].choices[1];
        choice3.textContent = questions[id].choices[2];
        choice4.textContent = questions[id].choices[3];

    }
}

function checkAnswer(event) {
    event.preventDefault();

    if (questions[questionIndex].correctAnswer === event.target.value) {
    
    } else if (questions[questionIndex].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
    }
    
}






// Time variables
var timer = document.getElementById('timer');
var secondsLeft = 75;

// Function to start timer
function setTime() {
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;

    if (secondsLeft === 0 || questionIndex === questions.length) {
        clearInterval(timerInterval);   
        questionContainer.style.display = 'none' 
    }
}, 1000)
}


// When button is clicked, timer starts and first questions appears
startbtn.addEventListener('click', function () {
            startQuiz()
    


    }

);









// GIVEN I am taking a code quiz
// WHEN I click the start button
// Step 1: THEN a timer starts and I am presented with a question






// WHEN I answer a question
// Step 2: THEN I am presented with another question




// WHEN I answer a question incorrectly
// Step 3: THEN time is subtracted from the clock






// WHEN all questions are answered or the timer reaches 0
// Step 4: THEN the game is over









// WHEN the game is over
// Step 5: THEN I can save my initials and my score


