import * as scriptTheme from './scriptTheme.js';
import * as scriptFirebase from './scriptFirebase.js';

// // Importações do Firebase
// // Import the functions you need from the SDKs you need
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBSk4FZXPVedVdBhDvo8UzYGhqiaDILlL0",
//   authDomain: "forbys-d2e7f.firebaseapp.com",
//   databaseURL: "https://forbys-d2e7f-default-rtdb.firebaseio.com",
//   projectId: "forbys-d2e7f",
//   storageBucket: "forbys-d2e7f.appspot.com",
//   messagingSenderId: "826739439374",
//   appId: "1:826739439374:web:0b8bc26953a717c25ec95f",
//   measurementId: "G-GG8FXC09LL"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);

// // Exemplo de uso com botões de login
// document.getElementById("loginEmailButton").addEventListener("click", (e) => {
//   e.preventDefault(); // Impede o refresh da página e permite o location.href = 'page.html'
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       var user = userCredential.user;
//       var uid = user.uid;
//       /*
//       página dinâmica: window.location.href = `page.html?uid=${uid}`;
//       page.html?uid=${uid}, resulta em uma nova página html apenas no lado do cliente
//       baseada no arquivo page.html mas personalizada pelo parâmetro ?uid=${uid}?
//       */
//       window.location.href = `page.html?uid=${uid}`;
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(`Erro: ${errorCode}, ${errorMessage}`);
//     });
// });

document.getElementById("loginEmailButton").addEventListener("click", (e) => {
  e.preventDefault(); // Impede o refresh da página e permite o location.href = 'page.html'
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  scriptFirebase.login(email, password);
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

// Aplicação de tema:
scriptTheme.getTheme();