// Editar scriptRegistro.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Deve ser usado apartir de um servidor
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
const auth = getAuth(app); // Inicializa a autenticação

var buttonSair = document.getElementById('buttonSair');
buttonSair.addEventListener('click', () => {
  signOut(auth).then(() => {
    location.href = 'index.html';
  }).catch((error) => {
    alert(`Erro: ${error}`);
  });
})