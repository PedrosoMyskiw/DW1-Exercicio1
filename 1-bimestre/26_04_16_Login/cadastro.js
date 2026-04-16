function cadastrar() {

  let nome = document.getElementById("nome").value.trim();
  let cpf = document.getElementById("cpf").value.trim();
  let email = document.getElementById("email").value.trim();
  let senha = document.getElementById("senha").value;
  let confirmar = document.getElementById("confirmar").value;

  let erro = document.getElementById("erro");
  let box = document.querySelector(".box");

  function mostrarErro(msg) {
    erro.innerText = msg;

    box.classList.add("erro");

    setTimeout(() => {
      box.classList.remove("erro");
    }, 300);
  }

  if (nome.length < 3) {
    mostrarErro("Nome inválido!");
    return;
  }

  if (!/^\d{11}$/.test(cpf)) {
    mostrarErro("CPF deve ter 11 números!");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    mostrarErro("Email inválido!");
    return;
  }

  if (senha.length < 4) {
    mostrarErro("Senha muito curta!");
    return;
  }

  if (senha !== confirmar) {
    mostrarErro("Senhas não coincidem!");
    return;
  }

  localStorage.setItem("nome", nome);
  localStorage.setItem("cpf", cpf);
  localStorage.setItem("email", email);
  localStorage.setItem("senha", senha);

  alert("Cadastro realizado com sucesso!");

  window.location.href = "login.html";
}

function voltar() {
  window.location.href = "login.html";
}

document.getElementById("cpf").addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});