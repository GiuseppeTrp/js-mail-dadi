// Dichiaro variabili
const resultPlayer = document.getElementById("result-player");
const resultComputer = document.getElementById("result-computer");
const resultDraw = document.getElementById("result-draw");

const inputRoll = document.getElementById("input-roll");

const player = document.getElementById('img-player');
const computer = document.getElementById('img-computer');

// Aggiungere un listener per gestire il click sul pulsante "Roll Dice"
inputRoll.addEventListener("click", function () {
    // Generare numeri casuali per il dado del giocatore e del computer
    let dadoPlayer = Math.floor(Math.random() * 6) + 1;
    let dadoComputer = Math.floor(Math.random() * 6) + 1;

    // Imposta l'immagine del giocatore con il dado appena generato





    // Imposta l'immagine del giocatore con il risultato del dado del giocatore
setPlayerImage(dadoPlayer);
// Imposta l'immagine del computer con il risultato del dado del computer
setComputerImage(dadoComputer);

    // Logica if per definire il vincitore e aggiornare i risultati
    if (dadoPlayer > dadoComputer) {
        // Se il dado del giocatore è più grande, il giocatore vince
        resultPlayer.innerHTML = `<div class="alert alert-success text-uppercase fs-2 fw-bold">PLAYER WINS</div>`;
        resultComputer.innerHTML = `<div class="alert alert-danger text-uppercase fs-2 fw-bold">COMPUTER LOSES</div>`;
        resultDraw.innerHTML = "";
    } else if (dadoPlayer < dadoComputer) {
        // Se il dado del giocatore è più piccolo, il computer vince
        resultPlayer.innerHTML = `<div class="alert alert-danger text-uppercase fs-2 fw-bold">PLAYER LOSES</div>`;
        resultComputer.innerHTML = `<div class="alert alert-success text-uppercase fs-2 fw-bold">COMPUTER WINS</div>`;
        resultDraw.innerHTML = "";
    } else {
        // Se i dadi sono uguali, è un pareggio
        resultPlayer.innerHTML = "";
        resultComputer.innerHTML = "";
        resultDraw.innerHTML = `<div class="alert alert-warning text-uppercase fs-2 fw-bold">It's a draw! Both have the same number</div> ${dadoPlayer}`;
    }

    
});

// Funzione per impostare l'immagine del giocatore in base al risultato del dado
function setPlayerImage(dado) {
    let imagePath = "js/img/dado-" + dado;
    if (dado === 4 || dado === 6) {
        imagePath += ".avif";
    } else if (dado === 5) {
        imagePath += ".jpeg";
    } else {
        imagePath += ".jpg";
    }
    // Impostare l'attributo src dell'elemento img del giocatore
    player.src = imagePath;
}

// Funzione per impostare l'immagine del computer in base al risultato del dado
function setComputerImage(dado) {
    let imagePath = "js/img/dado-" + dado;
    if (dado === 4 || dado === 6) {
        imagePath += ".avif";
    } else if (dado === 5) {
        imagePath += ".jpeg";
    } else {
        imagePath += ".jpg";
    }
    // Modifica qui: impostare direttamente l'attributo src dell'elemento img del computer
    computer.src = imagePath;
}