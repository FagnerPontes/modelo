// Editar scriptRegistro.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

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
const auth = getAuth(app);
const user = auth.currentUser;

//|- Verificar login
//Se usuário estiver logado
if (user) {
  var buttonSair = document.getElementById('buttonSair');
  buttonSair.addEventListener('click', () => {
    signOut(auth).then(() => {
      location.href = 'index.html';
    }).catch((error) => {
      alert(`Erro: ${error}`);
    });
  })
}
//Se usuário NÂO estiver logado
else {
  window.location.href = 'index.html';
}