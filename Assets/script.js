


//  Variables 
var startbtn = document.querySelector('.startbtn');
var highScore = document.getElementById('highscore');
var mainContainer = document.querySelector('.mainContainer');
var containerBtn = document.querySelector('.containerbtn');
var finallink = document.getElementById('finallink')
var final = document.querySelector('#final')
var finalbtn = document.querySelector('#finalbtn');
var resetbtn = document.querySelector('#resetbtn')
var start

// Questions that will display after button is clicked
var questions = [
    {
        // Question 0
        Question: 'What does NaN stand for?',
        choices: ['Not a no', 'Not a number', 'Not a Numba', 'No ashton no'],
        correctAnswer: 'Not a number'
    },
    {
        // Question 1
        Question: 'Which syntax gets the first element from an array?',
        choices: ['unshift()', 'shift()', 'pop()', 'get()'],
        correctAnswer: 'unshift()'
    },
    {   // Question 2
        Question: 'What is the difference between == and === operators?',
        choices: ['Compare values', 'Equal sign', 'Snake', 'Compare both value and types'],
        correctAnswer: 'Compare both value and types'
    },
    {   // Question 3
        Question: 'Which file is best used to style elements?',
        choices: ['script.js', 'index.html', 'me.css', 'me.scc'],
        correctAnswer: 'me.css'
    },
    {
        // Question 4
        Question: 'Which key brings up vscode in github?',
        choices: ['G', 'V', '.', 'C'],
        correctAnswer: '.'
    }

]


// Gets DOM and creates variables for questions
var questionContainer = document.querySelector('#questionsContainer');
var questionEl = document.getElementById('questionEl')
var choice1 = document.querySelector('#choice1')
var choice2 = document.getElementById('choice2')
var choice3 = document.getElementById('choice3')
var choice4 = document.getElementById('choice4')
var allChoices = document.getElementsByClassName('choice')
var inputName = document.querySelector('.inputName')

// Time and score variables
var timer = document.getElementById('timer');
var secondsLeft = 75;
var questionLength = questions.length;
var questionIndex = 0;
var score = 0;
var userName = finallink.value;

// Gets question from array
questionContainer.addEventListener('click', function (e) {

    var choiceClicked = e.target.innerText;
    if (choiceClicked === questions[questionIndex].correctAnswer) {
        console.log('corectAnswer')
        score = score + 10;
    } else {
        secondsLeft = secondsLeft - 10;
        alert('Incorrect')
    }
    questionIndex++;
    nextQuestion();
})
// reset button if game is over
resetbtn.addEventListener('click', function () {
    final.style.display = 'none';
    questionContainer.style.display = 'none';
    mainContainer.style.display = 'block';
    containerBtn.style.display = 'block';
    finallink.value = '';
    questionIndex = 0;
    secondsLeft = 75;
//Display beginning
    mainContainer.style.display = 'block';
    containerBtn.style.display = 'block';
    questionEl.innerText = questions[questionIndex].Question;
    choice1.textContent = questions[questionIndex].choices[0];
    choice2.textContent = questions[questionIndex].choices[1];
    choice3.textContent = questions[questionIndex].choices[2];
    choice4.textContent = questions[questionIndex].choices[3];
    // time starts function
    setTime();
    
    
})


// Starts next question and sets local storage
function nextQuestion() {
    if (questionIndex === questionLength) {
        alert(`GAME OVER your score is ${score}`)
        final.style.display = 'block'
        var currentHighscore;
        if (localStorage.getItem('HS')) {
            currentHighscore = localStorage.getItem('HS');
            
        } else {
            currentHighscore = 0;
        }
        finalbtn.addEventListener('click', function () {

            if (currentHighscore < score) {
                
                localStorage.setItem('Highscore', `${finallink.value}: ${score}`)
                localStorage.setItem('HS', `${score}`);
                return alert(`You have set a new High Score! ${localStorage.getItem("Highscore")} `)
                
            }
            inputName.innerText = localStorage.setItem('Highscore', `${finallink.value}: ${score}`);
            localStorage.setItem('NewScore', `${finallink.value}: ${score}`);
            inputName.innerText = localStorage.getItem('NewScore', `${finallink.value}: ${score}`)
            return alert(`${finallink.value}: ${score}`);
        })
        // Display questions.
    } else {
        questionEl.innerText = questions[questionIndex].Question;
        choice1.textContent = questions[questionIndex].choices[0];
        choice2.textContent = questions[questionIndex].choices[1];
        choice3.textContent = questions[questionIndex].choices[2];
        choice4.textContent = questions[questionIndex].choices[3];
    }

}
highScore.innerText = `HighScore ${localStorage.getItem('HS') ? localStorage.getItem('HS'):'0'}`;

// Function that starts quiz and first question appears.
function startQuiz() {
    questionContainer.style.display = 'block';
    mainContainer.style.display = 'none';
    containerBtn.style.display = 'none';
    questionEl.innerText = questions[questionIndex].Question;
    choice1.textContent = questions[questionIndex].choices[0];
    choice2.textContent = questions[questionIndex].choices[1];
    choice3.textContent = questions[questionIndex].choices[2];
    choice4.textContent = questions[questionIndex].choices[3];
    // time starts functoin
    setTime();
}




// Function to start timer
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0 || questionIndex === questions.length) {
            clearInterval(timerInterval);
            questionContainer.style.display = 'none'
            final.style.display = 'block';
        }
    }, 1000)
}


// When button is clicked, timer starts and first questions appears
startbtn.addEventListener('click', function () {
    // Starts quiz
    startQuiz()

}

);
