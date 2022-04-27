/*Enni Kelloniemi
    Matikkavisa*/


/*Satunnaislukugeneraattori */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/*Tarkistusnapin käyttöön otto */
function buttonCheckDisabled() {
    document.getElementById("buttoncheck").disabled = false;
       
}
/*Seuraavanapin käyttöön otto ja vastauskentän "disablointi"*/
function buttonNextDisabled() {
    document.getElementById("buttonnext").disabled = false;  
    document.getElementById("answer").disabled =true;   
}

/*Funktio arpoo kertolaskun numeror, tarkistaa onko käyttäjän syöttämä arvo oikein. Funktio operoi nappeja vastauskenttää  */
function reload(){
    let number1 = getRndInteger(1,10);
    let number2 = getRndInteger(1,10);
    /*Funktio tarkistaa onko vastauksen syöttämä arvo oikein vai väärin ja tulostaa tämän tiedon */
    function checkAnswer(){
        let answer = Number(document.getElementById("answer").value);
        let task = number1*number2;
        let isItRight=""
        if (answer == task){
            isItRight= "Vastaus on oikein";
        }
        else{
            isItRight="Vastaus on väärin. <br> Oikea vastaus on "+ task;
        }
        return document.getElementById("placeOfAnswer").innerHTML= isItRight
    }
     /*Laskee kuinka mones kysymys on  ja tulostaa sen sivulle*/
     numberOfQuestion++;
     document.getElementById("numberofquestion").innerHTML= numberOfQuestion + "/5";
     /*Ksymyksi kysytään viisi */
     if (numberOfQuestion <= 5){
        /*Tyhjentää vastauskentän ja "disabloi painikkeet" */
        document.getElementById("answer").value="";
        document.getElementById("answer").disabled =false;
        document.getElementById("placeOfAnswer").innerHTML="";
        document.getElementById("buttoncheck").disabled = true;
        document.getElementById("buttonnext").disabled = true;  
        /*Tulostaa kertolaskun näkyviin */
        document.getElementById("question").innerHTML = number1 + " * " + number2;
        /*Kuuntelija: "disabloi" vastauskentän, tarkistusnappia painamalla checkAnswer funktio suorittetaan ja avaa seuraavanappin */
        answer.addEventListener("keypress", buttonCheckDisabled);
        buttoncheck.addEventListener("click", checkAnswer);
        buttoncheck.addEventListener("click", buttonNextDisabled);
     }
     /*Viiden kysymyksen jälkeen kerrotaan lopputulos */
     else {
        document.getElementById("placeOfAnswer").innerHTML= "Visa loppui. Pisteesi oli:"
        document.getElementById("buttoncheck").disabled = true;
        document.getElementById("buttonnext").disabled = true; 
     }
    console.log("refreshed");
    console.log(numberOfQuestion);
}

/*PÄÄOHJELMA ALKAA TÄSSÄ*/
/*Aloitus sivu */


/*Tulostaa kysymyksen  */

var numberOfQuestion = 0
document.getElementById("buttonnext").disabled = false; 
buttonnext.addEventListener("click", reload);


