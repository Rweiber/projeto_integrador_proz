window.onload = function() {
    var repsButtons = document.querySelectorAll('.increase-reps1, .decrease-reps1');
    var loadButtons = document.querySelectorAll('.increase-load1, .decrease-load1');

    repsButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var input = this.parentElement.querySelector('input[id^="reps"]');
            var currentVal = parseInt(input.value, 10);
            if (this.classList.contains('increase-reps1')) {
                input.value = currentVal + 1;
            } else {
                input.value = Math.max(0, currentVal - 1);
            }
        });
    });

    loadButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var input = this.parentElement.querySelector('input[id^="load"]');
            var currentVal = parseInt(input.value, 10);
            if (this.classList.contains('increase-load1')) {
                input.value = currentVal + 10;
            } else {
                input.value = Math.max(0, currentVal - 10);
            }
        });
    });
};

// Lista de todos os carrosséis
var carousels = ["mySection", "mySection2", "mySection3", "mySection4"];

// Função para ocultar todos os carrosséis
function hideAllCarousels() {
    for (var i = 0; i < carousels.length; i++) {
        var x = document.getElementById(carousels[i]);
        x.style.display = "none";
    }
}

// Função para exibir um carrossel específico
function showCarousel(carouselId) {
    hideAllCarousels();
    var x = document.getElementById(carouselId);
    x.style.display = "block";
}

//Event listeners para cada botão
document.getElementById("myButton").addEventListener("click", function() {
    showCarousel("mySection");
});

document.getElementById("myButton2").addEventListener("click", function() {
    showCarousel("mySection2");
});

document.getElementById("myButton3").addEventListener("click", function() {
    showCarousel("mySection3");
});

document.getElementById("myButton4").addEventListener("click", function() {
    showCarousel("mySection4");
});


function showCarousel(carouselId) {
    var x = document.getElementById(carouselId);
    if (x.style.display === "block") {
        x.style.display = "none";  // Se o carrossel já estiver visível, oculte-o
    } else {
        hideAllCarousels();
        x.style.display = "block";  // Se o carrossel não estiver visível, exiba-o
    }
}
