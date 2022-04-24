/*Enni Kelloniemi
    Matikkavisa*/


/*Satunnaislukugeneraattori */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/* Funktio arpoo numerot kertolaskuihin ja palauttaa arvotut numerot listaan*/
function numbers(){
    let number1 = getRndInteger(1,10);
    let number2 = getRndInteger(1,10);
    let list = [number1, number2]
    return list;
}

/*Funktio hakee käyttäjän vastauksen ja palauttaa tulostuksen onko vastaus oikein vai väärin. */
function checkAnswer(){
    let answer = Number(document.getElementById("answer").value);
    let task = Number(numberslist[0]) * Number(numberslist[1]);
    let isItRight=""
    if (answer == task){
        isItRight= "Vastaus on oikein";
    }
    else{
        isItRight="Vastaus on väärin. <br> Oikea vastaus on "+ task;
    }
   document.getElementById("placeOfAnswer").innerHTML= isItRight
    return document.getElementById("placeOfAnswer").innerHTML= isItRight
}

/*Tarkistusnapin käyttöön otto */
function buttonCheckDisabled() {
    document.getElementById("buttoncheck").disabled = false;
       
}
/*Seuraavanapin käyttöön otto */
function buttonNextDisabled() {
    document.getElementById("buttonnext").disabled = false;  
    document.getElementById("answer").disabled =true;   
}

function reload(){
    document.getElementById("answer").value="";
    document.getElementById("answer").disabled =false;
    document.getElementById("placeOfAnswer").innerHTML="";
    document.getElementById("buttoncheck").disabled = true;
    document.getElementById("buttonnext").disabled = true;  
    let numberslist = numbers();
    document.getElementById("question").innerHTML = numberslist[0] + " * " + numberslist[1];
    

    console.log("refreshed");
}

/*PÄÄOHJELMA ALKAA TÄSSÄ*/
/*Aloitus sivu */


/*Tulostaa kysymyksen  */

let numberslist = numbers();
document.getElementById("question").innerHTML = numberslist[0] + " * " + numberslist[1];
answer.addEventListener("keypress", buttonCheckDisabled);
buttoncheck.addEventListener("click", checkAnswer);
buttoncheck.addEventListener("click", buttonNextDisabled);

/*Tarkistusnappia painaa, niin tarkistaa vastauksen */
answer.addEventListener("keypress", buttonCheckDisabled);
buttoncheck.addEventListener("click", checkAnswer);
buttoncheck.addEventListener("click", buttonNextDisabled);
buttonnext.addEventListener("click", reload);

