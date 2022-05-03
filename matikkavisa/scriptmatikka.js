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

//Funktio tarkistaa onko tulos oikein ja syöttää sen näytölle. Jos kysymyksiä on kysytty 5, "näytä pisteet" nappula tulee esiin
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
    buttonNextDisabled() 
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

//Katsoo kuinka monta pistettä on ja sen mukaan tulostaa kuvan näytölle. Piilottaa question boksin ja "näytä pistee" painikkeen.
function showScore() {
    const para = document.createElement("p");
    const image = document.createElement("img");
    //kuvien lähde: https://pixabay.com/fi/illustrations/kev%c3%a4t-tausta-m%c3%b6ykky-vihre%c3%a4-maali-1373475/ 
    if (score == 0){
        image.src= "images/loppukuva_pisteet0.jpg";
    }
    
    else if (score == 1){
        image.src= "images/loppukuva_pisteet1.jpg";
    }
    
    else if (score == 2){
        image.src= "images/loppukuva_pisteet2.jpg"; 

    }
    else if (score == 3){
        image.src= "images/loppukuva_pisteet3.jpg";
    }
    else if (score == 4){
        image.src= "images/loppukuva_pisteet4.jpg";
    }
    else{
        image.src= "images/loppukuva_pisteet5.jpg";
    }
    document.getElementById("questionBox").hidden = true;
    document.getElementById("scorebutton2").hidden = true;
    //Lisätään elementti
    document.getElementById("scoreview").appendChild(image);   
    document.getElementById('buttondiv').style.display='block'; 
}
function homebuttonfunction(){

}


//PÄÄOHJELMA ALKAA TÄSTÄ

//Määritellään muuttujat
let number1 = 0;
let number2 = 0;
let task=0;
let score = 0;
let questionNumber=0;

/*Aloitus sivu näkyvissä. Kun painaa aloitusnappia, niin kysymykset tulee esiin*/
document.getElementById('buttondiv').style.display='none';
document.getElementById('startview').style.display='block';
document.getElementById("quesionview").style.display='none';
document.getElementById("scorebutton").style.display='none';
document.getElementById("buttonstart").onclick=function(){
    document.getElementById("startview").style.display='none';
    document.getElementById("quesionview").style.display='block';
    document.getElementById("scorebutton").style.display='none';
    reload()
}

//Funktio arpoo numerot, ja tulostaa arvotut numerot näytölle, jos kysymyksiä on kysytty alle viisi.
//funktio aktivoituu, kun "seuraava" painiketta painetaan.
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

    document.getElementById("answer").disabled =false;
    questionNumber++;
    document.getElementById("numberofquestion").innerHTML= "Kertolasku " + questionNumber + "/5";
    document.getElementById("buttonnext").disabled = true;
    console.log("task:" + task);
    return task;
    }

