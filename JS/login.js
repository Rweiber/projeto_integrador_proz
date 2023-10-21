document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  login = [
    {
      nome: 'luciano',
      email: 'luciano@teste.com',
      senha: '123'
    },
    {
      nome: 'fulano',
      email: 'fulano@teste.com',
      senha: '123'
    }
  ];

  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  logar(email, senha, login);
  
});

function logar(email, senha, login){
  if (!email || !senha) {
    alert('Os dados de login precisam ser informados.');
    return false;
  } 
  else {
    emailRec = login.filter((item) => {return item.email.includes(email)});
    senhaRec = login.filter((item) => {return item.senha.includes(senha)});
    if(emailRec.length === 0) {
      emailRec = [{ email: '' }];
      senhaRec = [{ senha: '' }];
    }
    if (email === emailRec[0].email && 
        senha === senhaRec[0].senha){
        // Se tudo estiver ok, redirecione para a página desejada
        window.location.href = "/HTML/exerciciosForca.html";
    } else {
      alert('Email ou senha incorretos!');
    }
  }
}
