//Lainasin verkosta koodia, jota olen muokannut tehtävään sopivaksi:
// https://www.kindsonthegenius.com/javascript/quiz-application-in-javascript-with-validation-step-by-step/


//vakiot //querySelectorilla classit vakioiksi ja getElementByIdllä id:t vakioiksi
const aTracker = document.querySelector(".answers-tracker")
const options = document.querySelector(".options").children
const questionNumber = document.querySelector(".question-num-value")
const question = document.querySelector(".question")
const totalQuestions = document.querySelector(".total-questions")
const correctAnswers = document.querySelector(".correct-answers")
const totalQuestions2 = document.querySelector(".total-questions2")
const percentage = document.querySelector(".percentage")
const maxQuestions = 5; //Tällä rajataan kysyttävien kysymysten määrä viiteen.


let currentIndex;
let index = 0;
let answeredQuestions =[]; // array of anwered question indexes Vastatut kysymykset
let score = 0;


const opt1 = document.getElementById("0");
const opt2 = document.getElementById("1");
const opt3 = document.getElementById("2");
const opt4 = document.getElementById("3");

const questions = [  //20 kysymystä, joista 5 arvotaan visaan randongeneraattorilla.
    {
        q:' Mistä kaupungista löytyy Eiffel-torni?',
        options: ['Berliinistä', 'Roomasta', 'Pariisista', 'Madridista'],
        answer:2
    },
    {
        q:' Missä maanosassa virtaa Niili?',
        options: ['Etelä-Amerikassa', 'Afrikassa', 'Euroopassa', 'Aasiassa'],
        answer:1
    },  
    {
        q:' Missä maailman kaupungissa on suurin asukasluku?',
        options: ['Moskovassa', 'São Paulossa', 'Delhissä', 'Tokiossa'],
        answer:3
    },
    {
        q:' Missä kaupungissa sijaitsee huvipuisto Linnamäki?',
        options: ['Turkussa', 'Tampereella', 'Helsingissä', 'Jyväskylässä'],
        answer:2
    },     
    {
        q:' Minkä maan pääkaupunki on Kiev?',
        options: ['Valko-Venäjän', 'Puolan', 'Ukrainan', 'Latvian'],
        answer:2
    },    
    {
        q:' Mistä maasta löytyy Taj Mahal?',
        options: ['Intiasta', 'Kiinasta', 'Pakistanista', 'Indonesiasta'],
        answer:0
    },
    {
        q:' Missä maanosassa on Amazonin sademetsä?',
        options: ['Aasiassa', 'Euroopassa', 'Pohjois-Amerikassa', 'Etelä-Amerikassa'],
        answer:3
    }, 
    {
        q:' Mistä kaupungista löytyy kaupunginosa Manhattan?',
        options: ['Lontoosta', 'San Franciscosta', 'New Yorkista', 'Reykjavíkista'],
        answer:2
    },
    {
        q:' Minkä maan kaupunkeja ovat Berliini, Köln ja Hampuri?',
        options: ['Ruotsin', 'Saksan', 'Hollannin', 'Belgian'],
        answer:1
    },
    {
        q:' Minkä maalaista ruokaa Sushi on?',
        options: ['Japanilaista', 'Kiinalaista', 'Unkarilaista', 'Turkkilaista'],
        answer:0
    },  
    {
        q:' Mikä on Norjan pääkaupunki?',
        options: ['Oslo', 'Tukholma', 'Kööpenhamina', 'Helsinki'],
        answer:0
    },
    {
        q:' Mikä on Yhdysvaltojen pääkaupunki?',
        options: ['Los Angeles', 'Miami', 'New York', 'Washington'],
        answer:3
    },
    {
        q:' Missä kaupungissa on Big Ben ja Buckinghamin palatsi?',
        options: ['Leedsissä', 'Lontoossa', 'Liverpoolissa', 'Glasgowssa'],
        answer:1
    },
    {
        q:' Missä sijaitsee Yellowstone kansallispuisto?',
        options: ['Yhdysvalloissa', 'Etelä Afrikassa', 'Kanadassa', 'Venäjällä'],
        answer:0
    },
    {
        q:' Minkä maan tunnusomaisimpia eläimiä ovat Kengurut?',
        options: ['Kiinan', 'Austaralian', 'Japanin', 'Uuden Seelannin'],
        answer:1
    },
    {
        q:' Mistä maasta tulee K-Pop musiikki?',
        options: ['Pohjois-Koreasta', 'Japanista', 'Etelä-Koreasta', 'Suomesta'],
        answer:2
    },         
    {
        q:' Mikä on Kreikan pääkaupunki?',
        options: ['Moskova', 'Tukholma', 'Ateena', 'Bangkok'],
        answer:2
    },
    {
        q:' Minkä maan pääkaupunki on Reykjavík?',
        options: ['Islannin', 'Norjan', 'Tanskan', 'Ruotsin'],
        answer:0
    },
    {
        q:' Mikä on maailman korkein vuoristo?',
        options: ['Rukatunturi', 'Mount Everest', 'K2', 'Korvatunturi'],
        answer:1
    },
    {
        q:' Mistä maasta isopandat ovat kotoisin?',
        options: ['Suomesta', 'Kanadasta', 'Kiinasta', 'Islannista'],
        answer:2
    }
]


