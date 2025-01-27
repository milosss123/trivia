let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let selectedQuestions = [];
let tema = '';

const questions = {
    geografija: [
        { question: 'Koji je glavni grad Srbije?', answers: { a: 'Beograd', b: 'Novi Sad', c: 'Niš', d: 'Subotica' }, correct: 'a' },
        // Dodaj još 19 pitanja za geografiju
    ],
    matematika: [
        { question: 'Koliko je 2 + 2?', answers: { a: '3', b: '4', c: '5', d: '6' }, correct: 'b' },
        // Dodaj još 19 pitanja za matematiku
    ],
    istorija: [
        { question: 'Ko je bio prvi kralj Srbije?', answers: { a: 'Milan Obrenović', b: 'Petar Karađorđević', c: 'Stefan Prvovenčani', d: 'Dušan Silni' }, correct: 'c' },
        // Dodaj još 19 pitanja za istoriju
    ],
};

function startQuiz() {
    tema = document.getElementById('tema').value;
    const brojPitanja = parseInt(document.getElementById('broj-pitanja').value);

    if (!questions[tema] || brojPitanja < 5 || brojPitanja > 20) {
        alert('Molimo izaberite validan broj pitanja i temu.');
        return;
    }

    selectedQuestions = questions[tema].slice(0, brojPitanja);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;

    document.getElementById('main-page').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');

    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        endQuiz();
        return;
    }

    const question = selectedQuestions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;

    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach((btn, index) => {
        const option = ['a', 'b', 'c', 'd'][index];
        btn.innerText = question.answers[option];
        btn.setAttribute('data-answer', option);
    });
}

function checkAnswer(answer) {
    const question = selectedQuestions[currentQuestionIndex];

    if (answer === question.correct) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }

    currentQuestionIndex++;
    loadQuestion();
}

function endQuiz() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-page').classList.remove('hidden');

    document.getElementById('final-result').innerText = `
        Tačni odgovori: ${correctAnswers}\n
        Netačni odgovori: ${wrongAnswers}
    `;
}

function resetQuiz() {
    document.getElementById('result-page').classList.add('hidden');
    document.getElementById('main-page').classList.remove('hidden');
}
