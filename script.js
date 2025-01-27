const questions = {
    geografija: [
        { question: "Koji je najveći kontinent?", answers: { a: "Afrika", b: "Azija", c: "Evropa", d: "Antarktik" }, correct: "b" },
        { question: "Koji je glavni grad Japana?", answers: { a: "Beograd", b: "Tokio", c: "Peking", d: "Seul" }, correct: "b" },
        { question: "Koja država ima najviše jezera?", answers: { a: "Sjedinjene Američke Države", b: "Švedska", c: "Indonezija", d: "Finska" }, correct: "d" },
        { question: "Koja je najviša planina na svetu?", answers: { a: "Kilimandžaro", b: "Everest", c: "Alpi", d: "Aconcagua" }, correct: "b" },
        { question: "Koji je glavni grad Francuske?", answers: { a: "Berlin", b: "Madrid", c: "Pariz", d: "London" }, correct: "c" },
        { question: "Koji je najveći okean na svetu?", answers: { a: "Atlantski", b: "Indijski", c: "Tihi", d: "Arktički" }, correct: "c" },
        { question: "Koja država ima najviše stanovnika?", answers: { a: "Indija", b: "Sjedinjene Američke Države", c: "Kina", d: "Rusija" }, correct: "c" },
        { question: "Koji je najduža reka na svetu?", answers: { a: "Nil", b: "Amazon", c: "Mississippi", d: "Jangce" }, correct: "a" },
        { question: "Koji kontinent se nalazi na južnoj hemisferi?", answers: { a: "Evropa", b: "Azija", c: "Južna Amerika", d: "Antarktika" }, correct: "d" },
        { question: "Koji je glavni grad Italije?", answers: { a: "Milano", b: "Napulj", c: "Roma", d: "Firenca" }, correct: "c" },
        { question: "Koja država je poznata po svom čuvenom čokoladnom jezeru?", answers: { a: "Švajcarska", b: "Nemačka", c: "Belgija", d: "Holandija" }, correct: "a" },
        { question: "Koji je najpoznatiji spomenik u Egiptu?", answers: { a: "Kip slobode", b: "Vezirski piramida", c: "Velika piramida u Gizi", d: "Piramida u Meksiku" }, correct: "c" },
        { question: "Koji je najveći grad u Australiji?", answers: { a: "Sidnej", b: "Melburn", c: "Brisbane", d: "Perth" }, correct: "a" },
        { question: "Koji je glavni grad Rusije?", answers: { a: "Kiev", b: "Moskva", c: "St. Petersburg", d: "Volgograd" }, correct: "b" },
        { question: "Koja država se prostire na dva kontinenta?", answers: { a: "Egipat", b: "Turska", c: "Rusija", d: "Sjedinjene Američke Države" }, correct: "b" },
        { question: "Koji je najhladniji grad na svetu?", answers: { a: "Norilsk", b: "Oymyakon", c: "Moskva", d: "St. Petersburg" }, correct: "b" },
        { question: "Koja je najpoznatija plaža na Havajima?", answers: { a: "Waikiki", b: "Kailua", c: "Maui", d: "Hanauma" }, correct: "a" },
        { question: "Koja država ima najdužu granicu sa Sjedinjenim Američkim Državama?", answers: { a: "Kanada", b: "Meksiko", c: "Brazil", d: "Argentina" }, correct: "a" },
        { question: "Koji je najpoznatiji grad u Brazilu?", answers: { a: "Rio de Janeiro", b: "Sao Paulo", c: "Brasilia", d: "Recife" }, correct: "a" },
        { question: "Koji je najviši vodopad na svetu?", answers: { a: "Angel Falls", b: "Niagara Falls", c: "Victoria Falls", d: "Iguazu Falls" }, correct: "a" },
        { question: "Koji je najstariji grad na svetu?", answers: { a: "Damask", b: "Jerusalim", c: "Rim", d: "Atena" }, correct: "a" },
        { question: "Koja država ima najveći broj jezera na svetu?", answers: { a: "Sjedinjene Američke Države", b: "Kanada", c: "Finska", d: "Švedska" }, correct: "b" }
    ],
    matematika: [
        { question: "Koliko je 2+2?", answers: { a: "3", b: "4", c: "5", d: "6" }, correct: "b" },
        { question: "Koji je rezultat 5*5?", answers: { a: "20", b: "25", c: "30", d: "35" }, correct: "b" },
        { question: "Koliko je 10/2?", answers: { a: "3", b: "5", c: "7", d: "4" }, correct: "b" },
        { question: "Koliko je 15+7?", answers: { a: "21", b: "22", c: "23", d: "24" }, correct: "b" },
        { question: "Koji je kvadrat broja 7?", answers: { a: "49", b: "56", c: "64", d: "36" }, correct: "a" },
        { question: "Koji je rezultat 12/3?", answers: { a: "4", b: "5", c: "6", d: "7" }, correct: "a" },
        { question: "Koliko je 8*8?", answers: { a: "54", b: "60", c: "64", d: "72" }, correct: "c" },
        { question: "Koji je zbir brojeva 15 i 25?", answers: { a: "40", b: "50", c: "60", d: "55" }, correct: "b" },
        { question: "Koliko je 9-4?", answers: { a: "5", b: "6", c: "3", d: "2" }, correct: "a" },
        { question: "Koji je rezultat 20-10?", answers: { a: "5", b: "10", c: "15", d: "20" }, correct: "b" },
        { question: "Koliko je 14*3?", answers: { a: "40", b: "45", c: "50", d: "42" }, correct: "d" },
        { question: "Koji je rezultat 16/4?", answers: { a: "4", b: "5", c: "6", d: "7" }, correct: "a" },
        { question: "Koji je kvadrat broja 12?", answers: { a: "144", b: "121", c: "169", d: "100" }, correct: "a" },
        { question: "Koji je zbir brojeva 19 i 6?", answers: { a: "24", b: "25", c: "26", d: "27" }, correct: "b" },
        { question: "Koji je rezultat 35-18?", answers: { a: "15", b: "16", c: "17", d: "18" }, correct: "c" },
        { question: "Koji je rezultat 7*6?", answers: { a: "30", b: "36", c: "42", d: "48" }, correct: "c" },
        { question: "Koji je rezultat 100/5?", answers: { a: "10", b: "20", c: "15", d: "25" }, correct: "b" },
        { question: "Koji je rezultat 40-8?", answers: { a: "30", b: "32", c: "36", d: "28" }, correct: "a" },
        { question: "Koliko je 9*9?", answers: { a: "60", b: "70", c: "81", d: "90" }, correct: "c" },
        { question: "Koji je zbir brojeva 10 i 25?", answers: { a: "30", b: "35", c: "40", d: "45" }, correct: "b" }
    ],
    istorija: [
        { question: "Kad je bio prvi svetski rat?", answers: { a: "1912-1918", b: "1914-1918", c: "1939-1945", d: "1945-1950" }, correct: "b" },
        { question: "Koji je car imao najdužu vladavinu?", answers: { a: "Napoleon", b: "Julius Caesar", c: "Car Konstantin", d: "Car Justinijan" }, correct: "c" },
        { question: "Koji je bio datum početka Drugog svetskog rata?", answers: { a: "1939-09-01", b: "1940-07-01", c: "1938-10-01", d: "1945-05-08" }, correct: "a" },
        { question: "Koji je naziv vođe Francuske revolucije?", answers: { a: "Maximilien Robespierre", b: "Napoleon Bonaparte", c: "Louis XVI", d: "George Washington" }, correct: "a" },
        { question: "Koji je bio datum pada Berlinskog zida?", answers: { a: "1969", b: "1987", c: "1989", d: "1991" }, correct: "c" },
        { question: "Koji je bio glavni uzrok Prvog svetskog rata?", answers: { a: "Ubistvo Ferdinanda", b: "Ekonomska kriza", c: "Političke tenzije", d: "Verski konflikti" }, correct: "a" },
        { question: "Ko je otkrio Ameriku?", answers: { a: "Vasko da Gama", b: "Hristofor Kolumbo", c: "Ferdinand Magelan", d: "Amerigo Vespuči" }, correct: "b" },
        { question: "Koji je bio najveći imperijum u istoriji?", answers: { a: "Mongolska", b: "Rimska", c: "Britanska", d: "Otomanska" }, correct: "a" },
        { question: "Ko je bio vođa nacističke Nemačke?", answers: { a: "Himmler", b: "Hitler", c: "Goebbels", d: "Göring" }, correct: "b" },
        { question: "Koja je bila glavna sila u Drugom svetskom ratu?", answers: { a: "Sjedinjene Američke Države", b: "Sovjetski Savez", c: "Nemačka", d: "Italija" }, correct: "b" },
        { question: "Koji je događaj označio kraj Rimske Republike?", answers: { a: "Bitka kod Alesije", b: "Bitka kod Zame", c: "Ubijanje Cezara", d: "Osnivanje carstva" }, correct: "c" },
        { question: "Koji je bio osnovni cilj Makedonskog carstva?", answers: { a: "Osvojiti Egipat", b: "Ujediniti svet", c: "Pobijediti Rim", d: "Proširiti trgovinu" }, correct: "b" },
        { question: "Koja je bila glavna religija Rimskog carstva?", answers: { a: "Paganizam", b: "Hrišćanstvo", c: "Judizam", d: "Islam" }, correct: "a" },
        { question: "Ko je napisao 'Ilijadu' i 'Odiseju'?", answers: { a: "Platon", b: "Sokrat", c: "Homer", d: "Aristotel" }, correct: "c" },
        { question: "Koji je bio glavni cilj Napoleonove vojne?", answers: { a: "Širenje Republike", b: "Pobediti Englesku", c: "Osvojiti Evropu", d: "Formirati Savez sa Rusijom" }, correct: "c" },
        { question: "Kada je nastao prvi svetski rat?", answers: { a: "1912", b: "1914", c: "1920", d: "1916" }, correct: "b" }
    ]
};

