// ох ёмаё, обогащённый уран?!?!
let gif1 = document.getElementById('gggggg');
let gif2 = document.getElementById('ddddd');
let random = Math.random() * 360;

gif1.addEventListener('click', (event) => {
    for (let i = 0; i < 1488; i++) {
        gif1.style.transform = `rotate(${random}deg) scale(${random})`;
    }
});

// Детектим клик на втором элементе
gif2.addEventListener('click', (event) => {
    for (let i = 0; i < 1488; i++) {
        gif2.style.transform = `rotate(${random}deg) scale(${random})`;
    }
});
