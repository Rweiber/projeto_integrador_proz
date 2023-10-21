let bdLogin = [
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

function setBdLogin(novoArray){
    bdLogin += novoArray;
}

function getBdLogin(){
    return bdLogin;
}

export {setBdLogin, getBdLogin}

