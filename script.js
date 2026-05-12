// Remove Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 800);
    }, 1500);
});

// Open Gift Logic
function openGift() {
    const giftBox = document.getElementById('giftBox');
    const hero = document.getElementById('hero');
    const reveal = document.getElementById('reveal');

    // Add opening animation
    giftBox.style.transform = 'translateY(-100px) rotate(15deg)';
    giftBox.style.opacity = '0';

    setTimeout(() => {
        hero.classList.add('hidden');
        reveal.classList.remove('hidden');
        setTimeout(() => reveal.classList.add('reveal-active'), 100);
        startConfetti();
    }, 600);
}

// Simple Confetti Effect
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
function startConfetti() {
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 2,
            color: `hsl(${Math.random() * 360}, 70%, 60%)`,
            velocity: Math.random() * 3 + 2
        });
    }
    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.y += p.velocity;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
    });
    requestAnimationFrame(animateConfetti);
}

// Music Toggle (Placeholder logic)
let isPlaying = false;
function toggleMusic() {
    const icon = document.getElementById('music-icon');
    isPlaying = !isPlaying;
    icon.innerHTML = isPlaying ? '🔊' : '🎵';
    // Add logic here to play/pause a background mp3
}
