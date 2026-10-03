const whatsapp = document.querySelector("#whatsapp");

// Troque pelo WhatsApp oficial da Savant.
// Use somente números: DDI + DDD + telefone.
const numero = "5544999999999";

const mensagem =
  "Olá! Gostaria de solicitar uma vistoria cautelar.";

whatsapp.href =
  `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
