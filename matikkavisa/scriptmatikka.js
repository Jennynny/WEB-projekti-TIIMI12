/*Enni Kelloniemi
    Matikkavisa*/


/*Satunnaislukugeneraattori */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/*Tarkistusnapin käyttöön otto */
function buttonCheckActivation() {
    document.getElementById("buttoncheck").disabled = false;
       
}
/*Tarkistusnapin disablointi */
function buttonCheckDisabled() {
    document.getElementById("buttoncheck").disabled = true;
       
}
/*Seuraavanapin käyttöön otto ja vastauskentän "disablointi"*/
function buttonNextDisabled() {
    document.getElementById("buttonnext").disabled = false;  
    document.getElementById("answer").disabled =true;   
}


//Funktio syöttää kysymyksen näytölle ja vastaus lomakeaktivoituu
function questionInput (number1, number2){
    document.getElementById("question").innerHTML= number1 + " ∙ " + number2 + " =";
    answer.addEventListener("keypress", buttonCheckActivation); 
}

//Funktio tarkistaa onko tulos oikein ja syöttää sen näytölle. Laskee myös oikeat vastaukset 
function checkAnswer(){
    let userAnswer = Number(document.getElementById("answer").value);
    console.log("Kysymys:" + questionNumber)
    if (userAnswer == task){
        score++;
        document.getElementById("placeOfAnswer").innerHTML= "Vastasit oikein!";
    }
    else {
        document.getElementById("placeOfAnswer").innerHTML= "Vastasit väärin. Oikea vastaus on " + task+ ".";
    }
    buttonNextDisabled()  //Voisiko nämä funktio yhdistää????
    buttonCheckDisabled()
    if (questionNumber == 5){
        console.log("hep")
        document.getElementById("scorebutton").style.display='block';
        document.getElementById("buttonnext").style.display='none';  
        document.getElementById("scorebutton2").disabled = false; 
    }
    console.log(userAnswer)
    console.log(task + "task")
    console.log(score + " score")
    return score
}

function showScore() {
    document.getElementById("quesionview").style.display='none';
    const para = document.createElement("p");
    if (score <= 1){
        para.innerHTML = "Sait oikein " + score + "/5." + "<br>" + "Tarviset vielä harjoitusta"; 
    }
    else if (score <= 3){
        para.innerHTML = "Sait oikein " +nscore + "/5." + "<br>" + "Hajoittele vielä vähän"; 
    }
    else if (score <= 4){
        para.innerHTML = "Sait oikein " + score + "/5." + "<br>" + "Hyvä!"; 
    }
    else{
        para.innerHTML = "Loistavaa! Sait kaikki oikein!" + "<br>" + score + "/5."; 
    }
    // Append to another element:
    document.getElementById("scoreview").appendChild(para);
    document.getElementById("scorebutton2").disabled = true;
}


//PÄÄOHJELMA ALKAA TÄSTÄ

let number1 = 0;
let number2 = 0;
let task=0;
let score = 0;
let questionNumber=0;

/*Aloitus sivu näkyvissä ja painaa aloitusnappia, niin kysymykset tulee esiin*/
document.getElementById('startview').style.display='block';
document.getElementById("quesionview").style.display='none';
document.getElementById("scorebutton").style.display='none';
document.getElementById("buttonstart").onclick=function(){
    document.getElementById("startview").style.display='none';
    document.getElementById("quesionview").style.display='block';
    document.getElementById("scorebutton").style.display='none';
    reload()
}


function reload(){
    number1 = getRndInteger(1, 10)
    number2 = getRndInteger(1, 10)
    task = number1 * number2;

    console.log("qn" + typeof questionNumber)
    
    if(questionNumber < 5){
        //Funktio syöttää kysymyksen näytölle ja vastauslomake aktivoituu
        document.getElementById("answer").value="";
        document.getElementById("placeOfAnswer").innerHTML="";
        questionInput (number1, number2)
    }
    else{
        document.getElementById("placeOfAnswer").innerHTML= "Visa on ohi";
    }
    document.getElementById("answer").disabled =false;
    questionNumber++;
    document.getElementById("numberofquestion").innerHTML= "Kertolasku " + questionNumber + "/5";
    document.getElementById("buttonnext").disabled = true;
    console.log("task:" + task);
    return task;
    }

