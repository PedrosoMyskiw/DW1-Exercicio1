function calcular() {
    let ra = document.getElementById("inputRa").value;
    let nome = document.getElementById("inputNome").value;

    let n1 = parseFloat(document.getElementById("inputN1").value);
    let n2 = parseFloat(document.getElementById("inputN2").value);
    let n3 = parseFloat(document.getElementById("inputN3").value);
    let n4 = parseFloat(document.getElementById("inputN4").value);
    let me = parseFloat(document.getElementById("inputMe").value);

    let footer = document.querySelector("footer");
    let msgFooter = document.getElementById("msgFooter");

    footer.classList.remove("footer-erro");
    msgFooter.innerHTML = "Programa de cálculo de média";

    if (!ra || !nome || isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || isNaN(me)) {
        document.getElementById("resultado").innerHTML = "Preencha todos os campos!";
        footer.classList.add("footer-erro");
        msgFooter.innerHTML = "Erro: preencha todos os campos corretamente!";
        return;
    }

    let MA = (n1 + n2*2 + n3*3 + n4*4 + me) / 11;

    let conceito = "";

    if (MA >= 9) {
        conceito = "A";
    } else if (MA >= 7.5) {
        conceito = "B";
    } else if (MA >= 6) {
        conceito = "C";
    } else if (MA >= 4) {
        conceito = "D";
    } else {
        conceito = "E";
    }

    let situacao;

    if (conceito === "A" || conceito === "B" || conceito === "C") {
        situacao = "APROVADO";
    } else {
        situacao = "REPROVADO";
    }

    document.getElementById("resultado").innerHTML =
        "RA: " + ra + "<br>" +
        "Nome: " + nome + "<br>" +
        "Notas: " + n1 + ", " + n2 + ", " + n3 + ", " + n4 + "<br>" +
        "Média Exercícios: " + me + "<br>" +
        "Média Final: " + MA.toFixed(2) + "<br>" +
        "Conceito: " + conceito + "<br>" +
        "Situação: " + situacao;
}