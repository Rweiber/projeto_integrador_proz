// Validção do formulario

document.querySelector('.enviar').addEventListener('click', function(event) {
    event.preventDefault();
    
    var nome = document.querySelector('input[name="nome"]').value;
    var email = document.querySelector('#email').value;
    var senha = document.querySelector('#senha').value;
    var confirmarSenha = document.querySelector('#confirmar-senha').value;
    
    if (!nome || !email || !senha || !confirmarSenha) {
        alert('Por favor, preencha todos os campos.');
    } else if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
    } else {
        window.location.href = '/HTML/login.html';
    }
});
