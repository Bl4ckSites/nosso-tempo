/**
 * ============================================
 * MUSIC PLAYER - Sistema Completo de Áudio
 * ============================================
 * Arquivo: music-player.js
 * Descrição: Player de música com funcionalidades completas
 * CORREÇÕES: Estrelas cobrindo toda a página e menu funcionando
 * ============================================
 */

console.log('🎵 Iniciando sistema de player de música...');
console.log('📁 Arquivo: music-player.js - VERSÃO CORRIGIDA');
console.log('🔧 Problemas resolvidos: Estrelas e Menu');

// ============================================
// CONFIGURAÇÃO INICIAL E VARIÁVEIS GLOBAIS
// ============================================

console.log('🔧 Configurando variáveis globais...');

// Playlist das músicas
const playlist = [
    {
        id: 1,
        title: "Lonely Day",
        artist: "System of a Down",
        duration: "2:52",
        file: "sons/musica1.mp3"
    },
    {
        id: 2,
        title: "Partilhar",
        artist: "Ana vitoria e Rubel",
        duration: "7:02",
        file: "sons/musica2.mp3"
    },
    {
        id: 3,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        duration: "3:02",
        file: "sons/musica3.mp3"
    },
    {
        id: 4,
        title: "Sorri, Sou Rei",
        artist: "Natiruts",
        duration: "5:10",
        file: "sons/musica4.mp3"
    },
    {
        id: 5,
        title: "Ocean Eyes",
        artist: "Billie Eilish",
        duration: "3:16",
        file: "sons/musica5.mp3"
    },
    {
        id: 6,
        title: "Foi assim...",
        artist: "Sotam",
        duration: "2:27",
        file: "sons/musica6.mp3"
    },
        {
        id: 7,
        title: "Sailor Song",
        artist: "Gigi Perez",
        duration: "3:31",
        file: "sons/musica7.mp3"
    }    
];

// Estado do player
let currentSongIndex = 0;
let isPlaying = false;
let audio = new Audio();
let progressInterval = null;
let volume = 0.8;

console.log(`✅ Playlist configurada com ${playlist.length} músicas`);

// ============================================
// FUNÇÕES DO FUNDO ESTRELADO - CORRIGIDAS
// ============================================

/**
 * Cria o fundo estrelado que cobre TODO o site
 */
