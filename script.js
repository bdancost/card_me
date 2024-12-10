"use strict";

const diaIcon = document.querySelector(".icones_dia");
const noiteIcon = document.querySelector(".icones_noite");

// Função para ativar o tema claro
function light() {
  document.body.classList.remove("dark-mode");
}

// Função para ativar o tema escuro
function dark() {
  document.body.classList.add("dark-mode");
}

if (diaIcon && noiteIcon) {
  diaIcon.addEventListener("click", light);
  noiteIcon.addEventListener("click", dark);
} else {
  console.error("Ícones não encontrado no DOM");
}
