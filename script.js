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

// Controle das mensagens sequenciais
const messages = document.querySelectorAll('.message');
const indicators = document.querySelectorAll('.indicator-dot');
let currentMessageIndex = 0;
let messageInterval;
const MESSAGE_DISPLAY_TIME = 12000; // 12 segundos por mensagem

function showMessage(index) {
    // Esconde todas as mensagens
    messages.forEach(msg => {
        msg.classList.remove('active');
    });
    
    // Remove a classe ativa de todos os indicadores
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Mostra a mensagem selecionada
    messages[index].classList.add('active');
    indicators[index].classList.add('active');
    currentMessageIndex = index;
    
    // Log no console
    console.log(`Mostrando mensagem ${index + 1}: "${messages[index].querySelector('h1, h2').textContent}"`);
    
    // Reinicia o intervalo automático
    resetMessageInterval();
}

function nextMessage() {
    let nextIndex = currentMessageIndex + 1;
    if (nextIndex >= messages.length) {
        nextIndex = 0;
    }
    showMessage(nextIndex);
}

function resetMessageInterval() {
    clearInterval(messageInterval);
    messageInterval = setInterval(nextMessage, MESSAGE_DISPLAY_TIME);
    console.log(`Próxima mensagem em ${MESSAGE_DISPLAY_TIME/1000} segundos`);
}

// Adiciona evento de clique aos indicadores
indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        const messageIndex = parseInt(indicator.getAttribute('data-message')) - 1;
        showMessage(messageIndex);
    });
});

// Atualiza o contador em tempo real
function updateCounter() {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Data de início do relacionamento: 02/12/2025
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
        
        // Log a cada minuto
        if (seconds === 0) {
            console.log(`Tempo de relacionamento: ${days} dias, ${hours}h ${minutes}m`);
        }
    }
    
    update();
    setInterval(update, 1000);
    
    console.log('Contador iniciado a partir de 02/12/2025');
}

// Botão "Reacenda a Conexão"
document.querySelector('.cta-button').addEventListener('click', () => {
    showMessage(0); // Volta para a primeira mensagem
    // Efeito especial
    const btn = document.querySelector('.cta-button');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 200);
    
    console.log('Botão "Reacenda a Conexão" clicado - Retornando à primeira mensagem');
});

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