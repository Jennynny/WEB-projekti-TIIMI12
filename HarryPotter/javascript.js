//Jonna Neulikko

//Koodi poimituu sivutolta https://www.codingninjas.com/blog/2020/11/03/how-to-create-a-quiz-in-javascript/ ja muokattu tehtävän vaatimuksiin sopivaksi.

//Vakioidaan elementit
const RESTART_BTN = document.getElementById("restart");
const SUBMIT_BTN = document.getElementById("submit");
const MAIN_MENU_BTN = document.getElementById("mainmenu");
const TRUE_BTN = document.getElementById("True");
const FALSE1_BTN = document.getElementById("False1");
const FALSE2_BTN = document.getElementById("False2");
const USER_SCORE = document.getElementById("user-score");
const TOTAL_SCORE = document.getElementById("total-score");
const QUESTION_TEXT = document.getElementById("question-text");
const CURRENT_QUESTION_ELEMENT = document.getElementById("questions-number");
const QUESTION_AMOUNT = document.getElementById("questionsAmount");


//Asetetaan lähtöarvot kysymysten ja pisteiden määrälle
let currentQuestion = 0;
let score = 0;


//Luodaan kysymykset ja vastaukset sekä määritellään ovatko oikein/väärin
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
RESTART_BTN.addEventListener("click", restart);
SUBMIT_BTN.addEventListener("click", submit);
MAIN_MENU_BTN.addEventListener("click", main);


//Aloitetaan kysely ja määritellään pistelasku oikeiden vastausten mukaan.
function beginQuiz(){
    currentQuestion = 0;

    TOTAL_SCORE.innerHTML = questions.length;
    QUESTION_TEXT.innerHTML = questions[currentQuestion].question;
    TRUE_BTN.innerHTML = questions[currentQuestion].answers[0].option;
    TRUE_BTN.onclick = () => {
        if(questions[currentQuestion].answers[0].answer){
            if(score < 5) { 
                score++;
            }
        }
        USER_SCORE.innerHTML = score;
        if(currentQuestion <4) { 
            next();
        }
    }

    FALSE1_BTN.innerHTML = questions[currentQuestion].answers[1].option;
    FALSE1_BTN.onclick = () => {
        if(questions[currentQuestion].answers[1].answer){
            if(score < 5) {
                score++;
            }
        }

        USER_SCORE.innerHTML = score;
        if(currentQuestion < 4) {
            next(); 
        }
    }

    FALSE2_BTN.innerHTML = questions[currentQuestion].answers[2].option;
    FALSE2_BTN.onclick = () => {
        if(questions[currentQuestion].answers[2].answer){
            if(score < 5) { 
                score++;
            }
        }
        USER_SCORE.innerHTML = score;
        if(currentQuestion <5) { 
            next();
        }
    }
    //piilotetaan aloituksesta tarpeettomat nappulat
    SUBMIT_BTN.classList.add("hide");
    MAIN_MENU_BTN.classList.add("hide");
    QUESTION_AMOUNT.classList.remove("hide");

    }
beginQuiz();

//Aloita alusta nappulan toiminto
function restart(){
    currentQuestion = 0;
    CURRENT_QUESTION_ELEMENT.innerHTML = currentQuestion+1;
    SUBMIT_BTN.classList.add("hide");
    TRUE_BTN.classList.remove("hide");
    FALSE1_BTN.classList.remove("hide");
    FALSE2_BTN.classList.remove("hide");
    score = 0;
    USER_SCORE.innerHTML = score;
    beginQuiz();
}

//Siirtyy automaattisesti vastauksen jälkeen seuraavaan kysymykseen
function next(){
    currentQuestion++;

    if(currentQuestion >= 4){
        SUBMIT_BTN.classList.remove("hide");
    }

    CURRENT_QUESTION_ELEMENT.innerHTML = currentQuestion+1; //Laskee kysymysten määrän
    QUESTION_TEXT.innerHTML = questions[currentQuestion].question;
    TRUE_BTN.innerHTML = questions[currentQuestion].answers[0].option;
    TRUE_BTN.onclick = () => {
        if(questions[currentQuestion].answers[0].answer){
            if(score < 5) {
                score++;
            }
        }
        USER_SCORE.innerHTML = score;
        if(currentQuestion < 4){
            next();
        }
    }
    FALSE1_BTN.innerHTML = questions[currentQuestion].answers[1].option;
    FALSE1_BTN.onclick = () => {
        if(questions[currentQuestion].answers[1].answer){
            if(score < 5) {
                score++;
            }
        }

        USER_SCORE.innerHTML = score;
        if(currentQuestion < 4) {
            next(); 
        }
    }

    FALSE2_BTN.innerHTML = questions[currentQuestion].answers[2].option;
    FALSE2_BTN.onclick = () => {
        if(questions[currentQuestion].answers[2].answer){
            if(score < 5) {
                score++;
            }
        }
        USER_SCORE.innerHTML = score;
        if(currentQuestion < 4) {
            next(); 
        }
    }

}


// Vastaukset nappulan toiminto
function submit() {

    let reply = ""
    SUBMIT_BTN.classList.add("hide");
    TRUE_BTN.classList.add("hide");
    FALSE1_BTN.classList.add("hide");
    FALSE2_BTN.classList.add("hide");
    MAIN_MENU_BTN.classList.remove("hide");
    QUESTION_AMOUNT.classList.add("hide");


    //Määritellään palaute pisteiden mukaan ja näytetään oikeat vastaukset
    QUESTION_TEXT.innerHTML = reply;

    //4 pistettä tai sen alle > näyttää silloin oikeat vastaukset palautteena
    if(score <= 4) {
        QUESTION_TEXT.innerHTML = "Harmi, osa vastauksista meni väärin. Ohessa oikeat vastaukset:<br>" + "1. Harry Potterin otsassa on SALAMAn muotoinen arpi <br>" + "2. Yksi Tylypahkan neljästä tuvasta on KORPINKYNSI <br>"
                                    + "3. RON JA HERMIONE ovat Harryn parhaat ystävät <br>" + "4. Velhomaailman suosittu urheilulaji on HUISPAUS <br>" + "5. Harryn lemmikki Hedwig on TUNTURIPÖLLÖ"}
        else{ 
    //Täydet pisteet > kuva ja onnittelut
        RESTART_BTN.classList.add("hide");

        let pic = document.createElement("IMG");
        pic.setAttribute("src", "images/harry-potter-cute.gif"); //Kuvan lähde https://tenor.com/view/harry-potter-cute-happy-gif-21913000
        pic.setAttribute("width", "auto");
        pic.setAttribute("height", "auto");
        pic.setAttribute("alt", "Tylypahka");

        QUESTION_TEXT.innerHTML = "Hienoa, kaikki oikein!"; 
        document.getElementById("picture").appendChild(pic);}

}
//Vastaukset nappulan toiminto
function showResults() {
    SUBMIT_BTN.addEventListener(click, showResults);

}

//Päävalikko-nappulan toiminto
function main() {
    location.href="../index.html";
}


