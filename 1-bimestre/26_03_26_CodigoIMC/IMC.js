function Calcular(){
    let peso = parseFloat(document.getElementById("inputPeso").value);
    let altura = parseFloat(document.getElementById("inputAltura").value);

    let erro = document.getElementById("erro");
    let resposta = document.getElementById("resposta");

    erro.style.display = "none";
    resposta.innerHTML = "";

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        erro.innerHTML = "Preencha os campos corretamente!";
        erro.style.display = "block";
        return;
    }

    let IMC = peso / (altura * altura);

    let resp = "";

    if(IMC < 18.5){
        resp = "Abaixo do peso";
    } else if(IMC < 25){
        resp = "Peso normal";
    } else if(IMC < 30){
        resp = "Sobrepeso";
    } else if(IMC < 35){
        resp = "Obesidade grau I";
    } else if(IMC < 40){
        resp = "Obesidade grau II";
    } else{
        resp = "Obesidade grau III";
    }

    resposta.innerHTML = "IMC: " + IMC.toFixed(2) + "<br>" + resp;
}