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


