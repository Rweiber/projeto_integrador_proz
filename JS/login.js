document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  if (!email) {
      alert('Por favor, insira seu email.');
      return false;
  }

  if (!senha) {
      alert('Por favor, insira sua senha.');
      return false;
  }

  // Se tudo estiver ok, redirecione para a página desejada
  window.location.href = "/HTML/exerciciosForca.html";
});