function createStars() {
    console.log('✨ Criando fundo estrelado (corrigido)...');
    
    const starsContainer = document.getElementById('stars-container');
    
    if (!starsContainer) {
        console.error('❌ Container de estrelas não encontrado! Criando...');
        // Cria o container se não existir
        const container = document.createElement('div');
        container.id = 'stars-container';
        document.body.insertBefore(container, document.body.firstChild);
        console.log('✅ Container de estrelas criado dinamicamente');
        return createStars(); // Chama novamente
    }
    
    // Calcula quantas estrelas criar baseado no tamanho da página
    const pageHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    );
    
    const starsCount = Math.floor((pageHeight / window.innerHeight) * 400);
    console.log(`⭐ Criando ${starsCount} estrelas para altura de ${Math.round(pageHeight)}px`);
    
    // Limpa estrelas existentes
    starsContainer.innerHTML = '';
    
    // Configura o container para cobrir toda a página
    starsContainer.style.height = `${pageHeight}px`;
    console.log(`📏 Altura do container de estrelas: ${pageHeight}px`);
    
    // Cria estrelas distribuídas por toda a altura
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // 15% das estrelas são especiais (douradas)
        if (Math.random() < 0.15) {
            star.classList.add('special-star');
        }
        
        // Tamanho aleatório
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Posição aleatória em toda a altura da página
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * pageHeight}px`;
        
        // Opacidade aleatória
        star.style.opacity = Math.random() * 0.7 + 0.3;
        
        // Animação aleatória
        const duration = Math.random() * 10 + 5;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        starsContainer.appendChild(star);
    }
    
    console.log('✅ Fundo estrelado criado para toda a página!');
}

/**
 * Atualiza as estrelas quando a página é redimensionada ou conteúdo é adicionado
 */
function updateStarsForContent() {
    console.log('🔄 Verificando necessidade de atualizar estrelas...');
    
    const starsContainer = document.getElementById('stars-container');
    if (!starsContainer) return;
    
    const currentHeight = parseInt(starsContainer.style.height) || 0;
    const pageHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
    );
    
    // Se a altura da página aumentou significativamente, recria as estrelas
    if (pageHeight > currentHeight * 1.5) {
        console.log(`📈 Altura da página aumentou de ${currentHeight}px para ${pageHeight}px`);
        createStars();
    }
}

// ============================================
// FUNÇÕES DO MENU LATERAL - CORRIGIDAS
// ============================================

/**
 * Configura o menu lateral com correções
 */
function setupMenu() {
    console.log('📱 Configurando menu lateral (corrigido)...');
    
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeMenuBtn = document.getElementById('closeMenuBtn');

    // Verifica se os elementos existem
    console.log('🔍 Procurando elementos do menu:');
    console.log('  - menuToggle:', menuToggle ? '✅ Encontrado' : '❌ Não encontrado');
    console.log('  - sideMenu:', sideMenu ? '✅ Encontrado' : '❌ Não encontrado');
    console.log('  - menuOverlay:', menuOverlay ? '✅ Encontrado' : '❌ Não encontrado');
    console.log('  - closeMenuBtn:', closeMenuBtn ? '✅ Encontrado' : '❌ Não encontrado');

    if (!menuToggle || !sideMenu || !menuOverlay || !closeMenuBtn) {
        console.error('❌ Elementos do menu não encontrados! Verifique o HTML.');
        return;
    }

    /**
     * Função para abrir/fechar o menu
     */
    function toggleMenu() {
        console.log('🔄 Alternando menu...');
        
        const isActive = sideMenu.classList.contains('active');
        
        if (!isActive) {
            // Abrindo o menu
            console.log('📱 Abrindo menu lateral');
            sideMenu.classList.add('active');
            menuOverlay.classList.add('active');
            menuToggle.classList.add('rotated');
            
            // Previne scroll do body quando menu está aberto
            document.body.style.overflow = 'hidden';
        } else {
            // Fechando o menu
            console.log('📱 Fechando menu lateral');
            sideMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            menuToggle.classList.remove('rotated');
            
            // Restaura scroll do body
            document.body.style.overflow = '';
        }
    }

    /**
     * Fecha o menu (função separada para uso específico)
     */
    function closeMenu() {
        console.log('❌ Fechando menu via botão');
        sideMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        menuToggle.classList.remove('rotated');
        document.body.style.overflow = '';
    }

    // Configura event listeners com prevenção de propagação
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    menuOverlay.addEventListener('click', function(e) {
        e.stopPropagation();
        closeMenu();
    });
    
    closeMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeMenu();
    });
    
    // Fecha menu ao pressionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
            console.log('⎋ Tecla ESC pressionada, fechando menu');
            closeMenu();
        }
    });
    
    console.log('✅ Menu lateral configurado com sucesso!');
    console.log('🎮 Controles disponíveis:');
    console.log('   - Botão menu: Abre/fecha');
    console.log('   - Overlay: Clique para fechar');
    console.log('   - Botão X: Fecha menu');
    console.log('   - Tecla ESC: Fecha menu');
}

// ============================================
// FUNÇÕES DO PLAYER DE MÚSICA
// ============================================

/**
 * Carrega a playlist na interface
 */
function loadPlaylist() {
    console.log('📋 Carregando playlist...');
    
    const playlistItems = document.getElementById('playlistItems');
    
    if (!playlistItems) {
        console.error('❌ Elemento da playlist não encontrado!');
        return;
    }
    
    playlistItems.innerHTML = '';
    
    playlist.forEach((song, index) => {
        const item = document.createElement('div');
        item.className = 'playlist-item';
        
        if (index === currentSongIndex) {
            item.classList.add('active');
        }
        
        item.innerHTML = `
            <div class="song-number">
                <span class="number-circle">${song.id}</span>
            </div>
            <div class="song-info">
                <div class="song-name">${song.title}</div>
                <div class="song-artist-name">${song.artist}</div>
            </div>
            <div class="song-duration">
                <span class="duration-text">${song.duration}</span>
                <i class="fas fa-play-circle play-icon"></i>
            </div>
        `;
        
        item.addEventListener('click', () => {
            console.log(`🎵 Selecionando: "${song.title}"`);
            playSong(index);
        });
        
        playlistItems.appendChild(item);
    });
    
    console.log(`✅ Playlist carregada: ${playlist.length} músicas`);
}

/**
 * Atualiza o player com a música atual
 */
function updatePlayer() {
    console.log('🔄 Atualizando player...');
    
    const song = playlist[currentSongIndex];
    
    if (!song) {
        console.error('❌ Música não encontrada!');
        return;
    }
    
    // Atualiza elementos da UI
    const titleElement = document.getElementById('currentSongTitle');
    const artistElement = document.getElementById('currentSongArtist');
    const durationElement = document.getElementById('duration');
    
    if (titleElement) titleElement.textContent = song.title;
    if (artistElement) artistElement.textContent = song.artist;
    if (durationElement) durationElement.textContent = song.duration;
    
    // Atualiza estado ativo na playlist
    document.querySelectorAll('.playlist-item').forEach((item, index) => {
        item.classList.toggle('active', index === currentSongIndex);
    });
    
    // Configura áudio
    audio.src = song.file;
    audio.volume = volume;
    
    console.log(`🎶 Player atualizado: "${song.title}"`);
}

/**
 * Atualiza a barra de progresso
 */
function updateProgress() {
    if (audio.duration && !isNaN(audio.duration)) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        const progressBar = document.getElementById('progressBar');
        
        if (progressBar) {
            progressBar.style.width = `${progressPercent}%`;
        }
        
        // Atualiza tempo atual
        const currentTimeElement = document.getElementById('currentTime');
        if (currentTimeElement) {
            currentTimeElement.textContent = formatTime(audio.currentTime);
        }
    }
}

/**
 * Formata segundos para MM:SS
 */
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Toca uma música específica
 */
function playSong(index) {
    console.log(`▶️ Tocando música #${index + 1}`);
    
    if (index === currentSongIndex && isPlaying) {
        pauseAudio();
        return;
    }
    
    currentSongIndex = index;
    updatePlayer();
    playAudio();
}

