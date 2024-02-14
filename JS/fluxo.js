document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById("grafico");
    var contexto = canvas.getContext("2d");
  
    // Dados do gráfico
    var dados = {
      labels: ["100", "80", "60", "40", "20", "0"],
      datasets: [{
        label: "Fluxo de Pessoas",
        hora: ["06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
      }]
    };
  
    // Configuração do gráfico
    var opcoes = {
      responsive: true,
      maintainAspectRatio: false
    };
  
    // Criação do gráfico
    var grafico = new Chart(contexto, {
      type: "bar",
      hora: dados,
      options: opcoes
    });
  });