totalQuestions.innerHTML = maxQuestions //5 kysymystä määritelty vakiolla /5

function load(){
    questionNumber.innerHTML = index + 1
    question.innerHTML = questions[currentIndex].q;
    opt1.innerHTML = questions[currentIndex].options[0]    
    opt2.innerHTML = questions[currentIndex].options[1]
    opt3.innerHTML = questions[currentIndex].options[2]
    opt4.innerHTML = questions[currentIndex].options[3]
    index++

}

// Tarkistaa onko valittu vastaus oikein (correct) vai väärin (wrong) 
function check(element){
    if(element.id == questions[currentIndex].answer){
        element.className="correct"
        updateAnswersTracker("correct")
        score++
    }
    else {
        element.className="wrong"
        updateAnswersTracker("wrong")
    }
    disableClick();
}

//antaa viestin visaajalle jos ei ole valinnut vastausta ennen 'seuraava' näppäimen klikkausta
function validate(){
    if(!options[0].classList.contains("disabled")){
        alert("Kokeile vastata kysymykseen ensin, niin pääset jatkamaan eteenpäin.")
    }
    else{
        randomQuestion();
        enableClick();
    }
}

//Listener function for click event on Next button
function next(){
    validate();
}

//Function to disable click for the options
function disableClick(){
    for(let i=0; i<options.length; i++){
        options[i].classList.add("disabled")

        if(options[i].id == questions[currentIndex].answer){
            options[i].classList.add('correct');
        }
    }
}

//Function to reanable click in the options
function enableClick(){
    for(let i=0; i<options.length; i++){
        options[i].classList.remove("disabled", "correct", "wrong")

    }
}

//Valitsee kysymyksen ramdom-laskurin kautta
function randomQuestion(){
    let randomNumber = Math.floor(Math.random()*questions.length);
    if(index == maxQuestions){
        quizOver();
    }
    else{
        if(answeredQuestions.length > 0){
            if(answeredQuestions.includes(randomNumber)){
                randomQuestion();
            }
            else {
                currentIndex = randomNumber;
                load();
            }
        }
        if(answeredQuestions.length == 0){
            currentIndex = randomNumber
            load()
        }
        //Lisää kysymyksen vastattuihin kysymyksiin /add the question to list of anwered questions
        answeredQuestions.push(randomNumber)
    }
}

// käynnistää visan uudelleen (Restart)
window.onload=function(){
    this.randomQuestion();
    this.answersTracker();
}

//asettaa elementit vastaustrakkeriin Set up answers tracker elements
function answersTracker(){
    for(let i=0; i< maxQuestions; i++){
        const div = document.createElement("div")
        aTracker.appendChild(div);
    }
}

//päivittää vastaustrakkerin elementit Update the answers tracker elements
function updateAnswersTracker(newClass){
    aTracker.children[index -1].classList.add(newClass)
}

//Näyttää tulosruudun kun visa on loppu.
function quizOver(){
    if(score < 2){
        document.getElementById("teksti").innerHTML = "Hupsista.. kokeillaanko uudelleen? ";
    }
    else if(score < 3){
        document.getElementById("teksti").innerHTML = "Hyvin menee! Kokeillaanko uudelleen? ";
    }
    else if(score <= 4){
        document.getElementById("teksti").innerHTML = "Osaat hienosti! ";
        
        
    }
    else {
        document.getElementById("teksti").innerHTML = "Huippua! Kaikki vastaukset oikein! ";
    }
    document.querySelector(".quiz-over").classList.add("show")
    correctAnswers.innerHTML = score;
    totalQuestions2.innerHTML = maxQuestions
    percentage.innerHTML=Math.round((score/maxQuestions)*100) + "%"
    
    
}
//aloita alusta
function tryAgain(){
    window.location.reload();
}
//Päävalikko-nappulan toiminto
function frontpage() {
    location.href="../index.html";
}