/**
 * Inicia reprodução
 */
function playAudio() {
    console.log('▶️ Iniciando reprodução...');
    
    audio.play().then(() => {
        console.log('✅ Reprodução iniciada');
        
        isPlaying = true;
        const playIcon = document.getElementById('playIcon');
        if (playIcon) {
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
        }
        
        clearInterval(progressInterval);
        progressInterval = setInterval(updateProgress, 100);
        
    }).catch(error => {
        console.error('❌ Erro ao reproduzir:', error);
        // Modo simulação
        simulatePlayback();
    });
}

/**
 * Simula reprodução (fallback)
 */
function simulatePlayback() {
    console.log('🎭 Usando modo simulação');
    
    isPlaying = true;
    const playIcon = document.getElementById('playIcon');
    if (playIcon) {
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    }
    
    const song = playlist[currentSongIndex];
    const timeParts = song.duration.split(':');
    const totalSeconds = parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);
    
    let currentSeconds = 0;
    
    clearInterval(progressInterval);
    
    progressInterval = setInterval(() => {
        if (currentSeconds < totalSeconds) {
            currentSeconds++;
            
            const progressPercent = (currentSeconds / totalSeconds) * 100;
            const progressBar = document.getElementById('progressBar');
            if (progressBar) {
                progressBar.style.width = `${progressPercent}%`;
            }
            
            const currentTimeElement = document.getElementById('currentTime');
            if (currentTimeElement) {
                currentTimeElement.textContent = formatTime(currentSeconds);
            }
        } else {
            nextSong();
        }
    }, 1000);
}

/**
 * Pausa reprodução
 */
function pauseAudio() {
    console.log('⏸️ Pausando...');
    
    if (audio.src) {
        audio.pause();
    }
    
    isPlaying = false;
    const playIcon = document.getElementById('playIcon');
    if (playIcon) {
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    }
    
    clearInterval(progressInterval);
}

/**
 * Alterna play/pause
 */
