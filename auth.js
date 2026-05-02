// auth.js – Login Google com whitelist (somente rogerbastos@gmail.com)
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ⚠️ LISTA DE E‑MAILS AUTORIZADOS
const EMAILS_AUTORIZADOS = [
  "rogerbastos18y@gmail.com",
  "luisamachado.s.miranda@gmail.com",
  "misteriosamisterio123@gmail.com"
];

const overlay = document.getElementById("login-overlay");
const conteudo = document.getElementById("conteudo-principal");
const btnGoogle = document.getElementById("btn-google-login");
const erroMsg = document.getElementById("login-error");

function mostrarErro(texto) {
  erroMsg.textContent = texto;
  erroMsg.style.display = "block";
}

function esconderErro() {
  erroMsg.style.display = "none";
}

// Gerencia visualização
function gerenciarAcesso(user) {
  if (user && EMAILS_AUTORIZADOS.includes(user.email)) {
    overlay.style.display = "none";
    conteudo.style.display = "block";
  } else {
    overlay.style.display = "flex";
    conteudo.style.display = "none";

    if (user) {
      signOut(auth);
      mostrarErro("E-mail não autorizado. Use uma conta permitida.");
    }
  }
}
// Escuta mudanças de login
onAuthStateChanged(auth, gerenciarAcesso);

// Clique no botão
btnGoogle.addEventListener("click", async () => {
  esconderErro();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error);
    if (error.code === "auth/popup-closed-by-user") {
      mostrarErro("Login cancelado. Tente novamente.");
    } else {
      mostrarErro("Erro ao autenticar. Veja o console.");
    }
  }
});
