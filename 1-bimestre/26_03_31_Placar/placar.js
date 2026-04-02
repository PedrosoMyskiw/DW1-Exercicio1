let pontosA = 0;
let pontosB = 0;

function marcarPonto(time) {
    if (time === 'A') {
        pontosA++;
        document.getElementById("pontosA").innerText = pontosA;
    } else {
        pontosB++;
        document.getElementById("pontosB").innerText = pontosB;
    }

    verificarVencedor();
}

function resetar() {
    pontosA = 0;
    pontosB = 0;

    document.getElementById("pontosA").innerText = 0;
    document.getElementById("pontosB").innerText = 0;

    document.querySelectorAll(".card").forEach(card => {
        card.classList.remove("vencedor");
    });
}

function verificarVencedor() {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => card.classList.remove("vencedor"));

    if (pontosA >= 10) {
        cards[0].classList.add("vencedor");
    }

    if (pontosB >= 10) {
        cards[1].classList.add("vencedor");
    }
}

function removerPonto(time) {
    if (time === 'A' && pontosA > 0) {
        pontosA--;
        document.getElementById("pontosA").innerText = pontosA;
    } 
    else if (time === 'B' && pontosB > 0) {
        pontosB--;
        document.getElementById("pontosB").innerText = pontosB;
    }
}