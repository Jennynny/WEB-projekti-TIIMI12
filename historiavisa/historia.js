//Koodin lähde: https://codingwithnick.in/create-a-quiz-app-using-html-css-javascript/

//Visa kysymykset

const quizData = [
    {
        question: "Kuka seuraavista oli faarao?",
        a: "Horus",
        b: "Nefertum",
        c: "Sekhmet",
        d: "Ramses",
        correct: "d",
    },
    {
        question: "Minkä niminen oli muinaisen Egyptin auringonjumala?",
        a: "Bes",
        b: "Ra",
        c: "Osiris",
        d: "Seth",
        correct: "b",
    },
    {
        question: "Kuka antiikin Kreikan jumalista oli sotataidon, tiedon ja viisauden jumala?",
        a: "Athene",
        b: "Afrodite",
        c: "Hera",
        d: "Selene",
        correct: "a",
    },
    {
        question: "Mistä olympian kisat ovat lähtöisin?",
        a: "Turkista",
        b: "Egyptistä",
        c: "Roomasta",
        d: "Kreikasta",
        correct: "d",
    },
    {
        question: "Kuka oli Aleksanteri Suuren opettaja",
        a: "Homeros",
        b: "Aristoteles",
        c: "Filippos II",
        d: "Antipatros",
        correct: "b",
    },


];
//Määritellään muuttujat
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

//Visan toiminta
loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    document.getElementById("numberofquestion").innerHTML= currentQuiz + 1 + "/5";
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

//kerrotaan kuinka monta pistettä saatiin ja oikeat vastaukset
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
//laskee monesko kysymys
       currentQuiz++   

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           if(score <= 4){

           quiz.innerHTML = `
           <h2>Hupsista jotain meni väärin. Sait ${score}/${quizData.length} pistettä. Tässä oikeat vastaukset:<br></h2><p> 1. Oikea vastaus on Ramses. Muut henkilöt ovat muinaisen Egyptin jumalia.<br> 2. Oikea vastaus on Ra. Bes oli naisten, perheen ja kotien jumala. Osiris oli manalan jumala ja Seth oli kaaoksenjumala.<br> 3.Oikea vastaus on Athene. Afrodite oli rakkauden ja kauneuden jumalatar. Hera oli ylijumala Zeuksen puoliso, avioliiton, naisten ja valtakuntien jumalatar. Selene oli Kuun jumalatar.<br>
            4.Oikea vastaus on Kreikasta. Olympian kisat eli ”antiikin olympialaiset” olivat antiikin kreikkalaiset Zeus-jumalan kunniaksi järjestetyt urheilukilpailut. Ne järjestettiin Olympian pyhäkköalueella Eliin maakunnassa Peloponnesoksen luoteisosassa.<br> 5.Oikea vastaus on Aristoteles. Homeros oli mahdollisesti myyttinen runoilija antiikin Kreikan muinaisajalla. Filippos II oli Aleksanterin isä. Antipatros oli yksi Filippoksen upseereista.</p>

           <button onclick="location.reload()">Alkuun</button>
           `
    } else{
        
        quiz.innerHTML = `
           <h2>Mahtavaa kaikki oikein! Sait ${score}/${quizData.length} pistettä.</h2>
           
           <button onclick="location.reload()">Alkuun</button>
           `
            }
           
        }
    
     }
})

