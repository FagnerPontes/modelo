import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { createUserWithEmailAndPassword, getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
import { doc, getFirestore, setDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

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
const database = getDatabase(app);
const db = getFirestore(app); // Corrigido para passar o app
// Função para registrar um novo usuário
var confirm = true;

const registerUser = (email, password, emailError, passwordError, userData) => {
  var logErros = new Array();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;// registro de usuário
      const userId = user.uid; // ID único do usuário gerado pelo Firebase Authentication
      // Salvando os dados no Firestore
      setDoc(doc(db, "users", userId), userData)
        .then(() => {
          const divConcluido = document.getElementById("divConcluido");
          const formRegistro = document.getElementById("formRegistro");
          divConcluido.style.setProperty('display', 'block');
          formRegistro.style.setProperty('display', 'none');
        })
        .catch((error) => {
          const errorCodeData = error.code; // Código do erro
          const errorMessageData = error.message; // Mensagem do erro
          logErros.push(errorCodeData);
          logErros.push(errorMessageData);
          alert(`Erro: ${logErros[0]}, ${logErros[1]}`);
        });
    })
    .catch((error) => {
      // Tratamento de erro
      const errorCodeUser = error.code; // Código do erro
      const errorMessageUser = error.message; // Mensagem do erro
      logErros.push(errorCodeUser);
      logErros.push(errorMessageUser);
      // Exibir uma mensagem de erro no console
      if (errorCodeUser === 'auth/email-already-in-use') {
        emailError.innerText = ("Este email já está em uso. Tente outro.");
      } else if (errorCodeUser === 'auth/invalid-email') {
        emailError.innerText = ("O email fornecido é inválido.");
      } else if (errorCodeUser === 'auth/weak-password') {
        passwordError.innerText = ("A senha deve ter pelo menos 6 caracteres.");
      } else {
        alert(`Erro: ${logErros[0]}, ${logErros[1]}`);
      }
    });
};

// Usando o serviço ipapi para obter o código do país
// Deve ser usado apartir de um servidor
var countryCode = '';
fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    countryCode = data.country_calling_code;
    if (countryCode == '+55') {
      var phoneInput = document.getElementById('phone');
      var inputMask = new Inputmask("(99) 99999-9999");
      inputMask.mask(phoneInput);
    }
  })
  .catch(error => {
    var phoneInput = document.getElementById('phone');
    if (phoneInput.type === 'text')
      phoneInput.type = 'tel';
    console.error('Erro ao obter o código do país:', error);
  });

var birthdate = document.getElementById('birthdate');
var inputMaskDate = new Inputmask("99/99/9999");
inputMaskDate.mask(birthdate);

const registerButton = document.getElementById("registerButton");
// Evento de clique no botão de registro
registerButton.addEventListener("click", (e) => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("passwordConfirm").value;
  // Dados adicionais do usuário
  const userData = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    birthdate: document.getElementById('birthdate').value,
  };

  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const passwordError = document.getElementById("passwordError");

  emailError.innerText = '';
  phoneError.innerText = '';
  passwordError.innerText = '';
  e.preventDefault(); // Impede o comportamento padrão do formulário
  validarCampos(email, password, passwordConfirm, userData)
    .then(() => {
      registerUser(email, password, emailError, passwordError, userData);
    })
    .catch((error) => {
      console.log("Erro: " + error.message);
    });
});

function validarCampos(email, password, passwordConfirm, userData) {
  console.log(countryCode);
  console.log(userData.phone);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular básica para validar o email
  const phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const passwordError = document.getElementById("passwordError");

  emailError.innerText = '';
  phoneError.innerText = '';
  passwordError.innerText = '';

  return new Promise((resolve, reject) => {
    if (!emailPattern.test(email)) {
      emailError.innerText = 'Verifique seu email!';
      reject(new Error('Email inválido'));
      return;
    }

    if (countryCode === '+55' && !phonePattern.test(userData.phone)) {
      phoneError.innerText = 'Verifique seu telefone!';
      reject(new Error('Telefone inválido'));
      return;
    }

    if (password !== passwordConfirm) {
      passwordError.innerText = 'Senhas divergentes!';
      reject(new Error('Senhas não coincidem'));
      return;
    }

    if (!email || !password || !userData.name || !userData.phone || !userData.birthdate) {
      reject(new Error("Todos os campos devem ser preenchidos"));
      return;
    }

    resolve(); // Tudo está válido, resolvendo a Promise
  });
}
