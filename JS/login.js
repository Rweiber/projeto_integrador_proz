document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

}); 

  bdLogin = [
    {
      nome: 'luciano',
      email: 'luciano@teste.com',
      senha: '123'
    },
    {
      nome: 'fulano',
      email: 'fulano@teste.com',
      senha: '123'
  }];

function logar(){
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  if (!email || !senha) {
    alert('Os dados de login precisam ser informados.');
    return false;
  } 
  else {
    dadosSalvos = localStorage.getItem('dadosUsuario');
    
    if(dadosSalvos !== null){
      bdLogin = JSON.parse(dadosSalvos);
    }    
    console.log(bdLogin);
    emailRec = bdLogin.filter((item) => {return item.email.includes(email)});
    if(emailRec.length === 0) {
      emailRec = [{ email: '', senha: '' }];
    }
    if (email === emailRec[0].email && 
        senha === emailRec[0].senha){
        // Se tudo estiver ok, redirecione para a página desejada
        window.location.href = "/HTML/exerciciosForca.html";
    } else {
      alert('Email ou senha incorretos!');
    }
  }
}

function recupSenha() {
  var recEmail = document.getElementById('recEmail').value;
  var nSenha = document.getElementById('nSenha').value;
  var cNSenha = document.getElementById('cNSenha').value;

  if(nSenha !== cNSenha) {
    alert('As senha informadas não conferem!');
  }
  else{
    index = this.bdLogin.findIndex((item) => {return item.email.includes(recEmail)})
    
    if (index !== -1) {
      const itemEmail = {
        nome: bdLogin[index].nome,
        email: bdLogin[index].email,
        senha: nSenha 
      };
    
      this.bdLogin[index] = itemEmail;
      localStorage.setItem('dadosUsuario', JSON.stringify(this.bdLogin));
      document.getElementById('rSenha').reset();
      window.location.href = "/HTML/login.html";
    }else{
      alert('E-mail não encontrado na base de dados!');
    }
  }
}

function cadastrar() {
  
}
