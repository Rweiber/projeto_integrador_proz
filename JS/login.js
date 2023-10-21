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

  bdTreino = [];

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
      this.bdLogin = JSON.parse(dadosSalvos);
    }    
    
    emailRec = bdLogin.filter((item) => {return item.email.includes(email)});
    if(emailRec.length === 0) {
      emailRec = [{ email: '', senha: '' }];
    }
    if (email === emailRec[0].email && 
        senha === emailRec[0].senha){
        
        this.bdTreino = [
          {email: email, treino:{
                                  nome: '',
                                  repsticoes: '',
                                  series: '',
                                  peso: ''
                                }
          }];

        localStorage.setItem('dadosTreino', JSON.stringify(this.bdTreino));
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
  document.querySelector('.enviar').addEventListener('click', function(event) {
    event.preventDefault();
    
    var cadNome = document.getElementById('cadNome').value;
    var cadEmail = document.getElementById('cadEmail').value;
    var cadSenha = document.getElementById('cadSenha').value;
    var confirmarSenha = document.getElementById('confirmar-senha').value;
    
    if (!cadNome || !cadEmail || !cadSenha || !confirmarSenha) {
        alert('Por favor, preencha todos os campos.');
    } else if (cadSenha !== confirmarSenha) {
        alert('As senhas não coincidem.');
    } else {
        novoCadastro = [{
          nome: cadNome,
          email: cadEmail,
          senha: cadSenha
        }];
        this.bdLogin = bdLogin.concat(novoCadastro);
        console.log(this.bdLogin);
        localStorage.setItem('dadosUsuario', JSON.stringify(this.bdLogin));
        window.location.href = '/HTML/login.html';
    }
  });
}

function cadastroTreino() {
  // --------- COSTAS E BICEPS -----------
  var serRoscaBicepsMartelo = document.getElementsByClassName('serRoscaBicepsMartelo').value;
  var repRoscaBicepsMartelo = document.getElementsByClassName('repRoscaBicepsMartelo').value;
  var pesRoscaBicepsMartelo = document.getElementsByClassName('pesRoscaBicepsMartelo').value;

  var serPuxadaAltaAberta = document.getElementsByClassName('serRoscaBicepsMartelo').value;
  var repPuxadaAltaAberta = document.getElementsByClassName('repRoscaBicepsMartelo').value;
  var pesPuxadaAltaAberta = document.getElementsByClassName('pesRoscaBicepsMartelo').value;

  var serRemadaBaixa = document.getElementsByClassName('serRemadaBaixa').value;
  var repRemadaBaixa = document.getElementsByClassName('repRemadaBaixa').value;
  var pesRemadaBaixa = document.getElementsByClassName('pesRemadaBaixa').value;

  var serRoscaBicepsCabo = document.getElementsByClassName('serRoscaBicepsCabo').value;
  var repRoscaBicepsCabo = document.getElementsByClassName('repRoscaBicepsCabo').value;
  var pesRoscaBicepsCabo = document.getElementsByClassName('pesRoscaBicepsCabo').value;

  // --------- PEITO E TRICEPS -----------
  var serSupinoInclinadoBarra = document.getElementsByClassName('serSupinoInclinadoBarra').value;
  var repSupinoInclinadoBarra = document.getElementsByClassName('repSupinoInclinadoBarra').value;
  var pesSupinoInclinadoBarra = document.getElementsByClassName('pesSupinoInclinadoBarra').value;

  var serSupinoReto = document.getElementsByClassName('serSupinoReto').value;
  var repSupinoReto = document.getElementsByClassName('repSupinoReto').value;
  var pesSupinoReto = document.getElementsByClassName('pesSupinoReto').value;

  var serRoscaTricepsTesta = document.getElementsByClassName('serRoscaTricepsTesta').value;
  var repRoscaTricepsTesta = document.getElementsByClassName('repRoscaTricepsTesta').value;
  var pesRoscaTricepsTesta = document.getElementsByClassName('pesRoscaTricepsTesta').value;

  var serTricepsPuxadaPulley = document.getElementsByClassName('serTricepsPuxadaPulley').value;
  var repTricepsPuxadaPulley = document.getElementsByClassName('repTricepsPuxadaPulley').value;
  var pesTricepsPuxadaPulley = document.getElementsByClassName('pesTricepsPuxadaPulley').value;

  // --------- OMBRO E ABDOMEN -----------
  var serDesenvolvimentoArnold = document.getElementsByClassName('serDesenvolvimentoArnold').value;
  var repDesenvolvimentoArnold = document.getElementsByClassName('repDesenvolvimentoArnold').value;
  var pesDesenvolvimentoArnold = document.getElementsByClassName('pesDesenvolvimentoArnold').value;

  var serOmbrosElevecao = document.getElementsByClassName('serOmbrosElevecao').value;
  var repOmbrosElevecao = document.getElementsByClassName('repOmbrosElevecao').value;
  var pesOmbrosElevecao = document.getElementsByClassName('pesOmbrosElevecao').value;

  var serPranchaAbdominal = document.getElementsByClassName('serPranchaAbdominal').value;
  var repPranchaAbdominal = document.getElementsByClassName('repPranchaAbdominal').value;
  var pesPranchaAbdominal = document.getElementsByClassName('pesPranchaAbdominal').value;

  var serAbdominalObliquo = document.getElementsByClassName('serAbdominalObliquo').value;
  var repAbdominalObliquo = document.getElementsByClassName('repAbdominalObliquo').value;
  var pesAbdominalObliquo = document.getElementsByClassName('pesAbdominalObliquo').value;

  // ---------     PERNAS      -----------
  var serAgachamentoBarra = document.getElementsByClassName('serAgachamentoBarra').value;
  var repAgachamentoBarra = document.getElementsByClassName('repAgachamentoBarra').value;
  var pesAgachamentoBarra = document.getElementsByClassName('pesAgachamentoBarra').value;

  var serElevacaoPelvica = document.getElementsByClassName('serElevacaoPelvica').value;
  var repElevacaoPelvica = document.getElementsByClassName('repElevacaoPelvica').value;
  var pesElevacaoPelvica = document.getElementsByClassName('pesElevacaoPelvica').value;

  var serCadeiraExtensora = document.getElementsByClassName('serCadeiraExtensora').value;
  var repCadeiraExtensora = document.getElementsByClassName('repCadeiraExtensora').value;
  var pesCadeiraExtensora = document.getElementsByClassName('pesCadeiraExtensora').value;

  var serFlexora = document.getElementsByClassName('serFlexora').value;
  var repFlexora = document.getElementsByClassName('repFlexora').value;
  var pesFlexora = document.getElementsByClassName('pesFlexora').value;

}