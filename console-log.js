// ============================================================================
// SISTEMA AVANÇADO DE MONITORAMENTO PARA SITE ROMÂNTICO
// Versão: 3.0.0 | Data: 2026
//rogerBastos_R♡L ============================================================================

(function() {
    'use strict';

    // ============================================================================
    // CONFIGURAÇÕES DO SISTEMA
    // ============================================================================
    const CONFIG = {
        SYSTEM_NAME: 'Sistema de Monitoramento Amoroso',
        VERSION: '3.0.0',
        AUTHOR: 'Desenvolvido com ❤️ para celebrar 2 meses de relacionamento',
        START_DATE: '02/12/2025',
        ANNIVERSARY_DATE: '02/02/2026',
        ANNIVERSARY_MONTH: 2,
        LOG_PREFIX: '❤️ SITE ROMÂNTICO',
        
        // Tempos em milissegundos
        INACTIVITY_CHECK_INTERVAL: 30000,
        PERFORMANCE_LOG_INTERVAL: 60000,
        HEARTBEAT_INTERVAL: 5000,
        
        // Níveis de log
        LOG_LEVELS: {
            INFO: 'info',
            WARN: 'warn',
            ERROR: 'error',
            ROMANTIC: 'romantic',
            DEBUG: 'debug'
        },
        
        // Cores para logs
        LOG_COLORS: {
            ROMANTIC: '#ff4d88',
            GOLD: '#D4AF37',
            PINK: '#ff99c2',
            BLUE: '#4da6ff',
            GREEN: '#4dff88',
            ORANGE: '#ff9933',
            PURPLE: '#cc66ff'
        },
        
        // Mensagens românticas para logs
        ROMANTIC_MESSAGES: [
            "Cada clique é como um batimento do nosso coração ❤️",
            "2 meses de amor, sorrisos e memórias inesquecíveis 💕",
            "Dois meses juntos, uma eternidade pela frente 💖",
            "Cada segundo ao seu lado é um momento especial ✨",
            "Amor é construir histórias juntos, clique a clique 📖"
        ]
    };

    // ============================================================================
    // ESTADO DO SISTEMA
    // ============================================================================
    const SystemState = {
        initialized: false,
        startTime: Date.now(),
        userActivity: {
            lastActive: Date.now(),
            totalClicks: 0,
            totalKeyPresses: 0,
            totalMouseMovements: 0,
            totalScrolls: 0,
            sectionsVisited: new Set(),
            timeOnSite: 0,
            interactions: []
        },
        performanceMetrics: {
            pageLoadTime: 0,
            memoryUsage: 0,
          connectionSpeed: 'unknown'
        },
        sessionData: {
            sessionId: generateSessionId(),
            pageViews: 1,
            lastMessageViewed: null,
            favoriteSection: null,
            romanticScore: 0
        },
        errors: []
    };

    // ============================================================================
    // GERADOR DE ID DE SESSÃO
    // ============================================================================
    function generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    // ============================================================================
    // SISTEMA DE LOG AVANÇADO
    // ============================================================================
    const Logger = {
        log: function(message, level = CONFIG.LOG_LEVELS.INFO, data = null) {
            const timestamp = new Date().toISOString();
            const formattedMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
            
            // Aplica estilo baseado no nível
            let style = `color: ${CONFIG.LOG_COLORS.BLUE};`;
            
            switch(level) {
                case CONFIG.LOG_LEVELS.ROMANTIC:
                    style = `color: ${CONFIG.LOG_COLORS.ROMANTIC}; font-weight: bold;`;
                    break;
                case CONFIG.LOG_LEVELS.WARN:
                    style = `color: ${CONFIG.LOG_COLORS.ORANGE}; font-weight: bold;`;
                    break;
                case CONFIG.LOG_LEVELS.ERROR:
                    style = `color: ${CONFIG.LOG_COLORS.PINK}; font-weight: bold; background: #f0f0f0;`;
                    break;
                case CONFIG.LOG_LEVELS.DEBUG:
                    style = `color: ${CONFIG.LOG_COLORS.PURPLE}; font-style: italic;`;
                    break;
            }
            
            // Adiciona dados extras se fornecidos
            const fullMessage = data ? `${formattedMessage} | Dados: ${JSON.stringify(data)}` : formattedMessage;
            
            console.log(`%c${fullMessage}`, style);
            
            // Armazena no histórico de interações
            if (level === CONFIG.LOG_LEVELS.ROMANTIC || level === CONFIG.LOG_LEVELS.INFO) {
                SystemState.userActivity.interactions.push({
                    timestamp,
                    type: 'log',
                    message,
                    level,
                    data
                });
            }
        },
        
        romanticLog: function(message, data = null) {
            this.log(message, CONFIG.LOG_LEVELS.ROMANTIC, data);
        },
        
        errorLog: function(message, error = null) {
            const errorData = error ? { 
                message: error.message, 
                stack: error.stack,
                name: error.name 
            } : null;
            
            this.log(message, CONFIG.LOG_LEVELS.ERROR, errorData);
            
            // Armazena erro para relatório
            SystemState.errors.push({
                timestamp: new Date().toISOString(),
                message,
                error: errorData
            });
        },
        
        // Log de banner inicial
        logBanner: function() {
            console.log('%c' + '='.repeat(70), `color: ${CONFIG.LOG_COLORS.GOLD}; font-size: 12px;`);
            console.log(`%c${CONFIG.LOG_PREFIX} - ${CONFIG.ANNIVERSARY_MONTH} MESES DE NAMORO ❤️`, 
                `color: ${CONFIG.LOG_COLORS.ROMANTIC}; font-size: 18px; font-weight: bold;`);
            console.log(`%c${CONFIG.AUTHOR}`, 
                `color: ${CONFIG.LOG_COLORS.GOLD}; font-size: 14px;`);
            console.log(`%cData do início: ${CONFIG.START_DATE} | Aniversário de ${CONFIG.ANNIVERSARY_MONTH} meses: ${CONFIG.ANNIVERSARY_DATE}`, 
                `color: ${CONFIG.LOG_COLORS.PINK};`);
            console.log(`%cSistema: ${CONFIG.SYSTEM_NAME} v${CONFIG.VERSION}`, 
                `color: ${CONFIG.LOG_COLORS.BLUE};`);
            console.log(`%cSessão: ${SystemState.sessionData.sessionId}`, 
                `color: ${CONFIG.LOG_COLORS.GREEN};`);
            console.log('%c' + '='.repeat(70), `color: ${CONFIG.LOG_COLORS.GOLD}; font-size: 12px;`);
        }
    };

    // ============================================================================
    // MONITORAMENTO DE ATIVIDADE DO USUÁRIO
    // ============================================================================
    const ActivityMonitor = {
        init: function() {
            this.setupClickTracking();
            this.setupKeyboardTracking();
            this.setupMouseTracking();
            this.setupScrollTracking();
            this.setupVisibilityTracking();
            this.setupTouchTracking();
            
            Logger.log('Monitor de atividade inicializado com sucesso');
        },
        
        setupClickTracking: function() {
            document.addEventListener('click', (e) => {
                SystemState.userActivity.lastActive = Date.now();
                SystemState.userActivity.totalClicks++;
                
                const target = e.target;
                const elementInfo = {
                    tagName: target.tagName,
                    id: target.id || 'sem-id',
                    className: target.className || 'sem-classe',
                    text: target.textContent ? target.textContent.substring(0, 50) + '...' : 'sem-texto'
                };
                
                // Verifica se é um link
                if (target.tagName === 'A' || target.closest('a')) {
                    const link = target.tagName === 'A' ? target : target.closest('a');
                    const linkText = link.textContent.trim();
                    const href = link.getAttribute('href') || '#';
                    
                    Logger.log(`Link clicado: "${linkText}" (${href})`, CONFIG.LOG_LEVELS.INFO, elementInfo);
                    
                    // Adiciona à seção visitada
                    if (href && href.startsWith('#')) {
                        SystemState.userActivity.sectionsVisited.add(href.substring(1));
                        SystemState.sessionData.favoriteSection = this.determineFavoriteSection();
                    }
                } else {
                    // Log de outros cliques
                    const isSpecialElement = target.closest('.romantic, .love, .heart, .message, .photo');
                    if (isSpecialElement) {
                        Logger.romanticLog(`Elemento especial clicado: ${elementInfo.text}`);
                        SystemState.sessionData.romanticScore += 5;
                    }
                }
                
                // Armazena interação
                SystemState.userActivity.interactions.push({
                    timestamp: new Date().toISOString(),
                    type: 'click',
                    element: elementInfo,
                    position: { x: e.clientX, y: e.clientY }
                });
            });
        },
        
        setupKeyboardTracking: function() {
            document.addEventListener('keydown', (e) => {
                SystemState.userActivity.lastActive = Date.now();
                SystemState.userActivity.totalKeyPresses++;
                
                // Ignora teclas de navegação comum (tab, alt, ctrl, etc)
                const specialKeys = ['Tab', 'Alt', 'Control', 'Shift', 'Meta', 'Escape'];
                if (!specialKeys.includes(e.key)) {
                    Logger.log(`Tecla pressionada: ${e.key}`, CONFIG.LOG_LEVELS.DEBUG, {
                        key: e.key,
                        code: e.code,
                        ctrlKey: e.ctrlKey,
                        altKey: e.altKey,
                        shiftKey: e.shiftKey
                    });
                }
            });
        },
        
        setupMouseTracking: function() {
            let mouseMoveCount = 0;
            let lastMouseLog = Date.now();
            
            document.addEventListener('mousemove', (e) => {
                SystemState.userActivity.lastActive = Date.now();
                SystemState.userActivity.totalMouseMovements++;
                mouseMoveCount++;
                
                // Log a cada 50 movimentos do mouse ou a cada 5 segundos
                const now = Date.now();
                if (mouseMoveCount >= 50 || (now - lastMouseLog) >= 5000) {
                    Logger.log(`Movimento do mouse detectado (${mouseMoveCount} movimentos)`, CONFIG.LOG_LEVELS.DEBUG, {
                        position: { x: e.clientX, y: e.clientY },
                        movements: mouseMoveCount
                    });
                    
                    mouseMoveCount = 0;
                    lastMouseLog = now;
                }
            });
        },
        
        setupScrollTracking: function() {
            let scrollTimeout;
            let lastScrollPosition = window.pageYOffset;
            
            window.addEventListener('scroll', () => {
                SystemState.userActivity.lastActive = Date.now();
                
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    const currentPosition = window.pageYOffset;
                    const scrollDirection = currentPosition > lastScrollPosition ? 'baixo' : 'cima';
                    const scrollDistance = Math.abs(currentPosition - lastScrollPosition);
                    
                    if (scrollDistance > 100) { // Só loga se houver rolagem significativa
                        SystemState.userActivity.totalScrolls++;
                        
                        Logger.log(`Rolagem para ${scrollDirection} (${Math.round(scrollDistance)}px)`, CONFIG.LOG_LEVELS.DEBUG, {
                            direction: scrollDirection,
                            distance: scrollDistance,
                            position: currentPosition
                        });
                        
                        // Detecta seção visível
                        this.detectVisibleSection();
                    }
                    
                    lastScrollPosition = currentPosition;
                }, 150);
            });
        },
        
        setupVisibilityTracking: function() {
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    Logger.log('Página em segundo plano (usuário mudou de aba ou minimizou)');
                } else {
                    Logger.log('Página em primeiro plano (usuário retornou)');
                    SystemState.userActivity.lastActive = Date.now();
                }
            });
        },
        
        setupTouchTracking: function() {
            if ('ontouchstart' in window) {
                document.addEventListener('touchstart', () => {
                    SystemState.userActivity.lastActive = Date.now();
                    Logger.log('Toque na tela detectado (dispositivo touch)');
                });
            }
        },
        
        detectVisibleSection: function() {
            // Esta função detectaria qual seção está visível na tela
            // Implementação simplificada para exemplo
            const sections = ['home', 'gallery', 'messages', 'timeline', 'memories'];
            const scrollPos = window.pageYOffset;
            const windowHeight = window.innerHeight;
            
            // Simulação: determina seção baseada na posição de rolagem
            const sectionIndex = Math.min(
                Math.floor(scrollPos / (windowHeight * 0.8)), 
                sections.length - 1
            );
            
            const visibleSection = sections[sectionIndex];
            SystemState.userActivity.sectionsVisited.add(visibleSection);
            
            return visibleSection;
        },
        
        determineFavoriteSection: function() {
            const sections = Array.from(SystemState.userActivity.sectionsVisited);
            if (sections.length === 0) return null;
            
            // Contagem simplificada - em um sistema real, contaríamos as visitas
            return sections[sections.length - 1]; // Retorna a última seção visitada
        }
    };

    // ============================================================================
    // MONITORAMENTO DE MENSAGENS ROMÂNTICAS
    // ============================================================================
    const MessageMonitor = {
        init: function() {
            this.overrideMessageFunction();
            Logger.log('Monitor de mensagens inicializado');
        },
        
        overrideMessageFunction: function() {
            // Salva a função original
            const originalShowMessage = window.showMessage;
            
            // Substitui pela nossa versão monitorada
            window.showMessage = function(index, ...args) {
                // Chama a função original se existir
                if (originalShowMessage) {
                    originalShowMessage.apply(this, [index, ...args]);
                }
                
                // Log da mensagem visualizada
                const romanticMessages = [
                    "Nossa primeira conversa...",
                    "O dia que nos conhecemos...",
                    "Nosso primeiro encontro...",
                    "Quando disse 'eu te amo' pela primeira vez...",
                    "Nossa viagem inesquecível...",
                    "Aquele jantar romântico...",
                    "Nosso filme favorito...",
                    "A música da nossa relação..."
                ];
                
                const messageIndex = Math.min(index, romanticMessages.length - 1);
                const message = romanticMessages[messageIndex] || `Mensagem especial #${index + 1}`;
                
                Logger.romanticLog(`Mensagem romântica visualizada: "${message}"`, {
                    messageIndex: index,
                    timestamp: new Date().toISOString()
                });
                
                SystemState.sessionData.lastMessageViewed = {
                    index,
                    content: message,
                    time: new Date().toISOString()
                };
                
                SystemState.sessionData.romanticScore += 10;
                
                // Mensagem aleatória romântica
                const randomRomanticMessage = CONFIG.ROMANTIC_MESSAGES[
                    Math.floor(Math.random() * CONFIG.ROMANTIC_MESSAGES.length)
                ];
                
                // Log especial a cada 3 mensagens visualizadas
                if (index % 3 === 0) {
                    Logger.romanticLog(`💖 ${randomRomanticMessage} 💖`);
                }
            };
        }
    };

    // ============================================================================
    // MONITORAMENTO DE DESEMPENHO
    // ============================================================================
    const PerformanceMonitor = {
        init: function() {
            this.captureInitialPerformance();
            this.setupPerformanceObservers();
            this.startPerformanceLogging();
            
            Logger.log('Monitor de desempenho inicializado');
        },
        
        captureInitialPerformance: function() {
            window.addEventListener('load', () => {
                // Tempo de carregamento
                const timing = performance.timing;
                const loadTime = timing.loadEventEnd - timing.navigationStart;
                SystemState.performanceMetrics.pageLoadTime = loadTime;
                
                Logger.log(`Página carregada em ${loadTime}ms`, CONFIG.LOG_LEVELS.INFO, {
                    loadTime,
                    domReady: timing.domContentLoadedEventEnd - timing.navigationStart,
                    redirectCount: performance.navigation.redirectCount
                });
                
                // Detectar tipo de conexão
                if (navigator.connection) {
                    SystemState.performanceMetrics.connectionSpeed = navigator.connection.effectiveType;
                    Logger.log(`Tipo de conexão: ${navigator.connection.effectiveType}`, CONFIG.LOG_LEVELS.INFO, {
                        effectiveType: navigator.connection.effectiveType,
                        downlink: navigator.connection.downlink,
                        rtt: navigator.connection.rtt
                    });
                }
                
                // Memória (disponível apenas em alguns navegadores)
                if (performance.memory) {
                    SystemState.performanceMetrics.memoryUsage = 
                        (performance.memory.usedJSHeapSize / performance.memory.totalJSHeapSize) * 100;
                }
            });
        },
        
        setupPerformanceObservers: function() {
            // Observer para medições de desempenho
            if ('PerformanceObserver' in window) {
                try {
                    const perfObserver = new PerformanceObserver((list) => {
                        for (const entry of list.getEntries()) {
                            Logger.log(`Performance entry: ${entry.name}`, CONFIG.LOG_LEVELS.DEBUG, {
                                entryType: entry.entryType,
                                startTime: entry.startTime,
                                duration: entry.duration
                            });
                        }
                    });
                    
                    perfObserver.observe({ entryTypes: ['paint', 'measure', 'resource'] });
                } catch (e) {
                    Logger.errorLog('Erro ao configurar PerformanceObserver', e);
                }
            }
            
            // Observer para recursos
            if ('PerformanceObserver' in window) {
                try {
                    const resourceObserver = new PerformanceObserver((list) => {
                        list.getEntries().forEach(entry => {
                            if (entry.duration > 1000) { // Recursos que demoraram mais de 1s
                                Logger.log(`Recurso de carregamento lento: ${entry.name}`, CONFIG.LOG_LEVELS.WARN, {
                                    duration: entry.duration,
                                    initiatorType: entry.initiatorType,
                                    size: entry.transferSize
                                });
                            }
                        });
                    });
                    
                    resourceObserver.observe({ entryTypes: ['resource'] });
                } catch (e) {
                    Logger.errorLog('Erro ao configurar Resource Observer', e);
                }
            }
        },
        
        startPerformanceLogging: function() {
            // Log periódico de desempenho
            setInterval(() => {
                if (performance.memory) {
                    const memoryUsage = (performance.memory.usedJSHeapSize / 1048576).toFixed(2);
                    const memoryLimit = (performance.memory.jsHeapSizeLimit / 1048576).toFixed(2);
                    
                    Logger.log(`Uso de memória: ${memoryUsage} MB de ${memoryLimit} MB`, CONFIG.LOG_LEVELS.DEBUG);
                }
                
                // Log de FPS (simplificado)
                this.logFPS();
            }, CONFIG.PERFORMANCE_LOG_INTERVAL);
        },
        
        logFPS: function() {
            let frameCount = 0;
            let lastTime = Date.now();
            
            const measureFPS = () => {
                frameCount++;
                const currentTime = Date.now();
                
                if (currentTime - lastTime >= 1000) {
                    const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                    
                    if (fps < 30) {
                        Logger.log(`FPS baixo detectado: ${fps}`, CONFIG.LOG_LEVELS.WARN);
                    }
                    
                    frameCount = 0;
                    lastTime = currentTime;
                }
                
                requestAnimationFrame(measureFPS);
            };
            
            requestAnimationFrame(measureFPS);
        }
    };

    // ============================================================================
    // MONITORAMENTO DE ERROS
    // ============================================================================
    const ErrorMonitor = {
        init: function() {
            this.setupErrorHandling();
            this.setupPromiseRejectionHandling();
            this.setupConsoleErrorHandling();
            
            Logger.log('Monitor de erros inicializado');
        },
        
        setupErrorHandling: function() {
            window.addEventListener('error', (e) => {
                const errorData = {
                    message: e.message,
                    filename: e.filename,
                    lineno: e.lineno,
                    colno: e.colno,
                    error: e.error
                };
                
                Logger.errorLog(`Erro detectado: ${e.message}`, e.error);
                
                // Adiciona aos erros do sistema
                SystemState.errors.push({
                    timestamp: new Date().toISOString(),
                    type: 'window_error',
                    data: errorData
                });
                
                // Não impede o comportamento padrão
                return false;
            });
        },
        
        setupPromiseRejectionHandling: function() {
            window.addEventListener('unhandledrejection', (e) => {
                Logger.errorLog('Promise rejeitada não tratada', e.reason);
                
                SystemState.errors.push({
                    timestamp: new Date().toISOString(),
                    type: 'unhandled_promise_rejection',
                    data: {
                        reason: e.reason
                    }
                });
            });
        },
        
        setupConsoleErrorHandling: function() {
            // Captura erros do console
            const originalConsoleError = console.error;
            
            console.error = function(...args) {
                // Chama a função original
                originalConsoleError.apply(console, args);
                
                // Loga no nosso sistema
                const errorMessage = args.map(arg => 
                    typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
                ).join(' ');
                
                Logger.errorLog(`Erro no console: ${errorMessage.substring(0, 200)}`);
            };
        }
    };

    // ============================================================================
    // SISTEMA DE RELATÓRIOS
    // ============================================================================
    const ReportingSystem = {
        init: function() {
            this.setupSessionReport();
            this.setupInactivityMonitoring();
            this.setupHeartbeat();
            
            Logger.log('Sistema de relatórios inicializado');
        },
        
        setupSessionReport: function() {
            // Relatório ao fechar a página
            window.addEventListener('beforeunload', () => {
                this.generateSessionReport();
            });
            
            // Também gera relatório periodicamente
            setInterval(() => {
                this.generateSessionReport(true); // Relatório silencioso
            }, 120000); // A cada 2 minutos
        },
        
        setupInactivityMonitoring: function() {
            setInterval(() => {
                const inactiveTime = Date.now() - SystemState.userActivity.lastActive;
                
                if (inactiveTime > CONFIG.INACTIVITY_CHECK_INTERVAL) {
                    Logger.log(`Usuário inativo por ${Math.round(inactiveTime/1000)} segundos`, CONFIG.LOG_LEVELS.WARN);
                    
                    // Mensagem romântica após 1 minuto de inatividade
                    if (inactiveTime > 60000) {
                        const romanticMessages = [
                            "Estamos sentindo sua falta... ❤️",
                            "Volte para ver mais mensagens especiais! 💕",
                            "O amor está esperando por você... 💖",
                            "Temos mais surpresas românticas para você! ✨"
                        ];
                        
                        const randomMessage = romanticMessages[
                            Math.floor(Math.random() * romanticMessages.length)
                        ];
                        
                        Logger.romanticLog(randomMessage);
                    }
                }
            }, CONFIG.INACTIVITY_CHECK_INTERVAL);
        },
        
        setupHeartbeat: function() {
            // "Pulsação" do sistema para indicar que está ativo
            setInterval(() => {
                const now = Date.now();
                const sessionDuration = now - SystemState.startTime;
                
                // A cada 5 minutos, loga uma mensagem especial
                if (sessionDuration % 300000 < 5000) {
                    Logger.romanticLog("❤️ O amor está no ar... Nosso site continua pulsando com carinho! ❤️");
                }
            }, CONFIG.HEARTBEAT_INTERVAL);
        },
        
        generateSessionReport: function(silent = false) {
            const now = Date.now();
            const sessionDuration = now - SystemState.startTime;
            const minutesActive = Math.round(sessionDuration / 60000);
            
            // Calcula tempo ativo (não inativo)
            const activeTime = Object.values(SystemState.userActivity.interactions).reduce((total, interaction) => {
                return total + 1; // Simplificação - cada interação conta como 1 segundo ativo
            }, 0);
            
            const report = {
                sessionId: SystemState.sessionData.sessionId,
                sessionStart: new Date(SystemState.startTime).toISOString(),
                sessionDuration: `${minutesActive} minutos`,
                activeTime: `${Math.round(activeTime / 60)} minutos`,
                interactions: {
                    totalClicks: SystemState.userActivity.totalClicks,
                    totalKeyPresses: SystemState.userActivity.totalKeyPresses,
                    totalMouseMovements: SystemState.userActivity.totalMouseMovements,
                    totalScrolls: SystemState.userActivity.totalScrolls,
                    sectionsVisited: Array.from(SystemState.userActivity.sectionsVisited),
                    totalInteractions: SystemState.userActivity.interactions.length
                },
                messages: {
                    lastMessageViewed: SystemState.sessionData.lastMessageViewed,
                    romanticScore: SystemState.sessionData.romanticScore
                },
                performance: {
                    pageLoadTime: SystemState.performanceMetrics.pageLoadTime,
                    connectionSpeed: SystemState.performanceMetrics.connectionSpeed,
                    memoryUsage: SystemState.performanceMetrics.memoryUsage
                },
                errors: SystemState.errors.length
            };
            
            if (!silent) {
                Logger.log('Relatório de sessão gerado', CONFIG.LOG_LEVELS.INFO, report);
                
                // Mensagem final romântica baseada no engajamento
                if (report.interactions.totalClicks > 10) {
                    Logger.romanticLog("Obrigado por explorar nosso site com tanto carinho! Você é especial! 💖");
                }
            }
            
            return report;
        },
        
        // Função para exportar dados (útil para debug)
        exportData: function() {
            const data = {
                config: CONFIG,
                systemState: SystemState,
                sessionReport: this.generateSessionReport(true)
            };
            
            console.log('%c===== DADOS DO SISTEMA DE MONITORAMENTO =====', 
                `color: ${CONFIG.LOG_COLORS.GOLD}; font-size: 14px; font-weight: bold;`);
            console.dir(data);
            console.log('%c' + '='.repeat(55), `color: ${CONFIG.LOG_COLORS.GOLD}; font-size: 12px;`);
            
            return data;
        }
    };

    // ============================================================================
    // FUNÇÕES PÚBLICAS DO SISTEMA
    // ============================================================================
    window.RomanticMonitor = {
        // Retorna dados da sessão atual
        getSessionData: function() {
            return {
                ...SystemState.sessionData,
                activeTime: Date.now() - SystemState.startTime
            };
        },
        
        // Retorna estatísticas de atividade
        getActivityStats: function() {
            return { ...SystemState.userActivity };
        },
        
        // Retorna relatório completo
        getFullReport: function() {
            return ReportingSystem.generateSessionReport(true);
        },
        
        // Exporta todos os dados do sistema
        exportAllData: function() {
            return ReportingSystem.exportData();
        },
        
        // Adiciona uma interação manual (para uso externo)
        logCustomInteraction: function(type, details) {
            const interaction = {
                timestamp: new Date().toISOString(),
                type: `custom_${type}`,
                details
            };
            
            SystemState.userActivity.interactions.push(interaction);
            Logger.log(`Interação personalizada: ${type}`, CONFIG.LOG_LEVELS.INFO, details);
        },
        
        // Configuração do sistema
        config: CONFIG
    };

    // ============================================================================
    // INICIALIZAÇÃO DO SISTEMA
    // ============================================================================
    function initializeSystem() {
        if (SystemState.initialized) {
            Logger.warn('Sistema já inicializado');
            return;
        }
        
        try {
            // Log do banner inicial
            Logger.logBanner();
            
            // Inicializa todos os módulos
            ActivityMonitor.init();
            MessageMonitor.init();
            PerformanceMonitor.init();
            ErrorMonitor.init();
            ReportingSystem.init();
            
            // Log de informações do navegador
            Logger.log(`Navegador: ${navigator.userAgent.substring(0, 100)}...`, CONFIG.LOG_LEVELS.INFO, {
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                language: navigator.language,
                cookiesEnabled: navigator.cookieEnabled,
                screen: `${window.screen.width}x${window.screen.height}`,
                window: `${window.innerWidth}x${window.innerHeight}`,
                devicePixelRatio: window.devicePixelRatio
            });
            
            // Verifica recursos do navegador
            this.checkBrowserFeatures();
            
            // Mensagem romântica aleatória
            const randomMessage = CONFIG.ROMANTIC_MESSAGES[
                Math.floor(Math.random() * CONFIG.ROMANTIC_MESSAGES.length)
            ];
            Logger.romanticLog(randomMessage);
            
            SystemState.initialized = true;
            
            Logger.log('Sistema de monitoramento romanticamente ativado com sucesso! ❤️');
            Logger.log('='.repeat(70), CONFIG.LOG_LEVELS.INFO);
            
            // Exibe informações úteis para desenvolvedores
            console.log('%c💡 Dica: Use window.RomanticMonitor para acessar dados do sistema', 
                `color: ${CONFIG.LOG_COLORS.GREEN}; font-size: 12px;`);
            
        } catch (error) {
            Logger.errorLog('Falha na inicialização do sistema', error);
        }
    }
    
    // Verifica recursos do navegador
    function checkBrowserFeatures() {
        const features = {
            localStorage: !!window.localStorage,
            sessionStorage: !!window.sessionStorage,
            geolocation: !!navigator.geolocation,
            serviceWorker: 'serviceWorker' in navigator,
            webSocket: 'WebSocket' in window,
            webGL: (() => {
                try {
                    return !!window.WebGLRenderingContext;
                } catch(e) {
                    return false;
                }
            })(),
            touchEvents: 'ontouchstart' in window
        };
        
        Logger.log('Recursos do navegador verificados', CONFIG.LOG_LEVELS.DEBUG, features);
    }

    // ============================================================================
    // INICIALIZAÇÃO AUTOMÁTICA
    // ============================================================================
    // Espera o DOM estar pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeSystem);
    } else {
        // DOM já carregado
        setTimeout(initializeSystem, 100);
    }

})();