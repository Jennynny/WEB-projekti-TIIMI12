//Jonna Neulikko

//Koodi poimituu sivutolta https://www.codingninjas.com/blog/2020/11/03/how-to-create-a-quiz-in-javascript/ ja muokattu tehtävän vaatimuksiin sopivaksi.

//Vakioidaan elementit

const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const mainMenuBtn = document.getElementById("mainmenu");
const trueBtn = document.getElementById("True");
const false1Btn = document.getElementById("False1");
const false2Btn = document.getElementById("False2");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text");


//Asetetaan lähtöarvot kysymysten ja pisteiden määrälle
let currentQuestion = 0;
let score = 0;


//Luodaan kysymykset ja vastaukset
let questions = [
    {
        question: "1. Minkä muotoinen on Harryn otsassa oleva arpi?",
        answers: [
            {option:"Kuu", answer:false},
            {option:"Salama", answer:true},
            {option:"Tähti", aswer:false}
        ]
    },
    {
        question: "2. Mikä näistä on yksi Tylypahkan neljästä tuvasta?",
        answers: [
            {option:"Kissankäpälä", answer:false},
            {option:"Huhhuhhuh", answer:false},
            {option:"Korpinkynsi", answer:true},
        ]
    },
    {
        question: "3. Keitä ovat Harryn parhaat ystävät?",
        answers: [
            {option:"Ron ja Hermione", answer:true},
            {option:"Grabbe ja Goyle", answer:false},
            {option:"Arthur ja Molly", answer:false},
        ]
    },
    {
        question: "4. Mikä on velhomaailmassa suosittu urheilulaji?",
        answers: [
            {option:"Käsipallo", answer:false},
            {option:"Huispaus", answer:true},
            {option:"Sähly", answer:false},
        ]
    },
    {
        question: " 5. Harryn lemmikki on nimeltään Hedwig, mikä eläin on kyseessä?",
        answers: [
            {option:"Kissa", answer:false},
            {option:"Rotta", answer:false},
            {option:"Tunturipöllö", answer:true},
        ]
    }
]

//Luodaan painikkeiden toiminnot (kutsuu funtiota kun painiketta painetaan)
restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
submitBtn.addEventListener("click", submit);
mainMenuBtn.addEventListener("click", main);


//Aloitetaan kysely
function beginQuiz(){
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer){
            if(score < 5) { 
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion <5) { 
            next();
        }
    }

    false1Btn.innerHTML = questions[currentQuestion].answers[1].option;
    false1Btn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer){
            if(score < 5) {
                score++;
            }
        }

        userScore.innerHTML = score;
        if(currentQuestion < 5) {
            next(); 
        }
    }

    false2Btn.innerHTML = questions[currentQuestion].answers[2].option;
    false2Btn.onclick = () => {
        if(questions[currentQuestion].answers[2].answer){
            if(score < 5) { 
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion <5) { 
            next();
        }
    }
    //piilotetaan aloituksesta tarpeettomat bnappulat
    prevBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    mainMenuBtn.classList.add("hide");

    }


beginQuiz();

//Aloita alusta nappulan toiminto
function restart(){
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.remove("hide");
    false1Btn.classList.remove("hide");
    false2Btn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}

//Seuraava kysymysnappula > poistaa nappulan viimeisen kysymyksen kohdalla
function next(){
    currentQuestion++;
    if(currentQuestion >= 5){
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
        submitBtn.classList.remove("hide");
    }

    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer){
            if(score < 5) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 5){
            next();
        }
    }
    false1Btn.innerHTML = questions[currentQuestion].answers[1].option;
    false1Btn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer){
            if(score < 5) {
                score++;
            }
        }

        userScore.innerHTML = score;
        if(currentQuestion < 5) {
            next(); 
        }
    }

    false2Btn.innerHTML = questions[currentQuestion].answers[2].option;
    false2Btn.onclick = () => {
        if(questions[currentQuestion].answers[2].answer){
            if(score < 5) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 5) {
            next(); 
        }
    }
    prevBtn.classList.remove("hide");

}

//Edellinen kysymys nappulan toiminto
function prev() {
    currentQuestion--;
    if(currentQuestion <= 0) {
        prevBtn.classList.add("hide");
        nextBtn.classList.remove("hide");
        submitBtn.classList.add("hide");
    }

    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer){
            if(score < 5) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 5) {
            score++
        }
    }

    false1Btn.innerHTML = questions[currentQuestion].answers[1].option;
    false1Btn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer){
            if(score < 5) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 5) {
            next();
        }
    }

    false2Btn.innerHTML = questions[currentQuestion].answers[2].option;
    false2Btn.onclick = () => {
        if(questions[currentQuestion].answers[2].answer){
            if(score < 5) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 5) {
            next(); 
        }
    }
    nextBtn.classList.remove("hide");
    submitBtn.classList.add("hide");

}

// Vastaukset nappulan toiminto
function submit() {

    let reply = ""

    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    false1Btn.classList.add("hide");
    false2Btn.classList.add("hide");
    mainMenuBtn.classList.remove("hide");


    //Määritellään palaute pisteiden mukaan ja näytetään oikeat vastaukset

    questionText.innerHTML = reply;

    if(score <= 4) {

        questionText.innerHTML = "Harmi, osa vastauksista meni väärin. Ohessa oikeat vastaukset:<br>" + "1. Harry Potterin otsassa on SALAMAn muotoinen arpi <br>" + "2. Yksi Tylypahkan neljästä tuvasta on KORPINKYNSI <br>"
                                    + "3. RON JA HERMIONE ovat Harryn parhaat ystävät <br>" + "4. Velhomaailman suosittu urheilulaji on HUISPAUS <br>" + "5. Harryn lemmikki Hedwig on TUNTURIPÖLLÖ"}
        else{ 
        restartBtn.classList.add("hide");

        let pic = document.createElement("IMG");
        pic.setAttribute("src", "images/tylypahka.jpg");
        pic.setAttribute("width", "auto");
        pic.setAttribute("height", "auto");
        pic.setAttribute("alt", "Tylypahka");

            questionText.innerHTML = "Hienoa, kaikki oikein!"; 
            document.getElementById("picture").appendChild(pic);}

}
//Vastaukset nappulan toiminto
function showResults() {
    submitBtn.addEventListener(click,showResults);

}

//Päävalikko-nappulan toiminto
function main() {
    location.href="../index.html";
}


