// app.js – Carregamento de poesias com logs e tratamento de erros

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCQv92J6K0dX3YVTH7-RvTqn-F6nkVgMxk",
    authDomain: "mesespoesias.firebaseapp.com",
    projectId: "mesespoesias",
    storageBucket: "mesespoesias.firebasestorage.app",
    messagingSenderId: "888939691581",
    appId: "1:888939691581:web:4fb3fe96e565667fe4b454",
    measurementId: "G-XCDXFLZPTC"
};

console.log("🔥 Inicializando Firebase...");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("✅ Firebase inicializado.");

// Função de escape para segurança
function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Cria um parágrafo (linha do poema)
function criarParagrafo(linha) {
    if (linha === '') {
        return '<p class="linha-vazia">&nbsp;</p>';
    }
    return `<p style="line-height:1.4; margin:0.25rem 0;">${escapeHtml(linha)}</p>`;
}

// Função principal que carrega e renderiza as poesias
async function carregarPoesias() {
    const container = document.getElementById('lista-poesias');

    if (!container) {
        console.error("❌ Elemento #lista-poesias não encontrado no DOM.");
        return;
    }

    // Mostra um indicador de carregamento
    container.innerHTML = '<p class="loading-msg">🌙 Carregando poesias...</p>';

    try {
        console.log("📖 Buscando coleção 'poesias'...");
        const querySnapshot = await getDocs(collection(db, "poesias"));

        if (querySnapshot.empty) {
            container.innerHTML = '<p class="empty-msg">Nenhuma poesia encontrada no banco.</p>';
            console.warn("⚠️ Coleção 'poesias' vazia.");
            return;
        }

        console.log(`📄 Documentos encontrados: ${querySnapshot.size}`);
        let html = '';
        let documentosIgnorados = 0;

        querySnapshot.forEach(doc => {
            const p = doc.data();
            console.log(`📝 Lendo documento "${doc.id}":`, p);

            // Verificação rigorosa dos campos obrigatórios
            if (!p.conteudo || !p.titulo) {
                console.warn(`⚠️ Documento "${doc.id}" ignorado (falta titulo ou conteudo).`);
                documentosIgnorados++;
                return;
            }

            // Divide o texto em linhas
            const linhas = p.conteudo.split('\n').map(l => l.trim());
            const limiteInicial = 3;      // quantas linhas mostrar inicialmente
            const temMais = linhas.length > limiteInicial;

            // Linhas visíveis e extras
            const linhasVisiveis = linhas.slice(0, limiteInicial).map(criarParagrafo).join('');
            const extras = linhas.slice(limiteInicial);

            // Cria blocos progressivos para o "ler mais"
            const estagios = [];
            let restante = [...extras];
            const incrementos = [5, 20, 20];
            for (let inc of incrementos) {
                if (restante.length === 0) break;
                const bloco = restante.slice(0, inc);
                restante = restante.slice(inc);
                estagios.push(bloco);
            }
            if (restante.length > 0) estagios.push(restante);

            // Monta os blocos extras escondidos
            let extrasHtml = '';
            estagios.forEach((bloco, index) => {
                extrasHtml += `<div class="texto-extra" data-stage="${index + 1}">${bloco.map(criarParagrafo).join('')}</div>`;
            });

            // Botão "ler mais"
            const btnHtml = estagios.length > 0
                ? `<span class="ler-mais-btn" data-estagio-atual="0" data-total-estagios="${estagios.length}">… ler mais</span>`
                : '';

            // Formata data (apenas se for timestamp do Firestore)
            let dataFormatada = '';
            if (p.data && p.data.seconds) {
                dataFormatada = new Date(p.data.seconds * 1000).toLocaleDateString('pt-BR');
            }

            html += `
                <div class="poem-card new-poem-card">
                    <div class="poem-card-header">
                        <h3>${escapeHtml(p.titulo)}</h3>
                    </div>
                    ${dataFormatada ? `<div class="poem-date">${dataFormatada}</div>` : ''}
                    <div class="poem-content">
                        <div class="texto-curto">${linhasVisiveis}</div>
                        ${extrasHtml}
                        ${btnHtml}
                    </div>
                </div>
            `;
        });

        if (documentosIgnorados > 0) {
            console.warn(`⚠️ Total de documentos ignorados: ${documentosIgnorados}`);
        }

        if (html === '') {
            container.innerHTML = '<p class="empty-msg">Nenhuma poesia válida encontrada (verifique os campos no Firestore).</p>';
        } else {
            container.innerHTML = html;
            console.log("✅ Poesias renderizadas com sucesso.");
        }

    } catch (erro) {
        console.error("❌ Erro ao carregar poesias:", erro);
        container.innerHTML = `<p class="error-msg">Erro ao carregar: ${erro.message}</p>`;
    }
}

// Evento de clique para o "ler mais" (delegação no documento)
document.addEventListener('click', function(e) {
    const btn = e.target.closest('.ler-mais-btn');
    if (!btn) return;

    const poemContent = btn.closest('.poem-content');
    if (!poemContent) return;

    const estagioAtual = parseInt(btn.dataset.estagioAtual);
    const totalEstagios = parseInt(btn.dataset.totalEstagios);
    const proximoEstagio = estagioAtual + 1;

    if (proximoEstagio > totalEstagios) {
        // Esconder todos
        poemContent.querySelectorAll('.texto-extra').forEach(div => div.classList.remove('visivel'));
        btn.textContent = '… ler mais';
        btn.dataset.estagioAtual = '0';
        return;
    }

    const bloco = poemContent.querySelector(`.texto-extra[data-stage="${proximoEstagio}"]`);
    if (bloco) {
        bloco.classList.add('visivel');
    }

    btn.dataset.estagioAtual = proximoEstagio;
    btn.textContent = (proximoEstagio === totalEstagios) ? '… mostrar menos' : '… ler mais';
});

// Quando a página carregar, iniciamos o processo
window.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 Página carregada. Iniciando carregamento das poesias...");
    carregarPoesias();
});
