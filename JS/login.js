// Validção do formulario

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
          {email: email}];

        localStorage.setItem('dadosTreino', JSON.stringify(this.bdTreino));
        // Se tudo estiver ok, redirecione para a página desejada
        window.location.href = "/HTML/exerciciosForca.html";
    } else {
      alert('Email ou senha incorretos!');
    }
    window.location.href = "/HTML/exerciciosForca.html";
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
  var serRoscaBicepsMartelo = document.querySelector('.serRoscaBicepsMartelo').value;
  var repRoscaBicepsMartelo = document.querySelector('.repRoscaBicepsMartelo').value;
  var pesRoscaBicepsMartelo = document.querySelector('.pesRoscaBicepsMartelo').value;

  var serPuxadaAltaAberta = document.querySelector('.serRoscaBicepsMartelo').value;
  var repPuxadaAltaAberta = document.querySelector('.repRoscaBicepsMartelo').value;
  var pesPuxadaAltaAberta = document.querySelector('.pesRoscaBicepsMartelo').value;

  var serRemadaBaixa = document.querySelector('.serRemadaBaixa').value;
  var repRemadaBaixa = document.querySelector('.repRemadaBaixa').value;
  var pesRemadaBaixa = document.querySelector('.pesRemadaBaixa').value;

  var serRoscaBicepsCabo = document.querySelector('.serRoscaBicepsCabo').value;
  var repRoscaBicepsCabo = document.querySelector('.repRoscaBicepsCabo').value;
  var pesRoscaBicepsCabo = document.querySelector('.pesRoscaBicepsCabo').value;

  // --------- PEITO E TRICEPS -----------
  var serSupinoInclinadoBarra = document.querySelector('.serSupinoInclinadoBarra').value;
  var repSupinoInclinadoBarra = document.querySelector('.repSupinoInclinadoBarra').value;
  var pesSupinoInclinadoBarra = document.querySelector('.pesSupinoInclinadoBarra').value;

  var serSupinoReto = document.querySelector('.serSupinoReto').value;
  var repSupinoReto = document.querySelector('.repSupinoReto').value;
  var pesSupinoReto = document.querySelector('.pesSupinoReto').value;

  var serRoscaTricepsTesta = document.querySelector('.serRoscaTricepsTesta').value;
  var repRoscaTricepsTesta = document.querySelector('.repRoscaTricepsTesta').value;
  var pesRoscaTricepsTesta = document.querySelector('.pesRoscaTricepsTesta').value;

  var serTricepsPuxadaPulley = document.querySelector('.serTricepsPuxadaPulley').value;
  var repTricepsPuxadaPulley = document.querySelector('.repTricepsPuxadaPulley').value;
  var pesTricepsPuxadaPulley = document.querySelector('.pesTricepsPuxadaPulley').value;

  // --------- OMBRO E ABDOMEN -----------
  var serDesenvolvimentoArnold = document.querySelector('.serDesenvolvimentoArnold').value;
  var repDesenvolvimentoArnold = document.querySelector('.repDesenvolvimentoArnold').value;
  var pesDesenvolvimentoArnold = document.querySelector('.pesDesenvolvimentoArnold').value;

  var serOmbrosElevacao = document.querySelector('.serOmbrosElevacao').value;
  var repOmbrosElevacao = document.querySelector('.repOmbrosElevacao').value;
  var pesOmbrosElevacao = document.querySelector('.pesOmbrosElevacao').value;

  var serPranchaAbdominal = document.querySelector('.serPranchaAbdominal').value;
  var repPranchaAbdominal = document.querySelector('.repPranchaAbdominal').value;
  var pesPranchaAbdominal = document.querySelector('.pesPranchaAbdominal').value;

  var serAbdominalObliquo = document.querySelector('.serAbdominalObliquo').value;
  var repAbdominalObliquo = document.querySelector('.repAbdominalObliquo').value;
  var pesAbdominalObliquo = document.querySelector('.pesAbdominalObliquo').value;

  // ---------     PERNAS      -----------
  var serAgachamentoBarra = document.querySelector('.serAgachamentoBarra').value;
  var repAgachamentoBarra = document.querySelector('.repAgachamentoBarra').value;
  var pesAgachamentoBarra = document.querySelector('.pesAgachamentoBarra').value;

  var serElevacaoPelvica = document.querySelector('.serElevacaoPelvica').value;
  var repElevacaoPelvica = document.querySelector('.repElevacaoPelvica').value;
  var pesElevacaoPelvica = document.querySelector('.pesElevacaoPelvica').value;

  var serCadeiraExtensora = document.querySelector('.serCadeiraExtensora').value;
  var repCadeiraExtensora = document.querySelector('.repCadeiraExtensora').value;
  var pesCadeiraExtensora = document.querySelector('.pesCadeiraExtensora').value;

  var serFlexora = document.querySelector('.serFlexora').value;
  var repFlexora = document.querySelector('.repFlexora').value;
  var pesFlexora = document.querySelector('.pesFlexora').value;

  dadosEmail = [{
    email: bdTreino.email
  }];
  dadosTreino = [
    {
      nome: 'COSTAS E BICEPS',
      series: serRoscaBicepsMartelo,
      repeticoes: repRoscaBicepsMartelo,
      peso: pesRoscaBicepsMartelo
    },
    {
      nome: 'COSTAS E BICEPS',
      series: serPuxadaAltaAberta,
      repeticoes: repPuxadaAltaAberta,
      peso: pesPuxadaAltaAberta
    },
    {
      nome: 'COSTAS E BICEPS',
      series: serRemadaBaixa,
      repeticoes: repRemadaBaixa,
      peso: pesRemadaBaixa
    },
    {
      nome: 'COSTAS E BICEPS',
      series: serRoscaBicepsCabo,
      repeticoes: repRoscaBicepsCabo,
      peso: pesRoscaBicepsCabo
    },
    {
      nome: 'PEITO E TRÍCEPS',
      series: serSupinoInclinadoBarra,
      repeticoes: repSupinoInclinadoBarra,
      peso:pesSupinoInclinadoBarra
    },
    {
      nome: 'PEITO E TRÍCEPS',
      series: serSupinoReto,
      repeticoes: repSupinoReto,
      peso: pesSupinoReto
    },
    {
      nome: 'PEITO E TRÍCEPS',
      series: serRoscaTricepsTesta,
      repeticoes: repRoscaTricepsTesta,
      peso: pesRoscaTricepsTesta
    },
    {
      nome: 'PEITO E TRÍCEPS',
      series: serTricepsPuxadaPulley,
      repeticoes: repTricepsPuxadaPulley,
      peso: pesTricepsPuxadaPulley
    },
    {
      nome: 'OMBRO E ABDOMÊN',
      series: serDesenvolvimentoArnold,
      repeticoes: repDesenvolvimentoArnold,
      peso: pesDesenvolvimentoArnold
    },
    {
      nome: 'OMBRO E ABDOMÊN',
      series: serOmbrosElevacao,
      repeticoes: repOmbrosElevacao,
      peso: pesOmbrosElevacao
    },
    {
      nome: 'OMBRO E ABDOMÊN',
      series: serPranchaAbdominal,
      repeticoes: repPranchaAbdominal,
      peso: pesPranchaAbdominal
    },
    {
      nome: 'OMBRO E ABDOMÊN',
      series: serAbdominalObliquo,
      repeticoes: repAbdominalObliquo,
      peso: pesAbdominalObliquo
    },
    {
      nome: 'PERNAS',
      series: serAgachamentoBarra,
      repeticoes: repAgachamentoBarra,
      peso: pesAgachamentoBarra
    },
    {
      nome: 'PERNAS',
      series: serElevacaoPelvica,
      repeticoes: repElevacaoPelvica,
      peso: pesElevacaoPelvica
    },
    {
      nome: 'PERNAS',
      series: serCadeiraExtensora,
      repeticoes: repCadeiraExtensora,
      peso: pesCadeiraExtensora
    },
    {
      nome: 'PERNAS',
      series: serFlexora,
      repeticoes: repFlexora,
      peso: pesFlexora
    },
  ];
  dadosSalvosTreino = localStorage.getItem('dadosTreino');
  this.bdTreino = bdTreino.concat(JSON.parse(dadosSalvosTreino), dadosTreino);
  localStorage.setItem('dadosTreino', JSON.stringify(this.bdTreino));
  atualizedDB = localStorage.getItem('dadosTreino');
  //console.log(atualizedDB);

  baixarCSV(atualizedDB, "dados");
}

function baixarCSV(atualizedDB) {
  const csv = atualizedDB;
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Exercícios para hoje" + ".csv";
  link.click();
}

