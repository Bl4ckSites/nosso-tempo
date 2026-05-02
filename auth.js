// auth.js – Login Google com whitelist (vários e‑mails autorizados)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCQv92J6K0dX3YVTH7-RvTqn-F6nkVgMxk",
  authDomain: "mesespoesias.firebaseapp.com",
  projectId: "mesespoesias",
  storageBucket: "mesespoesias.firebasestorage.app",
  messagingSenderId: "888939691581",
  appId: "1:888939691581:web:4fb3fe96e565667fe4b454",
  measurementId: "G-XCDXFLZPTC"
};

console.log("🔥 Inicializando Firebase Auth...");
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ⚠️ LISTA DE E‑MAILS AUTORIZADOS (adicione quantos quiser)
const EMAILS_AUTORIZADOS = [
  "rogerbastos18y@gmail.com",
  "luisamachado.s.miranda@gmail.com",
  "misteriosamisterio123@gmail.com"
];

// Elementos do DOM – proteção para não quebrar se não existirem
const overlay = document.getElementById("login-overlay");
const conteudo = document.getElementById("conteudo-principal");
const btnGoogle = document.getElementById("btn-google-login");
const erroMsg = document.getElementById("login-error");

// Verifica se os elementos principais existem
if (!overlay || !conteudo) {
  console.error("❌ Elementos 'login-overlay' ou 'conteudo-principal' não encontrados no HTML.");
}
if (!btnGoogle) {
  console.error("❌ Botão 'btn-google-login' não encontrado. Verifique o ID no HTML.");
}
if (!erroMsg) {
  console.warn("⚠️ Elemento 'login-error' não encontrado. As mensagens de erro não serão exibidas.");
}

function mostrarErro(texto) {
  if (erroMsg) {
    erroMsg.textContent = texto;
    erroMsg.style.display = "block";
  }
}

function esconderErro() {
  if (erroMsg) {
    erroMsg.style.display = "none";
  }
}

// Gerencia visualização
function gerenciarAcesso(user) {
  console.log("👤 Usuário autenticado:", user ? user.email : "nenhum");
  if (user && EMAILS_AUTORIZADOS.includes(user.email)) {
    console.log("✅ E-mail autorizado. Liberando conteúdo.");
    if (overlay) overlay.style.display = "none";
    if (conteudo) conteudo.style.display = "block";
  } else {
    console.warn("⛔ Acesso negado.");
    if (overlay) overlay.style.display = "flex";
    if (conteudo) conteudo.style.display = "none";

    if (user) {
      signOut(auth);
      mostrarErro("E-mail não autorizado. Use uma conta permitida.");
    }
  }
}

// Escuta mudanças de login
onAuthStateChanged(auth, gerenciarAcesso);

// Clique no botão (somente se ele existir)
if (btnGoogle) {
  btnGoogle.addEventListener("click", async () => {
    esconderErro();
    console.log("🔄 Tentando login com Google...");
    try {
      await signInWithPopup(auth, provider);
      console.log("✅ Login bem-sucedido.");
    } catch (error) {
      console.error("❌ Erro no login:", error);
      if (error.code === "auth/popup-closed-by-user") {
        mostrarErro("Login cancelado. Tente novamente.");
      } else if (error.code === "auth/popup-blocked") {
        mostrarErro("Popup bloqueado. Permita popups para este site.");
      } else {
        mostrarErro("Erro ao autenticar. Veja o console.");
      }
    }
  });
} else {
  console.error("❌ Não foi possível adicionar evento de clique. Botão não encontrado.");
}
