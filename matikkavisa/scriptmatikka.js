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

/*Laskee visasta saadu pisteet*/
function calculationOfPoint(){

}

/*Funktio arpoo kertolaskun numeror, tarkistaa onko käyttäjän syöttämä arvo oikein. Funktio operoi nappeja vastauskenttää  */
function reload(){
     /*Laskee kuinka mones kysymys on ja tulostaa sen sivulle*/
     numberOfQuestion++;
     document.getElementById("numberofquestion").innerHTML= numberOfQuestion + "/5";

     /*Ksymyksi kysytään viisi */
     if (numberOfQuestion <= 5){
        var number1 = getRndInteger(1,10);
        var number2 = getRndInteger(1,10);
        var answerUser = Number(document.getElementById("answer").value);
        var task = number1*number2;
        /*Funktio tarkistaa onko käyttäjän syöttämä arvo oikein vai väärin ja palauttaa tämän tiedon */
        function checkAnswer(){
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
        /*Tyhjentää vastauskentän ja "disabloi painikkeet" */
        document.getElementById("answer").value="";
        document.getElementById("answer").disabled =false;
        document.getElementById("placeOfAnswer").innerHTML="";
        document.getElementById("buttoncheck").disabled = true;
        document.getElementById("buttonnext").disabled = true;  
        /*Tulostaa kertolaskun näkyviin */
        document.getElementById("question").innerHTML = number1 + " * " + number2;
        /*Kuuntelija: "disabloi" vastauskentän, tarkistusnappia painamalla checkAnswer funktio suorittetaan ja avaa seuraavanappin */
        answer.addEventListener("keypress", buttonCheckActivation);
        buttoncheck.addEventListener("click", buttonCheckDisabled);
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
    console.log(answerUser);
    objectOne = {
        numberOne: number1,
        numberTwo: number2,
        answerUserObject: answerUser,
        taskObject: task
     }
     console.log(objectOne);

}

 /*Funktio tallentaa olioon number1, number2, aswerUser ja taskin joka kysymksen jälkeen  */
    /*Kysymysten jälkeen tulostaa sivulla taulukon, jossa näkyy kysymykset ja vastasitko käyttäjä oikein */
/*let objectOne1= objectOne;
function objectTable(){
    objectList.push(objectOne1);
    console.log(objectList);
}
objectTable()
/*PÄÄOHJELMA ALKAA TÄSSÄ*/

/*Aloitus sivu näkyvissä ja painaa aloitusnappia, niin kysymykset tulee esiin*/
document.getElementById('startview').style.display='block';
document.getElementById("quesionview").style.display='none';
document.getElementById("buttonstart").onclick=function(){
    document.getElementById("startview").style.display='none';
    document.getElementById("quesionview").style.display='block';
}
buttonstart.addEventListener("click", reload);
/*Tulostaa kysymyksen  */
var objectList = [];
var objectOne = []
var numberOfQuestion = 0
buttonnext.addEventListener("click", reload);