function togglePlay() {
    console.log('🔄 Alternando play/pause');
    
    if (isPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
}

/**
 * Próxima música
 */
function nextSong() {
    console.log('⏭️ Próxima música');
    
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    updatePlayer();
    
    if (isPlaying) {
        playAudio();
    }
}

/**
 * Música anterior
 */
function prevSong() {
    console.log('⏮️ Música anterior');
    
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    updatePlayer();
    
    if (isPlaying) {
        playAudio();
    }
}

/**
 * Alterna volume
 */
function toggleVolume() {
    console.log('🔊 Alternando volume');
    
    const volumeBtn = document.querySelector('.volume-btn i');
    
    if (volume > 0) {
        volume = 0;
        if (volumeBtn) {
            volumeBtn.classList.remove('fa-volume-up');
            volumeBtn.classList.add('fa-volume-mute');
        }
        audio.volume = 0;
    } else {
        volume = 0.8;
        if (volumeBtn) {
            volumeBtn.classList.remove('fa-volume-mute');
            volumeBtn.classList.add('fa-volume-up');
        }
        audio.volume = volume;
    }
}

// ============================================
// CONFIGURAÇÃO DE EVENT LISTENERS
// ============================================

function setupEventListeners() {
    console.log('🎮 Configurando event listeners...');
    
    // Player controls
    const playBtn = document.getElementById('playBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const volumeBtn = document.getElementById('volumeBtn');
    const progressContainer = document.getElementById('progressContainer');
    
    if (playBtn) {
        playBtn.addEventListener('click', togglePlay);
        console.log('✅ Botão play configurado');
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSong);
        console.log('✅ Botão next configurado');
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSong);
        console.log('✅ Botão prev configurado');
    }
    
    if (volumeBtn) {
        volumeBtn.addEventListener('click', toggleVolume);
        console.log('✅ Botão volume configurado');
    }
    
    // Barra de progresso clicável
    if (progressContainer) {
        progressContainer.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const percent = clickX / width;
            
            if (audio.duration && !isNaN(audio.duration)) {
                audio.currentTime = percent * audio.duration;
                updateProgress();
            }
        });
        console.log('✅ Barra de progresso configurada');
    }
    
    // Evento quando áudio termina
    audio.addEventListener('ended', nextSong);
    
    console.log('✅ Todos os event listeners configurados');
}

// ============================================
// INICIALIZAÇÃO DO SISTEMA
// ============================================

function initializeMusicPlayer() {
    console.log('🚀 ============================================');
    console.log('🚀 INICIALIZANDO SISTEMA (CORREÇÕES APLICADAS)');
    console.log('🚀 ============================================');
    
    try {
        // 1. Cria fundo estrelado que cobre toda a página
        createStars();
        
        // 2. Configura menu lateral (AGORA FUNCIONANDO)
        setupMenu();
        
        // 3. Carrega playlist
        loadPlaylist();
        
        // 4. Atualiza player
        updatePlayer();
        
        // 5. Configura event listeners
        setupEventListeners();
        
        // 6. Verifica periodicamente se precisa atualizar estrelas
        setInterval(updateStarsForContent, 5000);
        
        console.log('✅ ============================================');
        console.log('✅ SISTEMA INICIALIZADO COM SUCESSO!');
        console.log('✅ ============================================');
        console.log('✨ Estrelas cobrindo toda a página');
        console.log('📱 Menu lateral funcionando');
        console.log('🎵 Player pronto para usar');
        
    } catch (error) {
        console.error('❌ ERRO NA INICIALIZAÇÃO:', error);
    }
}

// ============================================
// EVENTOS GLOBAIS
// ============================================

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM carregado - inicializando...');
    initializeMusicPlayer();
});

// Atualiza estrelas ao redimensionar
window.addEventListener('resize', function() {
    console.log('🔄 Janela redimensionada - atualizando estrelas...');
    createStars();
});

// Atualiza estrelas ao rolar (para conteúdo dinâmico)
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateStarsForContent, 500);
});

// ============================================
// EXPORTAÇÕES
// ============================================

window.MusicPlayer = {
    playSong,
    pauseAudio,
    togglePlay,
    nextSong,
    prevSong,
    toggleVolume,
    getCurrentSong: () => playlist[currentSongIndex],
    getPlaylist: () => playlist,
    getPlayerState: () => ({
        isPlaying,
        currentSongIndex,
        volume,
        currentTime: audio.currentTime,
        duration: audio.duration
    }),
    // Novas funções para controle do menu
    openMenu: () => {
        const sideMenu = document.getElementById('sideMenu');
        const menuOverlay = document.getElementById('menuOverlay');
        const menuToggle = document.getElementById('menuToggle');
        if (sideMenu && menuOverlay && menuToggle) {
            sideMenu.classList.add('active');
            menuOverlay.classList.add('active');
            menuToggle.classList.add('rotated');
            document.body.style.overflow = 'hidden';
        }
    },
    closeMenu: () => {
        const sideMenu = document.getElementById('sideMenu');
        const menuOverlay = document.getElementById('menuOverlay');
        const menuToggle = document.getElementById('menuToggle');
        if (sideMenu && menuOverlay && menuToggle) {
            sideMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            menuToggle.classList.remove('rotated');
            document.body.style.overflow = '';
        }
    }
};

console.log('🌐 Player exportado para objeto global MusicPlayer');
console.log('🔧 Problemas corrigidos:');
console.log('   1. Estrelas cobrem toda a altura do site');
console.log('   2. Menu lateral totalmente funcional');
console.log('   3. Botões respondem corretamente');
