function entrar() {

  let user = document.getElementById("usuario").value;
  let pass = document.getElementById("senha").value;

  let erro = document.getElementById("erro");

  if (user === "admin" && pass === "1234") {

    document.getElementById("login").style.display = "none";
    document.getElementById("menu").style.display = "block";

    erro.innerText = "";

  } else {
    erro.innerText = "Usuário ou senha incorretos!";
  }
}

function sair() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("login").style.display = "block";

  document.getElementById("usuario").value = "";
  document.getElementById("senha").value = "";
}