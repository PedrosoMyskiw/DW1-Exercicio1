function calcular() {

    let entrada = document.getElementById("entrada").value;
    let saida = document.getElementById("saida").value;

    let carroGrande = document.getElementById("carroGrande").checked;
    let clienteFrequente = document.getElementById("clienteFrequente").checked;

    let resultado = document.getElementById("resultado");

    if (!entrada || !saida) {
        resultado.innerHTML = "Preencha as datas corretamente!";
        return;
    }

    let dataEntrada = new Date(entrada);
    let dataSaida = new Date(saida);

    if (isNaN(dataEntrada.getTime()) || isNaN(dataSaida.getTime())) {
        resultado.innerHTML = "Data inválida!";
        return;
    }

    if (dataEntrada >= dataSaida) {
        resultado.innerHTML = "A data de entrada não pode ser depois ou igual à saída!";
        return;
    }

    let diffMs = dataSaida - dataEntrada;
    let horas = diffMs / (1000 * 60 * 60);

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

    resultado.innerHTML =
        "Tempo: " + horas.toFixed(2) + " horas<br>" +
        "Total: R$ " + valor.toFixed(2).replace(".", ",");
}