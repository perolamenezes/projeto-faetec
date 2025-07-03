// Procura no HTML um elemento que tenha o ID 'btnEntrar'
document.getElementById('btnEntrar')

// Adiciona um ouvinte de evento (event listener) ao botão encontrado
// Esse ouvinte "escuta" o clique do usuário no botão
.addEventListener('click', function () {

  // Quando o botão for clicado, o navegador será redirecionado para a página 'agendamento.html'
  window.location.href = 'agendamento.html';

});
