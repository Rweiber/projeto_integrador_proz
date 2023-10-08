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

/*carrosel 1*/

document.getElementById("myButton").addEventListener("click", function() {
    var x = document.getElementById("mySection");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  });

  /*carrosel 2*/

  document.getElementById("myButton2").addEventListener("click", function() {
    var x = document.getElementById("mySection2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  });

    /*carrosel 3*/

  document.getElementById("myButton3").addEventListener("click", function() {
    var x = document.getElementById("mySection3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  });

