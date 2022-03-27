


//  Variables 
var startbtn = document.querySelector('.startbtn') ;
var highScore = document.getElementById('highscore');
var mainContainer = document.querySelector('.mainContainer');
var containerBtn = document.querySelector('.containerbtn');
var choices = document.querySelectorAll('.choice');
var choiceContainer = document.querySelector('.Choices-container')

// Questions that will display after button is clicked
var questions = [
    {
    Question: 'This is question 1',
    choiceA: 'choice 1',
    choiceB: 'choice 2',
    choiceC: 'choice 3',
    choiceD: 'choice 4',
},
{ 
    Question: 'This is question 2',
    choiceA: 'choice 1',
    choiceB: 'choice 2',
    choiceC: 'choice 3',
    choiceD: 'choice 4',
}
]



// Gets question container
var questionContainer = document.querySelector('.Questions-container');

// Function that starts quiz and first question appears

function startQuiz(){
    
    questionContainer.style.display = 'block';
}








// Time variables
var timer = document.getElementById('timer');
var secondsLeft = 75;

// Function starts timer
function setTime() {
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;

    if (secondsLeft === 0) {
        clearInterval(timerInterval);    
    }
}, 1000)
}


// When button is clicked, timer starts and first questions appears
startbtn.addEventListener('click', function () {
    mainContainer.style.display = 'none';
    containerBtn.style.display = 'none';
    startQuiz()
    setTime()
    
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


