let scoreCountHome = 0
let scoreCountGuest = 0

let scorHom = document.getElementById("score-home");
let scorGue = document.getElementById("score-guest");

function resetScoreHome() {
     scoreCountHome = 0
     scorHom.innerHTML = 0
}

function resetScoreGuest() {
    scoreCountGuest = 0
    scorGue.innerHTML = 0
}

function plusOneH() {
    scoreCountHome += 1
    scorHom.innerHTML = scoreCountHome
}

function plusTwoH() {
    scoreCountHome += 2
    scorHom.innerHTML = scoreCountHome
}

function plusThreeH() {
    scoreCountHome += 3
    scorHom.innerHTML = scoreCountHome
}

function plusOneG() {
    scoreCountGuest += 1
    scorGue.innerHTML = scoreCountGuest
}

function plusTwoG() {
    scoreCountGuest += 2
    scorGue.innerHTML = scoreCountGuest
}

function plusThreeG() {
    scoreCountGuest += 3
    scorGue.innerHTML = scoreCountGuest
}