window.onload = function() {
    var repsButtons = document.querySelectorAll('.increase-reps, .decrease-reps');
    var loadButtons = document.querySelectorAll('.increase-load, .decrease-load');

    repsButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var input = this.parentElement.querySelector('input[id^="reps"]');
            var currentVal = parseInt(input.value, 10);
            if (this.classList.contains('increase-reps')) {
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
            if (this.classList.contains('increase-load')) {
                input.value = currentVal + 1;
            } else {
                input.value = Math.max(0, currentVal - 1);
            }
        });
    });
};