// Sledi ostatak koda koji sam prethodno dao...


let currentTopic = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let numberOfQuestions = 5;

const images = {
    geografija: 'geografija.jpg', // Slika za geografiju
    matematika: 'matematika.jpg', // Slika za matematiku
    istorija: 'istorija.jpg'     // Slika za istoriju
};

function selectTheme(topic) {
    currentTopic = topic;

    // Proveravamo da li tema ima sliku
    if (images[topic]) {
        // Postavljamo sliku za temu kao pozadinu
        document.body.style.backgroundImage = `url("${images[topic]}")`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    } else {
        // Ako nema slika, postavljamo podrazumevanu pozadinu
        document.body.style.backgroundImage = "";
    }
}

function startQuiz() {
    numberOfQuestions = document.getElementById('question-count').value;
    currentQuestions = questions[currentTopic].slice(0, numberOfQuestions);
    currentQuestionIndex = 0;

    document.querySelector('.theme-selection').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';

    showQuestion();
}

function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    document.querySelectorAll('.answer-btn').forEach((btn, index) => {
        const answerKey = ['a', 'b', 'c', 'd'][index];
        btn.textContent = question.answers[answerKey];
    });
}

function checkAnswer(answer) {
    const question = currentQuestions[currentQuestionIndex];
    if (answer === question.correct) {
        document.getElementById('result').textContent = 'Tačan odgovor!';
    } else {
        document.getElementById('result').textContent = 'Netačan odgovor!';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        document.getElementById('result').textContent = '';
        showQuestion();
    } else {
        document.getElementById('result').textContent = 'Kviz je završen!';
        document.getElementById('next-btn').style.display = 'none';
    }
}

function resetQuiz() {
    location.reload();
}