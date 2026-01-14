// Configuração do fundo estrelado
function createStars() {
    const starsContainer = document.getElementById('stars-container');
    const starsCount = window.innerWidth < 768 ? 200 : 400;
    
    starsContainer.innerHTML = '';
    
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        if (Math.random() < 0.1) {
            star.classList.add('special-star');
        }
        
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.opacity = Math.random() * 0.7 + 0.3;
        const duration = Math.random() * 8 + 5;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        starsContainer.appendChild(star);
    }
    
    console.log(`Criadas ${starsCount} estrelas na página de momentos`);
}

// Dados dos momentos (substitua pelas suas imagens)
const momentos = [
    { 
        img: 'imgs/gallery/img1.jpg', 
        title: 'Apresentação aos meus pais', 
        caption: 'Jamais vou esquecer você pedindo à sua mãe para se levantar para eu sentar. Achei isso engraçadíssimo, mas, entre tudo o que aconteceu naquele dia, sinto que foi uma abertura de portas para tudo que ainda estava por vir.' 
    },
    { 
        img: 'imgs/gallery/img2.jpg', 
        title: 'Descanso', 
        caption: 'Ao final da apresentação, todos foram para fora e ficamos sozinhos na sala. Foi ali, naquela mesma sala, que você me abraçou de um jeito que trouxe segurança ao meu coração e a confiança de que esta foi a melhor escolha da minha vida: você.' 
    },
    { 
        img: 'imgs/gallery/img3.jpg', 
        title: 'Passeio no Parque', 
        caption: 'No começo, fiquei relutante em ir. Quando cheguei e vi toda a decoração da praça, percebi como era bonito estar ao seu lado. Meu mundo brilhou, não pelos pisca-piscas, mas por ter toda a luz ao meu lado, que é você.' 
    },
    { 
        img: 'imgs/gallery/img4.jpg', 
        title: '“Repete”', 
        caption: 'É impossível falar da praça sem lembrar da praia. Foi onde rimos muito das "montanhas ambulantes", dos "hipopótamos", e onde você disse umas palavras que eu ouvi e guardei. Elas significavam o início de uma mudança no nosso relacionamento. Eu pedi para repetir e você ficou com vergonha.' 
    },
    { 
        img: 'imgs/gallery/img5.jpg', 
        title: 'Banho', 
        caption: 'Recordo o fogo que nasceu da centelha no dia da praia. Foi algo incrível! Me senti tão bem ao seu lado que adormeci em seus doces braços.' 
    },
    { 
        img: 'imgs/gallery/img6.jpg', 
        title: 'Sono', 
        caption: 'Neles, eu dormi cheio de felicidade. Não eram apenas os braços da minha amada, mas da mulher que sempre vou amar e com quem vou construir um futuro juntos, que será eterno.' 
    },
    { 
        img: 'imgs/gallery/img7.jpg', 
        title: 'Ano Novo Juntos', 
        caption: 'Recebemos o ano de mãos dadas, cheios de planos. Que venham muitos mais! A esperança e a felicidade daquela virada ainda ecoam no meu peito. Promessas não ditas, mas sentidas, pairaram no ar entre os fogos e nossos desejos secretos.' 
    },
    { 
        img: 'imgs/gallery/img8.jpg', 
        title: 'Põe a cabeça no meu peito...', 
        caption: 'Jamais esquecerei a sensação de ter você em meus braços, de aproveitar seu calor e admirar sua perfeição. De te amar no fundo do meu coração e saber que você é a razão da minha mais sincera felicidade.' 
    },
    { 
        img: 'imgs/gallery/img9.jpg', 
        title: 'Paz ao seu lado', 
        caption: 'Admirando seu sono, fico paralisado diante de tanta perfeição. Até dormindo, você é linda como o céu, chamativa como a lua, tem o charme da rosa mais cheirosa e a beleza única que fez meu jardim ter só uma flor.' 
    },
    { 
        img: 'imgs/gallery/img10.gif', 
        title: 'Olhos', 
        caption: 'Digo poucas palavras, pois meus olhos ainda estão processando sua perfeição. Talvez leve uma vida inteira admirando cada detalhe seu para que meu cérebro consiga compreender uma fração da sua magnitude.' 
    },
    { 
        img: 'imgs/gallery/img11.jpg', 
        title: 'Especial', 
        caption: 'Cada momento ao seu lado me faz perceber que posso te amar ainda mais. Você é pura como o azul do céu e profunda como o oceano. Por isso, tomo todo o cuidado, pois você é meu bem mais precioso.' 
    },
    { 
        img: 'imgs/gallery/img12.jpg', 
        title: 'Eternidade', 
        caption: 'Quero me casar com você e termos filhos, para que, mesmo depois, nosso laço no mundo continue eternamente. E queria dizer que, nesta noite, você me estressou um pouco, mas depois me mostrou o quanto eu te amo e o motivo: o motivo é você, apenas você.' 
    },
    { 
        img: 'imgs/gallery/img13.jpg', 
        title: 'Minha', 
        caption: 'Amei ir ao shopping com você de novo. Você sempre me deixa cheio de energia e felicidade. Você é meu tudo, como o sol no final da tarde.' 
    },
    { 
        img: 'imgs/gallery/img14.jpg', 
        title: 'Dois Meses de Amor', 
        caption: 'Coloquei esta foto para dizer que, independente de tudo, dos seus humores e situações, eu estarei para sempre com você. Admirando cada detalhe e me surpreendendo a cada dia. Nunca imaginei ter tanta sorte em conhecê-la.' 
    }
];

function loadMomentos() {
    const container = document.getElementById('momentsContainer');
    
    momentos.forEach((momento, index) => {
        const card = document.createElement('div');
        card.className = 'moment-card';
        
        // Adiciona patinhas de gato aleatórias
        if (Math.random() > 0.5) {
            const paw = document.createElement('div');
            paw.className = 'cat-paw';
            paw.innerHTML = '<i class="fas fa-paw"></i>';
            paw.style.left = `${Math.random() * 80 + 10}%`;
            paw.style.top = `${Math.random() * 80 + 10}%`;
            card.appendChild(paw);
        }
        
        // Placeholder se a imagem não existir
        const imgSrc = momento.img;
        
        card.innerHTML = `
            <img src="${imgSrc}" alt="${momento.title}" class="card-image" onerror="this.src='https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'">
            <h3 class="card-title">${momento.title}</h3>
            <p class="card-caption">${momento.caption}</p>
        `;
        
        container.appendChild(card);
    });
    
    console.log(`Carregados ${momentos.length} momentos especiais`);
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
        console.log('Menu lateral aberto na página de momentos');
    } else {
        console.log('Menu lateral fechado na página de momentos');
    }
}

// Adiciona event listeners para o menu
menuToggle.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    loadMomentos();
    
    // Adiciona o efeito de brilho ao fundo
    const shineEffect = document.createElement('div');
    shineEffect.classList.add('shine-effect');
    document.body.appendChild(shineEffect);
    
    console.log('Página de Momentos carregada com sucesso!');
});

// Redimensionamento da janela
window.addEventListener('resize', createStars);