const menuButton = document.getElementById("mobile_menu_icon");
const navList = document.getElementById("nav_list");

menuButton.addEventListener("click", () => {
  navList.classList.toggle("active");
});

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  alert("Mensagem enviada com sucesso!");

  this.reset();
});


function abrirPolitica() {
  document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}

