const whatsapp = document.querySelector("#whatsapp");

// Troque pelo número oficial da Savant.
// Formato: DDI + DDD + telefone, somente números.
const numero = "5544999999999";

const mensagem =
  "Olá! Gostaria de solicitar um laudo imobiliário.";

whatsapp.href =
  `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
