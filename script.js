function toggleMenu() {
  const mainMenu = document.querySelector('.main-menu');
  mainMenu.classList.toggle('active');
}
// Uma função que é chamada quando o botão do menu é clicado para mostrar/ocultar o menu.

// Seleciona o botão do menu hamburguer
const menuButton = document.getElementById('menu-button');

// Seleciona o iframe que contém o menu
const menuFrame = document.querySelector('iframe');

// Adiciona um evento de clique ao botão do menu hamburguer
menuButton.addEventListener('click', () => {
  // Exibe ou oculta o menu ao clicar no botão
  menuFrame.classList.toggle('active');
});
// Adiciona um ouvinte de evento de clique ao botão do menu para mostrar/ocultar o menu ao clicar no botão.

// Seu JavaScript
const form = document.getElementById('contactForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtenha os valores dos campos
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  // Valide os dados, por exemplo, verifique se o email é válido

  // Use a API Fetch para enviar os dados para o servidor
  fetch('/seu-endpoint-de-envio-de-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nome, email, mensagem }),
  })
    .then((response) => {
      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
      } else {
        alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
      }
    })
    .catch((error) => {
      console.error('Erro:', error);
    });
});
// Lida com o envio de um formulário, impedindo o comportamento padrão, obtendo os valores dos campos e enviando esses dados para um servidor usando a API Fetch. Em seguida, exibe uma mensagem de sucesso ou erro com base na resposta do servidor.
