// Importações do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBSk4FZXPVedVdBhDvo8UzYGhqiaDILlL0",
  authDomain: "forbys-d2e7f.firebaseapp.com",
  databaseURL: "https://forbys-d2e7f-default-rtdb.firebaseio.com",
  projectId: "forbys-d2e7f",
  storageBucket: "forbys-d2e7f.appspot.com",
  messagingSenderId: "826739439374",
  appId: "1:826739439374:web:0b8bc26953a717c25ec95f",
  measurementId: "G-GG8FXC09LL"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Função para login com email e senha
function loginWithEmailAndPassword(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Login bem-sucedido:");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === 'auth/wrong-password') {
        alert("Senha incorreta. Tente novamente.");
      } else if (errorCode === 'auth/user-not-found') {
        alert("Usuário não encontrado. Verifique o email e tente novamente.");
      } else {
        alert(`Erro: ${errorMessage}`);
      }
    });
}

// Exemplo de uso com botões de login
document.getElementById("loginEmailButton").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  loginWithEmailAndPassword(email, password);
});


/* |- Configuração de layouts */
var isMobile = false;
if (navigator.userAgentData && navigator.userAgentData.mobile) {
  isMobile = true;
} else if (/Mobi|Android/i.test(navigator.userAgent)) {
  isMobile = true;
}
if (isMobile) {
  document.getElementById('body').style.setProperty('height', `${window.innerHeight}px`);
}
else
  document.getElementById('body').style.setProperty('height', `100vh`);