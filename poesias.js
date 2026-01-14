// Funcionalidades específicas para a página de poesias

document.addEventListener('DOMContentLoaded', function() {
    // Elementos do menu (reutilizados da página principal)
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    
    // Elementos do modal de nova poesia
    const newPoemBtn = document.getElementById('newPoemBtn');
    const poemModalOverlay = document.getElementById('poemModalOverlay');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const cancelPoemBtn = document.getElementById('cancelPoemBtn');
    const savePoemBtn = document.getElementById('savePoemBtn');
    
    // Elementos do formulário
    const poemTitle = document.getElementById('poemTitle');
    const poemContent = document.getElementById('poemContent');
    const poemIcon = document.getElementById('poemIcon');
    
    // Configurar o fundo estrelado (reutilizado da página principal)
    createStars();
    
    // Funcionalidade do menu lateral
    menuToggle.addEventListener('click', function() {
        sideMenu.classList.add('active');
        menuOverlay.classList.add('active');
    });
    
    closeMenuBtn.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);
    
    function closeMenu() {
        sideMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
    }
    
    // Funcionalidade do modal de nova poesia
    newPoemBtn.addEventListener('click', function() {
        // Limpar o formulário
        poemTitle.value = '';
        poemContent.value = '';
        poemIcon.value = 'fa-heart';
        
        // Mostrar o modal
        poemModalOverlay.style.display = 'flex';
    });
    
    closeModalBtn.addEventListener('click', closeModal);
    cancelPoemBtn.addEventListener('click', closeModal);
    poemModalOverlay.addEventListener('click', function(e) {
        if (e.target === poemModalOverlay) {
            closeModal();
        }
    });
    
    function closeModal() {
        poemModalOverlay.style.display = 'none';
    }
    
    // Salvar nova poesia
    savePoemBtn.addEventListener('click', function() {
        const title = poemTitle.value.trim();
        const content = poemContent.value.trim();
        const icon = poemIcon.value;
        
        if (!title || !content) {
            alert('Por favor, preencha o título e o conteúdo da poesia.');
            return;
        }
        
        // Criar um novo card de poesia
        const newPoemCard = createPoemCard(title, content, icon);
        
        // Adicionar ao container (no início)
        const poemsContainer = document.querySelector('.poems-container');
        poemsContainer.prepend(newPoemCard);
        
        // Fechar o modal
        closeModal();
        
        // Mostrar mensagem de sucesso
        showMessage('Poesia adicionada com sucesso!', 'success');
    });
    
    function createPoemCard(title, content, icon) {
        // Formatar a data atual
        const now = new Date();
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const dateString = now.toLocaleDateString('pt-BR', options);
        
        // Criar o elemento do card
        const card = document.createElement('div');
        card.className = 'poem-card';
        
        // Icon mapping
        const iconNames = {
            'fa-heart': 'Coração',
            'fa-feather-alt': 'Pena',
            'fa-star': 'Estrela',
            'fa-moon': 'Lua',
            'fa-sun': 'Sol',
            'fa-hand-holding-heart': 'Mão com coração'
        };
        
        card.innerHTML = `
            <div class="poem-card-header">
                <h3>${title}</h3>
                <div class="poem-icon">
                    <i class="fas ${icon}"></i>
                </div>
            </div>
            <div class="poem-content">
                ${content.replace(/\n/g, '<br>')}
            </div>
            <div class="poem-date">
                <i class="far fa-calendar"></i> ${dateString}
            </div>
        `;
        
        // Adicionar efeito de entrada
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 10);
        
        return card;
    }
    
    function showMessage(text, type) {
        // Criar elemento de mensagem
        const message = document.createElement('div');
        message.className = `message ${type}`;
        message.textContent = text;
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'rgba(46, 125, 50, 0.9)' : 'rgba(211, 47, 47, 0.9)'};
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            font-family: 'Raleway', sans-serif;
            font-weight: 600;
            z-index: 1001;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            transform: translateX(150%);
            transition: transform 0.5s;
        `;
        
        document.body.appendChild(message);
        
        // Mostrar mensagem
        setTimeout(() => {
            message.style.transform = 'translateX(0)';
        }, 10);
        
        // Remover após 3 segundos
        setTimeout(() => {
            message.style.transform = 'translateX(150%)';
            setTimeout(() => {
                if (message.parentNode) {
                    document.body.removeChild(message);
                }
            }, 500);
        }, 3000);
    }
    
    // Função para criar o fundo estrelado (reutilizada da página principal)
    function createStars() {
        const starsContainer = document.getElementById('stars-container');
        if (!starsContainer) return;
        
        // Limpar estrelas existentes
        starsContainer.innerHTML = '';
        
        // Criar 150 estrelas
        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Posição aleatória
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            // Tamanho aleatório entre 1px e 3px
            const size = Math.random() * 2 + 1;
            
            // Opacidade aleatória
            const opacity = Math.random() * 0.7 + 0.3;
            
            // Duração da animação aleatória
            const duration = Math.random() * 5 + 5;
            
            // Aplicar estilos
            star.style.cssText = `
                position: absolute;
                top: ${y}vh;
                left: ${x}vw;
                width: ${size}px;
                height: ${size}px;
                background-color: white;
                border-radius: 50%;
                opacity: ${opacity};
                animation: twinkle ${duration}s infinite alternate;
            `;
            
            starsContainer.appendChild(star);
        }
    }
    
    // Adicionar animação de twinkle se não existir
    if (!document.querySelector('#star-animation')) {
        const style = document.createElement('style');
        style.id = 'star-animation';
        style.textContent = `
            @keyframes twinkle {
                0% { opacity: 0.3; }
                100% { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Efeito de digitação nos cards ao carregar a página
    const poemCards = document.querySelectorAll('.poem-card');
    poemCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});