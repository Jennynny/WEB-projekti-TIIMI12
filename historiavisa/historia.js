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