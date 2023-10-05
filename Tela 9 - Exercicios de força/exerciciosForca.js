document.querySelector('.increase-reps').addEventListener('click', function() {
    let reps = document.getElementById('reps');
    reps.textContent = parseInt(reps.textContent) + 1;
});

document.querySelector('.decrease-reps').addEventListener('click', function() {
    let reps = document.getElementById('reps');
    reps.textContent = Math.max(parseInt(reps.textContent) - 1, 0);
});

document.querySelector('.increase-load').addEventListener('click', function() {
    let load = document.getElementById('load');
    load.textContent = parseInt(load.textContent) + 1;
});

document.querySelector('.decrease-load').addEventListener('click', function() {
    let load = document.getElementById('load');
    load.textContent = Math.max(parseInt(load.textContent) - 1, 0);
});
