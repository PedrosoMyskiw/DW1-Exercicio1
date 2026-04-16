function entrar() {

  let email = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  let erro = document.getElementById("erro");
  let box = document.querySelector(".box");

  let userSalvo = localStorage.getItem("email");
  let senhaSalva = localStorage.getItem("senha");

  if (email === userSalvo && senha === senhaSalva) {

    window.location.href = "menu.html";

  } else {

    erro.innerText = "Login inválido!";

    box.classList.add("erro");

    setTimeout(() => {
      box.classList.remove("erro");
    }, 300);
  }
}

function irCadastro() {
  window.location.href = "cadastro.html";
}