<?php
$servername = "localhost";
$username = "username";
$password = "";
$dbname = "cadastro_alunos";

// Cria a conexão
$conexao = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conexao->connect_error) {
  echo "erro"
}
else {
  echo "conexão efetuada com sucesso"
}
?>
