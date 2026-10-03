const whatsapp = document.querySelector('#whatsapp');

// Coloque aqui o número real da Savant, somente números:
// exemplo: 5544999999999
const numero = '5544999999999';

const mensagem =
  'Olá! Gostaria de solicitar uma vistoria de entrada.';

whatsapp.href =
  `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
