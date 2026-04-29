// Configuração do fundo estrelado
function createStars() {
    const starsContainer = document.getElementById('stars-container');
    const starsCount = window.innerWidth < 768 ? 200 : 400;
    
    // Limpa estrelas existentes
    starsContainer.innerHTML = '';
    
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // 10% das estrelas serão douradas especiais
        if (Math.random() < 0.1) {
            star.classList.add('special-star');
        }
        
        // Tamanho aleatório
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Posição aleatória
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Brilho aleatório
        star.style.opacity = Math.random() * 0.7 + 0.3;
        
        // Duração da animação aleatória
        const duration = Math.random() * 8 + 5;
        star.style.animationDuration = `${duration}s`;
        
        // Atraso aleatório
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        starsContainer.appendChild(star);
    }
    
    console.log(`Criadas ${starsCount} estrelas no céu noturno`);
}

// Controle do menu lateral
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenuBtn = document.getElementById('closeMenuBtn');

function toggleMenu() {
    sideMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    menuToggle.classList.toggle('rotated');
    
    if (sideMenu.classList.contains('active')) {
        console.log('Menu lateral aberto');
    } else {
        console.log('Menu lateral fechado');
    }
}

menuToggle.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

// Controle das mensagens sequenciais (melhorado)
const messages = document.querySelectorAll('.message');
const indicators = document.querySelectorAll('.indicator-dot');
let currentMessageIndex = 0;
let messageInterval;
let pauseAutoPlay = false; // pausa quando o mouse está sobre as mensagens
const MESSAGE_DISPLAY_TIME = 12000; // 12 segundos

// Barra de progresso (opcional: insira <div id="progressBar" class="message-progress"></div> após os indicadores)
function updateProgressBar(remainingTime, totalTime) {
    const bar = document.getElementById('progressBar');
    if (!bar) return;
    const percent = ((totalTime - remainingTime) / totalTime) * 100;
    bar.style.width = `${percent}%`;
}

function showMessage(index) {
    // Remove 'active' com fade
    messages.forEach(msg => msg.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));

    // Adiciona classe com animação
    messages[index].classList.add('active');
    indicators[index].classList.add('active');
    currentMessageIndex = index;

    resetAutoPlay();
}

function nextMessage() {
    let nextIndex = (currentMessageIndex + 1) % messages.length;
    showMessage(nextIndex);
}

function prevMessage() {
    let prevIndex = (currentMessageIndex - 1 + messages.length) % messages.length;
    showMessage(prevIndex);
}

function resetAutoPlay() {
    clearInterval(messageInterval);
    if (!pauseAutoPlay) {
        messageInterval = setInterval(() => {
            nextMessage();
        }, MESSAGE_DISPLAY_TIME);
    }
}

// Pausa quando o mouse entra no container de mensagens
document.querySelector('.messages-container').addEventListener('mouseenter', () => {
    pauseAutoPlay = true;
    clearInterval(messageInterval);
});

document.querySelector('.messages-container').addEventListener('mouseleave', () => {
    pauseAutoPlay = false;
    resetAutoPlay();
});

// Indicadores clicáveis
indicators.forEach((indicator, idx) => {
    indicator.addEventListener('click', () => showMessage(idx));
});

// Navegação por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextMessage();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevMessage();
    }
});

// Contador em tempo real com requestAnimationFrame
function updateCounter() {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) return;

    const startDate = new Date('2025-12-02T00:00:00');

    function update() {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysElement.textContent = days;
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');

        requestAnimationFrame(update);
    }

    update();
}

// Botão CTA (se existir)
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        showMessage(0);
        ctaButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            ctaButton.style.transform = '';
        }, 200);
    });
}

// Inicialização
showMessage(0);
updateCounter();

// Inicialização
function init() {
    createStars();
    updateCounter();
    
    // Adiciona efeito de brilho ao fundo
    const shineEffect = document.createElement('div');
    shineEffect.classList.add('shine-effect');
    document.body.appendChild(shineEffect);
    
    // Efeito de entrada inicial
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Inicia a sequência de mensagens
    resetMessageInterval();
    
    console.log('Site inicializado com sucesso!');
    console.log(`Tempo de exibição por mensagem: ${MESSAGE_DISPLAY_TIME/1000} segundos`);
    console.log('Data do relacionamento: 02/12/2025');
    console.log('Aniversário de 2 meses: 02/02/2026');
}

// Ajusta as estrelas ao redimensionar a janela
window.addEventListener('resize', () => {
    createStars();
    console.log('Janela redimensionada - Estrelas recriadas');
});

// Inicializa o site quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);













// Cole no console do navegador (F12) e execute
console.log('🔍 VERIFICAÇÃO DE FAVICONS');

// 1. Verificar todos os links de ícone
const links = document.querySelectorAll('link[rel*="icon"], link[rel="manifest"]');
links.forEach(link => {
    console.log(`${link.rel}: ${link.href}`);
    
    // Testar se arquivo existe
    fetch(link.href)
        .then(res => console.log(`   ✅ ${link.href} - ${res.ok ? 'EXISTE' : '404'}`))
        .catch(err => console.log(`   ❌ ${link.href} - ERRO: ${err.message}`));
});

// 2. Verificar manifest
const manifestLink = document.querySelector('link[rel="manifest"]');
if (manifestLink) {
    fetch(manifestLink.href)
        .then(res => res.json())
        .then(data => {
            console.log('📱 MANIFEST ENCONTRADO:', data);
            console.log('Ícones no manifest:', data.icons.length);
        })
        .catch(err => console.log('❌ ERRO no manifest:', err));
}

// 3. Verificar favicon padrão do navegador
console.log('🎯 Favicon detectado pelo navegador:');
console.log(document.querySelector('link[rel="shortcut icon"]')?.href || 'Nenhum');








