const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionELement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffleQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    shuffleQuestions = question.sort(() => Math.random() - .5)

    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionELement.innerHTML = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerHTML = 'Restart'
        startButton.classList.remove('hide')
    }


}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

const question = [{
        question: 'what is あ?',
        answers: [
            { text: 'I', correct: false },
            { text: 'A', correct: true },
            { text: 'O', correct: false },
            { text: 'U', correct: false },
        ]
    }, {
        question: 'what is う?',
        answers: [
            { text: 'A', correct: false },
            { text: 'E', correct: false },
            { text: 'O', correct: false },
            { text: 'U', correct: true },
        ]
    }, {
        question: 'what is を?',
        answers: [
            { text: 'E', correct: false },
            { text: 'I', correct: false },
            { text: 'O', correct: true },
            { text: 'A', correct: false },
        ]
    }, {
        question: 'what is え?',
        answers: [
            { text: 'E', correct: true },
            { text: 'A', correct: false },
            { text: 'I', correct: false },
            { text: 'O', correct: false },
        ]
    }, {
        question: 'what is い?',
        answers: [
            { text: 'A', correct: false },
            { text: 'O', correct: false },
            { text: 'I', correct: true },
            { text: 'U', correct: false },
        ]
    }

]