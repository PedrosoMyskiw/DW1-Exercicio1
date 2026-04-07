function calcular() {
    let horas = parseFloat(document.getElementById("horas").value);
    let carroGrande = document.getElementById("carroGrande").checked;
    let clienteFrequente = document.getElementById("clienteFrequente").checked;

    if (isNaN(horas) || horas <= 0) {
        document.getElementById("resultado").innerHTML = "Digite uma quantidade válida de horas!";
        return;
    }

    let valor = 0;

    if (horas >= 24) {
        let dias = Math.floor(horas / 24);
        let resto = horas % 24;

        valor = dias * 60;

        if (resto > 0) {
            valor += resto * 2.5;
        }

    } else {
        if (horas <= 1) {
            valor = 5;
        } else {
            valor = 5 + (horas - 1) * 2.5;
        }
    }

    if (carroGrande) {
        valor *= 1.25;
    }

    if (clienteFrequente) {
        valor *= 0.95;
    }

    document.getElementById("resultado").innerHTML = "O valor total é R$ " + valor.toFixed(2);
}