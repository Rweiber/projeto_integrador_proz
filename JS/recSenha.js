document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
    var nSenha = document.getElementById('nSenha').value;
    var cNSenha = document.getElementById('cNSenha').value;
  
    recupSenha(email, nSenha, cNSenha);
    
  });

  function recupSenha(email, nSenha, cNSenha) {
    console.log(email, nSenha, cNSenha);
  }