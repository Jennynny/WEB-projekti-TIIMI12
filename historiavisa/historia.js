// ensimmäisen blockin näkyminen
document.getElementsByClassName('quiz-container')[0].style.display = "block";

//next nappulan määrittäminen
function next(id) {
    document.getElementsByClassName('quiz-container')[id-1].style.display = "none";
    document.getElementsByClassName('quiz-container')[id].style.display = "block";
}
//tulosten laskenta
function result() {
    let score = 0;
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
    alert("your score is: "+ score);
}

//oikeat vastauskset
function v01(){
let correct1 = document.getElementById("correct1");
let false1= document.getElementById("false1");
let false2 = document.getElementById("false2");
let false3 = document.getElementById("false3");
let false4 = document.getElementById("false4");

if (correct1){
    document.getElementById("rightAnswer").html = correct1 + "Hienoa! Oikea vastaus.";
}
else {
    document.getElementById("rightAnswer").html = false1+ false2 + false3+ false4 + "Harmi väärin meni. Oikea vastaus on Ramses";
}
}