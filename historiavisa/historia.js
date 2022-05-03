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
        question: "Minkä niminen oli muinais egyptin auringonjumala?",
        a: "Amon",
        b: "Ra",
        c: "Osiris",
        d: "Seth",
        correct: "b",
    },
    {
        question: "Kuka antiikinkreikan jumalista oli sotataidon, tiedon ja viisauden jumala?",
        a: "Athene",
        b: "Afrodite",
        c: "Hera",
        d: "Selene",
        correct: "a",
    },
    {
        question: "Mistä olympialaiset ovat lähtöisin?",
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

//kerrotaan kuinka monta pistettä saatiin
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else { if(score <= 4){
         document.getElementById("quiz").innerHTML = "Hupsista jotain meni väärin. Tässä oikeat vastaukset:<br>"
       

           quiz.innerHTML = `
           <h2>Sait ${score}/${quizData.length} pistettä</h2>

           <button onclick="location.reload()">Reload</button>
           `
           }
       }
     }
})




/*const questionText = document.getElementById("question-text");
let reply="";
questionText.innerHTML = reply;
if(score <= 4) {
    questionText.innerHTML = ""Hupsista jotain meni väärin. Tässä oikeat vastaukset:<br>"}
    else{
        questionText.innerHTML = "Hienoa, kaikki oikein!";
    }*/


/* ensimmäisen blockin näkyminen
document.getElementsByClassName('quiz-container')[0].style.display = "block";

//next nappulan määrittäminen
function next(id) {
    document.getElementsByClassName('quiz-container')[id-1].style.display = "none";
    document.getElementsByClassName('quiz-container')[id].style.display = "block";
}
//tulosten laskenta
function result() {
    let score = 0;
    let correct1 = document.getElementById("correct1");
    let false1= document.getElementById("false1");
    let false2 = document.getElementById("false2");
    let false3 = document.getElementById("false3");
    let false4 = document.getElementById("false4");
    let answers= document.getElementById("answers");
    if (document.getElementById('correct1').checked) {
        score++;
    } 
    
    if (document.getElementById('correct2').checked) {
        score++;
    }
    if (document.getElementById('correct3').checked) {
        score++;
    }
    if (document.getElementById('correct4').checked) {
        score++;
    } 
     if (document.getElementById('correct5').checked) {
        score++;
    }  

    if(score <= 4){
        document.getElementById("answers").innerhtml = "Hupsista jotain meni väärin. Tässä oikeat vastaukset"
    } else{
        document.getElementById("answers").innerhtml ="Hienoa! Kaikki oikein!"
    }
    alert("Sait: "+ score +"/5 oikein");
    //document.write("sait"+ score)
}
//Monesko kysymys
let numberOfQuestion = 0;
numberOfQuestion++;
document.getElementById("numberofquestion").innerHTML= numberOfQuestion + "/5";

//oikeat vastauskset
/*function v01(){
let correct1 = document.getElementById("correct1");
let false1= document.getElementById("false1");
let false2 = document.getElementById("false2");
let false3 = document.getElementById("false3");
let false4 = document.getElementById("false4");
let answers= document.getElementById("answers");

if (correct1.checked){
    document.getElementById("answers").innerhtml = correct1 + "Hienoa! Oikea vastaus.";}
else {
    document.getElementById("answers").innerhtml = false1+ false2 + false3+ false4 + "Harmi väärin meni. Oikea vastaus on Ramses";
}
}*/