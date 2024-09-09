import * as scriptFirebase from './scriptFirebase.js';
import * as scriptTheme from './scriptTheme.js';

// |- Mascara para input phone
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

const formRegistro = document.getElementById('formRegistro');
const divConcluido = document.getElementById('divConcluido');

const registerButton = document.getElementById("registerButton");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputPasswordConfirm = document.getElementById("passwordConfirm");
const inputPhone = document.getElementById('phone');
const inputBirthdate = document.getElementById('birthdate');

const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById("passwordError");

// Evento de clique no botão de registro
registerButton.addEventListener("click", (e) => {
  var email = inputEmail.value;
  var password = inputPassword.value;
  var passwordConfirm = inputPasswordConfirm.value;
  // Dados adicionais do usuário
  const userData = {
    name: inputEmail.value,
    phone: inputPhone.value,
    birthdate: inputBirthdate.value,
  };
  e.preventDefault(); // Impede o comportamento padrão do formulário
  validarCampos(email, password, passwordConfirm, userData)
});

function validarCampos(email, password, passwordConfirm, userData) {
  console.log(countryCode);
  console.log(userData.phone);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular básica para validar o email
  const phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;

  emailError.innerText = '';
  phoneError.innerText = '';
  passwordError.innerText = '';

  if (!emailPattern.test(email)) {
    emailError.innerText = 'Verifique seu email!';
    return;
  }

  if (countryCode === '+55' && !phonePattern.test(userData.phone)) {
    phoneError.innerText = 'Verifique seu telefone!';
    return;
  }

  if (password !== passwordConfirm) {
    passwordError.innerText = 'Senhas divergentes!';
    return;
  }

  if (!email || !password || !userData.name || !userData.phone || !userData.birthdate) {
    alert("Todos os campos devem ser preenchidos");
    return;
  }
  if (scriptFirebase.register(email, password, userData))
    if (scriptFirebase.logout()) {
      formRegistro.style.setProperty('display', 'none');
      divConcluido.style.setProperty('display', 'flex');
    }
}


// |- Layout
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


scriptTheme.getTheme();