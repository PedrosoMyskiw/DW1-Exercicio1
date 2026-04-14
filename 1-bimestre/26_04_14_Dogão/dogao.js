function calcular() {

  let q1 = parseInt(document.getElementById("i1").value) || 0;
  let q2 = parseInt(document.getElementById("i2").value) || 0;
  let q3 = parseInt(document.getElementById("i3").value) || 0;
  let q4 = parseInt(document.getElementById("i4").value) || 0;
  let q5 = parseInt(document.getElementById("i5").value) || 0;

  if (q1 < 0 || q2 < 0 || q3 < 0 || q4 < 0 || q5 < 0) {
    let resposta = document.getElementById("resposta");

    resposta.innerText = "Digite valores válidos";
    resposta.classList.add("erro");

    setTimeout(() => {
      resposta.classList.remove("erro");
    }, 300);

    return;
  }

  let total = (q1 * 22) + (q2 * 26) + (q3 * 29) + (q4 * 5) + (q5 * 8);
  let tquantidade = q1 + q2 + q3 + q4 + q5;

  document.getElementById("resposta").innerHTML =
    "Total: R$ " + total.toFixed(2).replace(".", ",") +
    "<br>Quantidade: " + tquantidade;
}

document.querySelectorAll("input[type='number']").forEach(input => {

  input.addEventListener("keydown", function (e) {
    if (["e", "E", "+", "-", "."].includes(e.key)) {
      e.preventDefault();
    }
  });

  input.addEventListener("paste", function (e) {
    let paste = (e.clipboardData || window.clipboardData).getData("text");
    if (!/^\d+$/.test(paste)) {
      e.preventDefault();
    }
  });

  input.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
  });

});