document.addEventListener('DOMContentLoaded', () => {
  const enterBtn = document.getElementById('enter-btn');
  
  if (enterBtn) {
    enterBtn.addEventListener('click', enterSite);
  }
});

function enterSite() {
  const intro = document.getElementById('intro-screen');
  const mainSite = document.getElementById('main-site');

  if (!intro || !mainSite) return;

  // Плавный уход интро вверх
  intro.style.transform = 'translateY(-100vh)';
  intro.style.opacity = '0';

  setTimeout(() => {
    intro.style.display = 'none';
    mainSite.classList.remove('hidden-site');
    startDiamondRain(); // Запускаем падающие бриллианты
  }, 800);
}

// Генератор прозрачных падающих бриллиантов
function startDiamondRain() {
  const container = document.getElementById('diamond-rain');
  if (!container) return;

  const diamonds = ['💎', '✨', '🌸', '💖'];

  setInterval(() => {
    const el = document.createElement('div');
    el.classList.add('falling-diamond');
    
    el.innerText = diamonds[Math.floor(Math.random() * diamonds.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = (Math.random() * 12 + 10) + 'px';
    el.style.animationDuration = (Math.random() * 3 + 4) + 's';
    el.style.opacity = Math.random() * 0.4 + 0.2;

    container.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 7000);
  }, 300);
}